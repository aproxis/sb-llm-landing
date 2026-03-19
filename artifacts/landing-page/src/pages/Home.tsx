import { motion } from "framer-motion";
import { 
  Play, 
  CalendarHeart, 
  LineChart, 
  BellRing, 
  Sparkles,
  UserPlus,
  CheckCircle2,
  Lightbulb,
  Star,
  Check,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- Mock Data ---
const features = [
  {
    icon: <CalendarHeart className="w-6 h-6 text-primary" />,
    title: "Milestone Tracking",
    description: "Easily log first steps, first words, and hundreds of other developmental milestones in seconds.",
    color: "bg-primary/10"
  },
  {
    icon: <LineChart className="w-6 h-6 text-secondary-foreground" />,
    title: "Growth Charts",
    description: "Visualize your baby's growth percentiles comparing height and weight to WHO standards.",
    color: "bg-secondary/30"
  },
  {
    icon: <BellRing className="w-6 h-6 text-accent" />,
    title: "Smart Reminders",
    description: "Never miss an immunization, pediatrician appointment, or feeding schedule with custom alerts.",
    color: "bg-accent/20"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    title: "AI-Powered Insights",
    description: "Get personalized weekly summaries and activity suggestions tailored to your child's specific developmental stage.",
    color: "bg-amber-100"
  }
];

const steps = [
  {
    icon: <UserPlus className="w-8 h-8 text-white" />,
    title: "Create a Profile",
    description: "Add your baby's basic details. You can manage multiple children from a single family account.",
    color: "from-primary to-primary/80"
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
    title: "Track Daily",
    description: "Log sleep, feedings, diapers, and milestones with our incredibly intuitive one-tap interface.",
    color: "from-secondary to-emerald-400"
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: "Gain Insights",
    description: "Receive beautiful charts and actionable pediatric advice as your little one grows.",
    color: "from-accent to-pink-400"
  }
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "First-time Mom",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
    content: "BabyBloom has been my absolute lifesaver. The AI insights accurately predicted my son's sleep regression before it even happened! I feel so much more confident.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Father of Two",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    content: "We tried four other apps before finding this one. The interface is gorgeous, and sharing access with our nanny has made coordinating care completely seamless.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Pediatric Nurse",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
    content: "I recommend BabyBloom to all my patients. The growth charts mirror the exact clinical standards we use, and it helps parents feel empowered rather than anxious.",
    rating: 5
  }
];

const pricing = [
  {
    name: "Basic",
    price: "$0",
    period: "forever",
    description: "Essential tracking for single babies.",
    features: ["Basic milestone tracking", "Standard growth charts", "1 caregiver account", "7-day data history"],
    highlighted: false,
    cta: "Start Free"
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Advanced insights for growing families.",
    features: ["AI-powered weekly insights", "Unlimited caregivers", "Export data for doctors", "Vaccination reminders", "Lifetime data history"],
    highlighted: true,
    cta: "Start Pro Trial"
  },
  {
    name: "Family",
    price: "$14.99",
    period: "per month",
    description: "Everything you need for multiple children.",
    features: ["Everything in Pro", "Track up to 5 children", "Priority customer support", "Printable memory books"],
    highlighted: false,
    cta: "Get Family Plan"
  }
];

const faqs = [
  {
    question: "Is my baby's data secure?",
    answer: "Absolutely. We use bank-level encryption (AES-256) to protect your data. We never sell your personal information or your child's data to third parties. Your privacy is our top priority."
  },
  {
    question: "Can I share my account with my partner or nanny?",
    answer: "Yes! On our Pro and Family plans, you can invite unlimited caregivers. Everyone can log activities from their own devices, and it syncs in real-time."
  },
  {
    question: "What age range does BabyBloom cover?",
    answer: "BabyBloom is designed to track development from birth through age 5. We include specific milestones, growth charts, and insights tailored for every stage of early childhood."
  },
  {
    question: "How do the AI insights work?",
    answer: "Our AI analyzes the data you log (sleep patterns, feeding, milestones) against pediatric databases to provide personalized suggestions. For example, it might notice a nap transition approaching and offer tips to handle it smoothly."
  }
];

// --- Components ---
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-secondary/30 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-primary/20 shadow-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">New AI Sleep Predictor Released</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
                Track Every <span className="text-gradient">Precious Milestone</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                The beautifully simple, AI-powered app that helps you understand your child's growth, anticipate leaps, and celebrate every magical moment.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0">
                  Get Started Free
                </button>
                <button className="px-8 py-4 rounded-full bg-white text-foreground font-bold text-lg shadow-sm border border-border flex items-center justify-center gap-2 hover:bg-muted/50 hover:-translate-y-1 transition-all duration-300">
                  <Play className="w-5 h-5 fill-foreground" />
                  Watch Demo
                </button>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop&q=80`} alt="Parent avatar" />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span>Trusted by <strong>10,000+</strong> parents</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-accent/40 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-illustration.png`} 
                alt="Parent holding baby with growth charts" 
                className="w-full h-auto rounded-[3rem] shadow-2xl border-4 border-white object-cover aspect-[4/3] animate-float"
              />
              
              {/* Floating badges */}
              <div className="absolute -left-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-border animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <LineChart className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold">Weight</p>
                    <p className="font-bold text-foreground">75th Percentile</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-6 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-border animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <CalendarHeart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold">First Word!</p>
                    <p className="font-bold text-foreground">"Mama"</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES */}
      <section className="py-8 border-y border-border/50 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Recognized and Loved By</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock logos */}
            {['Parenting Weekly', 'TechCrunch', 'BabyCenter', 'The Bump', 'Forbes'].map((brand) => (
              <div key={brand} className="text-xl md:text-2xl font-display font-black text-foreground/80 flex items-center">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES */}
      <section id="features" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Why BabyBloom?</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Everything you need, nothing you don't.</h3>
            <p className="text-lg text-muted-foreground">
              We replaced the overwhelming spreadsheets and confusing charts with a beautiful, intuitive interface that gives you answers in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="py-20 lg:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] transform -rotate-3 scale-105"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/app-mockup.png`} 
                alt="App Interface Mockup" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl aspect-[3/4] object-contain"
              />
            </motion.div>

            <div className="order-1 lg:order-2">
              <h2 className="text-primary font-bold tracking-wider uppercase mb-3">How It Works</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">Simplicity at its core.</h3>
              
              <div className="space-y-12">
                {steps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-${step.color.split('-')[1]}/30`}>
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-2">{step.title}</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section id="testimonials" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Community Love</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground">Don't just take our word for it.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-black/5 border border-border/60 relative"
              >
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(test.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg text-foreground font-medium italic mb-8 leading-relaxed">
                  "{test.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={test.image} alt={test.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                  <div>
                    <h5 className="font-bold text-foreground">{test.name}</h5>
                    <p className="text-sm text-muted-foreground">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Simple Pricing</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Choose the perfect plan for your family.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {pricing.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white rounded-[2rem] p-8 ${
                  plan.highlighted 
                    ? "ring-4 ring-primary shadow-2xl scale-100 md:scale-105 z-10" 
                    : "border border-border shadow-lg shadow-black/5"
                } transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h4 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h4>
                <p className="text-muted-foreground mb-6 h-12">{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground font-medium">/{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-secondary/30 rounded-full p-0.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-foreground/80 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  plan.highlighted 
                    ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-1" 
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={idx} className="border border-border rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-lg text-foreground hover:bg-slate-50 transition-colors"
                  >
                    {faq.question}
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden bg-slate-50/50"
                  >
                    <p className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-20">
        <div className="bg-gradient-to-br from-primary to-accent rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          {/* Decorative shapes */}
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to see your baby bloom?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of parents who have simplified their tracking and found peace of mind with BabyBloom.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-primary font-bold text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2">
                Download for iOS <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-full bg-black/20 backdrop-blur-sm text-white border border-white/20 font-bold text-lg hover:bg-black/30 hover:-translate-y-1 transition-all duration-300">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
