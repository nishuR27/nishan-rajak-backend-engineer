import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, MapPin, Mail as MailIcon, Github } from "lucide-react";
import { toast } from "sonner";
import ClickSpark from "./ClickSpark";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSent(true);
    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="section-spacing relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project idea, need a backend architect, or just want to connect? Let's talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {[
              { icon: MailIcon, label: "Email", value: "nishan.developer.dev@gmail.com", href: "mailto:nishan.developer.dev@gmail.com" },
              { icon: Github, label: "GitHub", value: "github.com/nishuR31", href: "https://github.com/nishuR31" },
              { icon: MapPin, label: "Location", value: "Available Remote", href: undefined },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass rounded-xl p-5 glow-border group hover:glow transition-all duration-500">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors break-all">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-xl p-8 glow-border space-y-5"
          >
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-12">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center glow">
                  <CheckCircle size={32} className="text-primary-foreground" />
                </div>
                <p className="text-foreground font-semibold text-xl">Thanks for reaching out!</p>
                <p className="text-muted-foreground text-sm">I'll respond within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-muted-foreground mb-2 block uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition"
                      placeholder="Your name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-muted-foreground mb-2 block uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition"
                      placeholder="your@email.com"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground mb-2 block uppercase tracking-wider">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition resize-none"
                    placeholder="Tell me about your project or idea..."
                    maxLength={1000}
                  />
                </div>
                <ClickSpark>
                  <button
                    type="submit"
                    className="gradient-bg text-primary-foreground px-7 py-3.5 rounded-lg font-medium text-sm hover:opacity-90 transition-all glow hover:glow-strong flex items-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </ClickSpark>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
