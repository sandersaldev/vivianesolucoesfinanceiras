import { motion } from "framer-motion";
import { Globe, Handshake, Target, Award } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Atendimento Nacional e Internacional",
    description: "Soluções de crédito para clientes em todo o Brasil e no exterior",
  },
  {
    icon: Handshake,
    title: "Parcerias Estratégicas",
    description: "Trabalhamos com os principais bancos, imobiliárias e construtoras",
  },
  {
    icon: Target,
    title: "Estratégia Personalizada",
    description: "Análise completa do seu perfil para encontrar as melhores condições",
  },
  {
    icon: Award,
    title: "Expertise Comprovada",
    description: "Anos de experiência em crédito imobiliário e construção de patrimônio",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Por Que Escolher <span className="text-[#E78404]">Nossos Serviços?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compromisso com excelência e resultados para você investir com segurança
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#091e2d]">
                  <benefit.icon className="w-6 h-6 text-[#D57C09]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#F4E7D8]">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
