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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contáctanos
          </motion.h2>
          <div className="w-12 h-1 bg-vessel-red mx-auto my-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Nombre
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nombre completo"
                          className="h-11 border-gray-200 focus:ring-vessel-red focus:border-vessel-red"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Correo Electrónico
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="correo@empresa.com"
                            className="h-11 border-gray-200 focus:ring-vessel-red focus:border-vessel-red"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Teléfono
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(33) 1234-5678"
                            className="h-11 border-gray-200 focus:ring-vessel-red focus:border-vessel-red"
                            type="tel"
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
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Empresa
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nombre de la empresa"
                          className="h-11 border-gray-200 focus:ring-vessel-red focus:border-vessel-red"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        Mensaje
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="¿En qué podemos ayudarte?"
                          className="min-h-[120px] border-gray-200 focus:ring-vessel-red focus:border-vessel-red resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="bg-vessel-red hover:bg-red-700 text-white px-6 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="text-vessel-red mr-4 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-4 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  Horario de atención: Lunes a Viernes 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
