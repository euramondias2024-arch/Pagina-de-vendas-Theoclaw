import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const theoClawImg = "https://i.imgur.com/rIGY6qE.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      {/* Secondary smaller grid for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "12.5px 12.5px",
        }}
      />

      {/* Subtle red glow from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#E81C26]/[0.04] rounded-full blur-[150px] pointer-events-none" />


      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">

        {/* TheoClaw image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <img src={theoClawImg} alt="TheoClaw" className="w-32 h-32 object-contain rounded-2xl" referrerPolicy="no-referrer" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-5xl md:text-7xl font-black tracking-tight text-center leading-[1.1] uppercase mb-4"
        >
          Oi, eu sou o<br />
          <span className="text-[#E81C26]">THEOCLAW!</span>
        </motion.h1>

        {/* Subtitle */}
         <motion.p
           initial={{ opacity: 0, y: 16 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.25 }}
           className="text-gray-500 text-base md:text-lg mb-12 text-center"
         >
           A IA mais poderosa para negócios digitais
         </motion.p>

        {/* Feature Card with red corner accents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="relative max-w-lg w-full mb-10"
        >
          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#E81C26]/40 rounded-tl-sm" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#E81C26]/40 rounded-br-sm" />

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-8 py-7 text-center backdrop-blur-sm">
            <h3 className="text-white font-bold text-base mb-3">
              Centro de comando para seus agentes de IA
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
               Dashboard, ranking, financeiro, projetos e tudo que você precisa
               pra gerenciar seus agentes de IA em tempo real, sem complicação.
             </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            to="/senha"
            className="inline-flex items-center gap-2 bg-[#E81C26] text-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#c8151f] transition-colors shadow-lg shadow-[#E81C26]/20"
          >
            Acessar Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Credit line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-gray-600 text-xs mt-8"
        >
          Exclusivo <span className="text-[#E81C26]">@theoclaw</span>
        </motion.p>
      </div>
    </div>
  );
}
