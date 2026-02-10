"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";

// Importando componentes
import TechSpecs from "@/components/TechSpecs";
import ProjectLog from "@/components/ProjectLog";
import ContactFooter from "@/components/ContactFooter";
import Education from "@/components/Education";
import About from "@/components/About";
import Terminal from "@/components/Terminal";
import MatrixRain from "@/components/MatrixRain";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-[#0b0b0b] text-white selection:bg-neon selection:text-black font-sans">

      <Navbar />

      {/* --- HERO SECTION (Capa) --- */}
      <div className="min-h-screen flex flex-col items-center justify-center relative pt-20">

        {/* Background Grid (Efeito de fundo) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

        <div className="z-10 text-center px-4 max-w-5xl mx-auto space-y-8 mt-10 md:mt-0">

          {/* Badge "Open to Work" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-xs font-mono text-gray-300 tracking-widest">OPEN TO WORK</span>
          </motion.div>

          {/* TÍTULO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black italic tracking-tighter text-white leading-[0.9]"
          >
            LEONARDO <br />
            <span className="text-neon">
              CANTELLE
            </span>
          </motion.h1>

          {/* Descrição Full-Stack & Maker */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 font-mono max-w-2xl mx-auto leading-relaxed"
          >
            Desenvolvedor Full-Stack & Maker. <br />
            Criando pontes entre software complexo e hardware físico.
          </motion.p>

          {/* BOTÕES FUNCIONAIS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
          >
            {/* Botão 1: Leva para #logs (Projetos) */}
            <a
              href="#logs"
              className="group relative px-8 py-4 bg-neon text-black font-bold uppercase tracking-widest overflow-hidden cursor-pointer w-full md:w-auto flex justify-center items-center gap-2 hover:bg-neon/90 transition-colors"
            >
              INITIALIZE PROJECTS <ArrowRight size={20} />
            </a>

            {/* Botão 2: Leva para #specs (Habilidades) */}
            <a
              href="#specs"
              className="px-8 py-4 border border-white/20 text-white font-mono uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto"
            >
              <Cpu size={18} /> HARDWARE SPECS
            </a>
          </motion.div>

        </div>
      </div>

      <div id="specs">
        <TechSpecs />
      </div>
      <Education />
      <div id="logs">
        <ProjectLog />
      </div>
      <About />
      <section className="relative bg-black border-t border-white/10 min-h-[600px] flex items-center overflow-hidden">
        <MatrixRain />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none z-0" />
        <div className="relative z-10 w-full">
          <Terminal />
        </div>
      </section>
      <ContactFooter />

    </main>
  );
}