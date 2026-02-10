"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configura o tamanho do canvas para a tela inteira
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Caracteres que vão cair
    const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const nums = "0123456789";
    
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize; // Número de colunas de chuva

    // Array para guardar a posição Y de cada gota
    // Inicializa tudo com 1 (topo da tela)
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      // Cria o rastro preto semitransparente (fade effect)
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Cor verde Matrix
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        // Pega um caractere aleatório
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Desenha o caractere
        // x = coluna * tamanho da fonte, y = valor do drop * tamanho da fonte
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reseta a gota para o topo aleatoriamente após sair da tela
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move a gota para baixo
        drops[i]++;
      }
    };

    // Loop de animação (30FPS é suficiente para esse efeito)
    const interval = setInterval(draw, 33);

    // Limpa o intervalo e ajusta resize
    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
    />
  );
}