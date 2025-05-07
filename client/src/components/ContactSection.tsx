import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Por favor, selecciona un asunto." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
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
      subject: "",
      message: ""
    }
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
        description: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
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
      content: "Ciudad de México, México",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Teléfono",
      content: "+52 (55) 1234-5678",
      icon: <Phone className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Correo Electrónico",
      content: "info@vesselmx.com",
      icon: <Mail className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Horario de Atención",
      content: "Lunes - Viernes: 9:00 AM - 6:00 PM",
      icon: <Clock className="h-5 w-5" />
    }
  ];

  return (
    <section id="contact" className="py-20 bg-vessel-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Ponte en <span className="text-vessel-red">Contacto</span>
          </h2>
          <div className="w-20 h-1 bg-vessel-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            ¿Tienes preguntas sobre nuestros productos o necesitas ayuda? Comunícate con nuestro equipo.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-montserrat font-semibold text-2xl mb-6 text-white">Información de Contacto</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.id} className="flex items-start">
                  <div className="text-vessel-red text-xl mr-4 pt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-lg mb-1">{item.title}</h4>
                    <p className="opacity-80">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Removed "Síguenos" section as requested */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-semibold text-2xl mb-6 text-white">Envíanos un Mensaje</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white opacity-90 font-montserrat">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Tu nombre" 
                          className="bg-vessel-gray border-gray-700 text-white placeholder:text-gray-400"
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
                      <FormLabel className="text-white opacity-90 font-montserrat">Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="tu.correo@ejemplo.com" 
                          className="bg-vessel-gray border-gray-700 text-white placeholder:text-gray-400"
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
                      <FormLabel className="text-white opacity-90 font-montserrat">Número de Teléfono</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Tu número de teléfono" 
                          className="bg-vessel-gray border-gray-700 text-white placeholder:text-gray-400"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white opacity-90 font-montserrat">Asunto</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-vessel-gray border-gray-700 text-white">
                            <SelectValue placeholder="Selecciona un asunto" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Product Inquiry">Consulta de Producto</SelectItem>
                          <SelectItem value="Support Request">Solicitud de Soporte</SelectItem>
                          <SelectItem value="Distributor Information">Información de Distribución</SelectItem>
                          <SelectItem value="Other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white opacity-90 font-montserrat">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="¿Cómo podemos ayudarte?" 
                          className="bg-vessel-gray border-gray-700 text-white placeholder:text-gray-400"
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-vessel-red hover:bg-red-700 text-white font-montserrat font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
