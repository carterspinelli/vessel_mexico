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
    <section id="contact" className="py-20 bg-white text-gray-800 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-2 text-gray-900">
            Contáctanos
          </h2>
          <div className="w-16 h-1 bg-vessel-red mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-base text-gray-600">
            ¿Tienes preguntas sobre nuestros productos profesionales o necesitas una
            cotización? Nuestro equipo de especialistas está listo para ayudarte.
          </p>
        </motion.div>

        {/* Contenedor principal con barra roja a la izquierda */}
        <div className="relative max-w-5xl mx-auto">
          {/* Barra vertical roja */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-vessel-red transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Columna de información de contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative lg:pr-12 mb-10 lg:mb-0"
            >
              <div className="text-right hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 pr-6">
                <div className="w-4 h-4 rounded-full bg-vessel-red"></div>
              </div>
              
              <div className="p-6 lg:p-0">
                <h3 className="font-montserrat font-medium text-xl mb-8 text-gray-900 border-b border-gray-200 pb-2">
                  Información de Contacto
                </h3>

                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.id} className="flex items-start">
                      <div className="text-vessel-red flex-shrink-0 mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-montserrat font-medium text-base mb-1 text-gray-800">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Horario de atención:</span> Lunes a Viernes 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Columna del formulario */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative lg:pl-12"
            >
              <div className="text-left hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 pl-6">
                <div className="w-4 h-4 rounded-full bg-vessel-red"></div>
              </div>
              
              <div className="p-6 lg:p-0">
                <h3 className="font-montserrat font-medium text-xl mb-8 text-gray-900 border-b border-gray-200 pb-2">
                  Envíanos un Mensaje
                </h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-montserrat text-sm">
                            Nombre Completo
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre"
                              className="border-gray-200 focus:border-vessel-red focus:ring-1 focus:ring-vessel-red"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-montserrat text-sm">
                              Correo Electrónico
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="tu.correo@ejemplo.com"
                                className="border-gray-200 focus:border-vessel-red focus:ring-1 focus:ring-vessel-red"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-montserrat text-sm">
                              Teléfono
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Tu número de teléfono"
                                className="border-gray-200 focus:border-vessel-red focus:ring-1 focus:ring-vessel-red"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-montserrat text-sm">
                            Empresa
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nombre de tu empresa"
                              className="border-gray-200 focus:border-vessel-red focus:ring-1 focus:ring-vessel-red"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-montserrat text-sm">
                            Mensaje
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="¿Cómo podemos ayudarte?"
                              className="border-gray-200 focus:border-vessel-red focus:ring-1 focus:ring-vessel-red resize-none"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="bg-vessel-red hover:bg-red-700 text-white font-montserrat text-sm py-2 px-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
