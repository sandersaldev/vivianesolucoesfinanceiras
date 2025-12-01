import { motion } from "framer-motion";
import { Building2, TrendingUp, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import fotoHero from "@/assets/foto-hero.png";
import { LeadForm } from "./LeadForm";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Content */}
  {/* Increase vertical padding on large screens to align the hero content with design guides */}
  <div className="container mx-auto px-4 py-20 lg:py-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="relative space-y-8 pt-20 sm:pt-28 md:pt-32 lg:pt-0">
            {/* Foto hero positioned behind the left column content (visible on lg+) */}
            <img
              src={fotoHero}
              alt="Foto hero"
              className="absolute block top-[-40%] sm:top-[-25%] md:top-[-20%] lg:top-[20%] left-1/2 sm:left-1/2 md:left-1/2 lg:left-auto -translate-x-1/2 sm:-translate-x-1/2 md:-translate-x-1/2 lg:-translate-x-0 lg:right-0 lg:translate-x-12 -translate-y-[-30%] sm:-translate-y-[-25%] md:-translate-y-[-20%] lg:-translate-y-1/2 w-95 sm:w-96 md:w-[420px] lg:w-[720px] h-auto object-cover opacity-90 -z-10 rounded-lg"
            />
            <div className="space-y-4">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-accent" />
                <span style={{ textShadow: '0 6px 18px rgba(0,0,0,0.6)' }} className="text-accent font-semibold tracking-wider uppercase text-sm">
                  Viviane Ramos - Especialista em Crédito Imobiliário
                </span>
              </motion.div>
              
              <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3
            }} className="text-5xl lg:text-6xl font-bold leading-tight">
                Realize o Sonho da <span style={{ textShadow: '0 10px 30px rgba(0,0,0,0.7)' }} className="text-[#E78404]">Casa Própria</span>
              </motion.h1>
              
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="text-xl text-muted-foreground leading-relaxed">
                <span style={{ textShadow: '0 6px 20px rgba(0,0,0,0.6)' }}>
                  Linhas de crédito para imóvel, terreno, construção, reforma, caminhão e serviços.
                  Construa seu patrimônio com estratégia e segurança.
                </span>
              </motion.p>
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                <Building2 className="w-8 h-8 text-[#E78404] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[#F4E7D8]">Todo Brasil</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                <TrendingUp className="w-8 h-8 text-[#E78404] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[#F4E7D8]">Exterior</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                <Shield className="w-8 h-8 text-[#E78404] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[#F4E7D8]">Seguro</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Lead Form */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <LeadForm />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>;
};