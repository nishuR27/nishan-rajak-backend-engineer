import { useCallback, useRef, useEffect } from "react";

interface SparkProps {
  children: React.ReactNode;
  className?: string;
}

const ClickSpark = ({ children, className = "" }: SparkProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 6; i++) {
      const spark = document.createElement("div");
      const angle = (i * 60) * (Math.PI / 180);
      const distance = 30 + Math.random() * 20;

      spark.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: linear-gradient(135deg, hsl(270 80% 60%), hsl(280 90% 65%));
        pointer-events: none;
        z-index: 50;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 1;
      `;

      container.appendChild(spark);

      requestAnimationFrame(() => {
        spark.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`;
        spark.style.opacity = "0";
      });

      setTimeout(() => spark.remove(), 500);
    }
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`} onClick={handleClick} style={{ position: "relative", overflow: "visible" }}>
      {children}
    </div>
  );
};

export default ClickSpark;
