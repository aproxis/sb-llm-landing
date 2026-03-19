import { motion } from "framer-motion";
import { 
  Play, 
  FileText, 
  BarChart2, 
  Globe, 
  Link2,
  Search,
  LayoutTemplate,
  Zap,
  Sparkles,
  Bot,
  Star,
  Check,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-card shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-lg text-foreground hover:bg-muted/50 transition-colors"
      >
        {faq.question}
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden bg-muted/20"
      >
        <p className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </div>
  );
}

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
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Daily SEO Articles",
    description: "Get daily branded articles in your tone and voice, with optimal structure, internal links, citations and infographics.",
    color: "bg-primary/10"
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-secondary" />,
    title: "LLM Visibility Tracking",
    description: "Track how often your brand appears in ChatGPT, Perplexity responses. Monitor your visibility score in real-time.",
    color: "bg-secondary/20"
  },
  {
    icon: <Globe className="w-6 h-6 text-accent" />,
    title: "Automated Publishing",
    description: "Connect your CMS once. Publish automatically to WordPress, Webflow, Shopify, Framer, Ghost, or any platform via API.",
    color: "bg-accent/20"
  },
  {
    icon: <Link2 className="w-6 h-6 text-emerald-500" />,
    title: "Quality Backlinks",
    description: "We naturally link your content within our publisher network. Backlinks are votes of trust for both Google and AI systems.",
    color: "bg-emerald-500/10"
  }
];

const steps = [
  {
    icon: <Search className="w-8 h-8 text-white" />,
    title: "Business Analysis",
    description: "We analyze your niche, audience, and competitors to find opportunities on AI search and Google.",
    color: "from-primary to-primary/80"
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-white" />,
    title: "Growth Strategy",
    description: "A custom 30-day content plan is created with formats that LLMs cite most, designed to maximize your visibility.",
    color: "from-secondary to-emerald-400"
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Runs on Autopilot",
    description: "Articles are written, published, and distributed automatically. Your brand grows while you focus on your business.",
    color: "from-accent to-indigo-400"
  }
];

const testimonials = [
  {
    name: "Gasper B.",
    role: "Founder, Myhair.ai",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    content: "Our brand started ranking on ChatGPT in under 3 months. That channel now drives nearly 20% of all our organic traffic.",
    rating: 5
  },
  {
    name: "Ramom B.",
    role: "Agency Owner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80",
    content: "As an agency, the whitelabel solution was exactly what we needed. We've onboarded 15 more clients in 2 months — fully automated.",
    rating: 5
  },
  {
    name: "Sarah K.",
    role: "SaaS Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80",
    content: "We went from zero AI search presence to appearing in dozens of ChatGPT responses weekly. The ROI has been remarkable.",
    rating: 5
  }
];

const pricing = [
  {
    name: "Starter",
    price: "$399",
    period: "mo",
    description: "For small businesses getting started with AI SEO.",
    features: ["4 articles/week", "1 website", "Basic LLM tracking", "Email support"],
    highlighted: false,
    cta: "Start Free Trial"
  },
  {
    name: "Growth",
    price: "$799",
    period: "mo",
    description: "For businesses serious about organic growth.",
    features: ["Daily articles", "3 websites", "LLM tracking dashboard", "Automated publishing", "Backlink building", "Priority support"],
    highlighted: true,
    cta: "Start Growth Trial"
  },
  {
    name: "Agency",
    price: "$1,999",
    period: "mo",
    description: "For agencies managing multiple clients.",
    features: ["Unlimited clients", "Whitelabel reports", "Dedicated account manager", "API access"],
    highlighted: false,
    cta: "Contact Sales"
  }
];

const faqs = [
  {
    question: "How long before I see results?",
    answer: "Most clients see their first AI citations within 4–8 weeks. Google traffic improvements typically appear within 3–6 months as content authority builds."
  },
  {
    question: "Which CMS platforms do you support?",
    answer: "We integrate with WordPress, Webflow, Shopify, Wix, Framer, Ghost, Snapps, and any custom platform via our publishing API."
  },
  {
    question: "How do you track LLM visibility?",
    answer: "Our monitoring system regularly queries ChatGPT, Perplexity, and Claude with relevant prompts in your industry and logs every mention of your brand or website."
  },
  {
    question: "Do I need technical SEO knowledge?",
    answer: "Not at all. RankFlow AI handles everything — content strategy, writing, publishing, and optimization — fully on autopilot."
  },
  {
    question: "Can agencies use this?",
    answer: "Yes! Our Agency plan includes a full whitelabel solution with client-facing reports and a dedicated account manager."
  }
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-20 overflow-x-hidden bg-background">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px]" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
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
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border shadow-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Now tracking LLM visibility in real-time</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
                Get Organic Traffic From <span className="text-gradient">AI Search</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                Show up where your customers search for answers. Our autopilot system builds your brand's presence across ChatGPT, Google, Claude, and Perplexity — without lifting a finger.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-1 transition-all duration-300 active:translate-y-0">
                  Start 3-Day Trial
                </button>
                <button className="px-8 py-4 rounded-full bg-card text-foreground font-bold text-lg shadow-sm border border-border flex items-center justify-center gap-2 hover:bg-muted/50 hover:-translate-y-1 transition-all duration-300">
                  <Play className="w-5 h-5 fill-foreground" />
                  Watch 1-min Demo
                </button>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-background" src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop&q=80`} alt="User avatar" />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span>Trusted by <strong>2,000+</strong> smart businesses in 18 countries</span>
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
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] transform rotate-3 scale-105 -z-10 blur-xl"></div>
              
              {/* Main abstract/dashboard graphic representing AI tracking */}
              <div className="w-full h-auto rounded-[2rem] shadow-2xl border border-border/50 bg-card p-6 aspect-[4/3] flex flex-col justify-between relative overflow-hidden animate-float">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary/80"></div>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">rankflow.ai/dashboard</div>
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                  <div className="h-24 rounded-xl bg-muted/50 w-full flex items-end p-4 gap-2">
                    {/* Simulated chart */}
                    {[40, 70, 45, 90, 65, 100, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }}>
                        <div className="w-full h-full bg-gradient-to-t from-transparent to-primary rounded-t-sm"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-xl p-4">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                        <Bot className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="h-2 w-16 bg-foreground/20 rounded mb-2"></div>
                      <div className="h-4 w-24 bg-foreground/80 rounded"></div>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                      <div className="h-2 w-16 bg-foreground/20 rounded mb-2"></div>
                      <div className="h-4 w-24 bg-foreground/80 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -left-8 top-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <BarChart2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold">Organic Growth</p>
                    <p className="font-bold text-foreground">87k Clicks</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold">Status</p>
                    <p className="font-bold text-foreground">ChatGPT Visible</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES */}
      <section className="py-8 border-y border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Text logos */}
            {['Skyper', 'Samwell.ai', 'Music24', 'Oxford Magic Tours', 'ThinkZipper'].map((brand) => (
              <div key={brand} className="text-xl md:text-2xl font-display font-black text-foreground/80 flex items-center tracking-tighter">
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
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">AI SEO Autopilot</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Dominate AI Search engines.</h3>
            <p className="text-lg text-muted-foreground">
              Everything you need to capture traffic from the next generation of search. We handle the content, distribution, and visibility tracking.
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
                className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
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
      <section id="how-it-works" className="py-20 lg:py-32 bg-card/50 border-y border-border/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] transform -rotate-3 scale-105 blur-xl"></div>
              
              <div className="relative z-10 w-full max-w-md mx-auto aspect-[3/4] bg-background border border-border rounded-[2rem] shadow-2xl p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Content Strategy Generated</div>
                    <div className="text-xs text-muted-foreground">30-day plan ready</div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card rounded-xl p-4 border border-border/50 flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-muted flex-shrink-0 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="h-4 w-3/4 bg-muted rounded mb-2"></div>
                        <div className="h-3 w-1/2 bg-muted/50 rounded mb-3"></div>
                        <div className="flex gap-2">
                          <span className="text-[10px] px-2 py-1 bg-secondary/10 text-secondary rounded-full">Scheduled</span>
                          <span className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded-full">SEO Optimized</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-${step.color.split('-')[1]}/20`}>
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
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Success Stories</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground">See the ROI of AI Visibility.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-card rounded-3xl p-8 shadow-lg shadow-black/20 border border-border/60 relative"
              >
                <div className="flex gap-1 text-primary mb-6">
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
      <section id="pricing" className="py-20 lg:py-32 bg-card/50 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Simple Pricing</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Choose the perfect plan for your business.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {pricing.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-background rounded-[2rem] p-8 ${
                  plan.highlighted 
                    ? "ring-2 ring-primary shadow-[0_0_40px_rgba(99,102,241,0.2)] scale-100 md:scale-105 z-10" 
                    : "border border-border shadow-lg shadow-black/20"
                } transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full inline-block mb-4">
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
                      <div className="mt-1 bg-secondary/20 rounded-full p-0.5">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-foreground/80 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  plan.highlighted 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-1" 
                    : "bg-muted text-foreground hover:bg-muted/80 border border-border"
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
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-20">
        <div className="bg-gradient-to-br from-primary/20 via-card to-accent/20 border border-primary/20 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.15)]">
          {/* Decorative shapes */}
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Start growing your AI search presence today</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join 2,000+ businesses already winning on ChatGPT, Google, and Perplexity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2">
                Start Your 3-Day Free Trial <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}