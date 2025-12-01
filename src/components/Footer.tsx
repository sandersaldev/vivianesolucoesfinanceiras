import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-1 text-[#E78404]">Viviane Ramos</h3>
            <h4 className="text-md text-white mb-4">Especialista em Crédito Imobiliário</h4>
            <p className="text-muted-foreground mb-4">
              Ajudando você a construir patrimônio com estratégia e segurança.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/viviane__ramos/"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#D57C09]" />
              </a>
              <a
                href="https://www.facebook.com/vivianeramoscf/"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#D57C09]" />
              </a>
              <a
                href="https://wa.me/5593991830920"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5 text-[#D57C09]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Crédito Imobiliário</li>
              <li>Crédito para Terreno</li>
              <li>Crédito para Construção</li>
              <li>Crédito para Reforma</li>
              <li>Crédito para Caminhão</li>
              <li>Crédito para Serviços</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" href="tel:093991830920"/>
                <span>(93) 99183-0920</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" href="mailto:vivianeramosstm@gmail.com"/>
                <span>vivianeramosstm@gmail.com</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              🌎 Atendimento em todo Brasil e exterior
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground space-y-2">
          <p>© {new Date().getFullYear()} Viviane Soluções Financeiraas. Todos os direitos reservados.</p>
          <p>
            Página desenvolvida por{" "}
            <a
              href="https://amplieseumkt.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E78404] hover:underline font-semibold transition-colors"
            >
              AMPLIE MARKETING E TECNOLOGIA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
