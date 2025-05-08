import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z
    .string()
    .email({ message: "Por favor, introduce un correo electrónico válido." }),
  phone: z.string().optional(),
  company: z.string().optional(), // Reemplazamos "subject" por "company"
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      form.reset();
      toast({
        title: "Mensaje Enviado",
        description: "¡Gracias por tu mensaje! Te responderemos pronto.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
      console.error("Error al enviar mensaje:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      id: 1,
      title: "Dirección",
      content: "Av. Aviación 4376-LOCAL 5, Jardín Real, 45136 Zapopan, Jal.",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Teléfono",
      content: "+52 33 3968 3660",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Correo Electrónico",
      content: "contacto@vesselmexico.com",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Horario de Atención",
      content: "Lunes - Viernes: 9:00 AM - 6:00 PM",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white text-gray-800 relative overflow-hidden">
      {/* Efecto decorativo - círculos flotantes */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-vessel-red"></div>
        <div className="absolute top-1/4 right-20 w-40 h-40 rounded-full bg-vessel-red"></div>
        <div className="absolute bottom-20 -left-10 w-52 h-52 rounded-full bg-vessel-red"></div>
        <div className="absolute -bottom-20 right-1/3 w-64 h-64 rounded-full bg-vessel-red"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-gray-900">
            Contáctanos <span className="text-vessel-red"></span>
          </h2>
          <div className="w-20 h-1 bg-vessel-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            ¿Tienes preguntas sobre nuestros productos o necesitas una
            cotización? Comunícate con nuestro equipo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tarjeta de información de contacto con efecto de elevación */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-montserrat font-semibold text-2xl mb-6 text-gray-900">
              Vessel México
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <motion.div 
                  key={item.id} 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-vessel-red text-xl mr-4 pt-1 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-lg mb-1 text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formulario de contacto con efecto de desplazamiento */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-montserrat font-semibold text-2xl mb-6 text-gray-900">
              Envíanos un Mensaje
            </h3>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-montserrat">
                        Nombre Completo
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tu nombre"
                          className="border-gray-300 focus:border-vessel-red focus:ring-vessel-red"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-montserrat">
                        Correo Electrónico
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="tu.correo@ejemplo.com"
                          className="border-gray-300 focus:border-vessel-red focus:ring-vessel-red"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 font-montserrat">
                          Número de Teléfono
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Tu número de teléfono"
                            className="border-gray-300 focus:border-vessel-red focus:ring-vessel-red"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 font-montserrat">
                          Empresa
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nombre de tu empresa"
                            className="border-gray-300 focus:border-vessel-red focus:ring-vessel-red"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-montserrat">
                        Mensaje
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="¿Cómo podemos ayudarte?"
                          className="border-gray-300 focus:border-vessel-red focus:ring-vessel-red resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-vessel-red hover:bg-red-700 text-white font-montserrat font-medium transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
