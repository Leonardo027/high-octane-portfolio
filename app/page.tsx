"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b0b0b] p-24">
      
      {/* Container Animado */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-6"
      >
        
        {/* Ícone girando levemente */}
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="inline-block p-4 border-2 border-[#ccff00] rounded-full"
        >
          <Terminal size={48} className="text-[#ccff00]" />
        </motion.div>

        {/* Títulos */}
        <h1 className="text-6xl font-black tracking-tighter uppercase italic text-white">
          System <span className="text-[#ccff00]">Online</span>
        </h1>
        
        <p className="text-xl text-gray-400 font-mono">
          Waiting for telemetry data...
        </p>

        {/* Botão com Hover */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#ccff00", color: "#000" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border border-[#ccff00] text-[#ccff00] font-bold uppercase tracking-widest mt-8"
        >
          Initialize
        </motion.button>

      </motion.div>
    </main>
  );
}