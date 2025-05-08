import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
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
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      ref={containerRef}
      className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-24 bg-white"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          variants={itemVariants}
        >
          Contáctanos
        </motion.h2>
        <div className="w-12 h-1 bg-vessel-red mx-auto my-4"></div>
      </div>

      <Card className="relative mx-auto w-full max-w-6xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Formulario lado izquierdo */}
          <motion.div
            className="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10"
            variants={itemVariants}
          >
            <div>
              <CardHeader className="p-0">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold">
                      Envíanos un mensaje
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Ponte en contacto con nuestro equipo para recibir soporte
                      o cotizaciones de productos.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <motion.div className="mt-8" variants={itemVariants}>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
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
                        className="w-full bg-vessel-red hover:bg-red-700 text-white py-3"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            </div>
          </motion.div>

          <Separator className="lg:my-6 lg:hidden" />

          {/* Información de contacto lado derecho */}
          <motion.div
            className="bg-muted/50 p-6 lg:w-3/5 lg:p-10"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  Información de Contacto:
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {contactInfo.map((item, index) => (
                    <motion.li
                      key={item.id}
                      className="flex items-start"
                      variants={listItemVariants}
                      custom={index}
                    >
                      <div className="bg-vessel-red/10 p-2 rounded-full mr-4">
                        <div className="text-vessel-red">{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  ¿Por qué contactarnos?
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    "Asesoría técnica especializada",
                    "Cotizaciones personalizadas",
                    "Atención a distribuidores",
                    "Soporte post-venta",
                    "Envíos a todo México",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      variants={listItemVariants}
                      custom={index + contactInfo.length}
                    >
                      <Check className="mr-2 h-4 w-4 text-vessel-red" />
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.section>
  );
}
