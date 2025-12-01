import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const leadSchema = z.object({
  name: z.string().trim().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }).max(100),
  phone: z.string().trim().min(10, { message: "Telefone inválido" }).max(20),
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
  creditType: z.string().min(1, { message: "Selecione o tipo de crédito" }),
});

type LeadFormData = z.infer<typeof leadSchema>;

export const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    phone: "",
    email: "",
    creditType: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      leadSchema.parse(formData);
      setErrors({});
      
      // Save lead to database
      const { error: dbError } = await supabase
        .from('leads')
        .insert({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          credit_type: formData.creditType,
        });

      if (dbError) {
        console.error('Error saving lead:', dbError);
        toast({
          variant: "destructive",
          title: "Erro ao salvar",
          description: "Não foi possível salvar seus dados. Tente novamente.",
        });
        return;
      }
      
      // Prepare WhatsApp message
      const message = `Olá! Meu nome é ${formData.name}.\n\nEstou interessado(a) em: ${formData.creditType}\n\nMeus contatos:\n📧 ${formData.email}\n📱 ${formData.phone}`;
      const whatsappUrl = `https://wa.me/5593991830920?text=${encodeURIComponent(message)}`;
      
      toast({
        title: "✅ Dados enviados!",
        description: "Você será redirecionado para o WhatsApp",
      });
      
      // Redirect to WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof LeadFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          variant: "destructive",
          title: "Erro no formulário",
          description: "Verifique os campos destacados",
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-card"
    >
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
          <Sparkles className="w-8 h-8 text-accent" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Fale Comigo Agora!</h2>
        <p className="text-muted-foreground">
          Preencha o formulário e receba atendimento personalizado no WhatsApp
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome Completo *</Label>
          <Input
            id="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefone/WhatsApp *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="creditType">Tipo de Crédito *</Label>
          <Select
            value={formData.creditType}
            onValueChange={(value) => setFormData({ ...formData, creditType: value })}
          >
            <SelectTrigger className={errors.creditType ? "border-destructive" : ""}>
              <SelectValue placeholder="Selecione o tipo de crédito" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="imovel">Crédito para Imóvel</SelectItem>
              <SelectItem value="terreno">Crédito para Terreno</SelectItem>
              <SelectItem value="construcao">Crédito para Construção</SelectItem>
              <SelectItem value="reforma">Crédito para Reforma</SelectItem>
              <SelectItem value="caminhao">Crédito para Caminhão</SelectItem>
              <SelectItem value="servicos">Crédito para Serviços</SelectItem>
            </SelectContent>
          </Select>
          {errors.creditType && (
            <p className="text-sm text-destructive">{errors.creditType}</p>
          )}
        </div>

        <Button type="submit" className="w-full" variant="hero" size="lg">
          <MessageCircle className="w-5 h-5 mr-2" />
          Falar no WhatsApp
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Ao enviar, você será redirecionado para o WhatsApp
        </p>
      </form>
    </motion.div>
  );
};
