import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Orb pulse */}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full gradient-bg opacity-20 blur-xl animate-pulse" />
              <div className="absolute inset-2 rounded-full gradient-bg opacity-40 blur-md animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="absolute inset-4 rounded-full gradient-bg opacity-80" />
            </div>

            {/* Loading dots */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full gradient-bg loader-dot"
                />
              ))}
            </div>

            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              Initializing
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
