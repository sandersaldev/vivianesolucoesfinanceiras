import { motion } from "framer-motion";
import { Home, MapPin, Hammer, Wrench, Truck, Briefcase } from "lucide-react";
import imovelImg from "@/assets/services/imovel.jpg";
import terrenoImg from "@/assets/services/terreno.jpg";
import construcaoImg from "@/assets/services/construcao.jpg";
import reformaImg from "@/assets/services/reforma.jpg";
import caminhaoImg from "@/assets/services/caminhao.jpg";
import servicosImg from "@/assets/services/servicos.jpg";

const services = [
  {
    icon: Home,
    title: "Crédito Imobiliário",
    description: "Financiamento para compra do seu imóvel residencial ou comercial",
    image: imovelImg,
  },
  {
    icon: MapPin,
    title: "Crédito para Terreno",
    description: "Aquisição de terrenos urbanos ou rurais para investimento",
    image: terrenoImg,
  },
  {
    icon: Hammer,
    title: "Crédito para Construção",
    description: "Financie a construção do seu imóvel dos sonhos",
    image: construcaoImg,
  },
  {
    icon: Wrench,
    title: "Crédito para Reforma",
    description: "Renove e valorize seu patrimônio com crédito facilitado",
    image: reformaImg,
  },
  {
    icon: Truck,
    title: "Crédito para Caminhão",
    description: "Financiamento especializado para veículos pesados",
    image: caminhaoImg,
  },
  {
    icon: Briefcase,
    title: "Crédito para Serviços",
    description: "Soluções de crédito para sua empresa crescer",
    image: servicosImg,
  },
];

export const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Soluções de Crédito Para <span className="text-[#E78404]">Cada Necessidade</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Linhas de crédito flexíveis e taxas competitivas para realizar seus projetos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/90 backdrop-blur-sm">
                    <service.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#F4E7D8]">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
