import { motion } from "motion/react";
import { MapPin, Users, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { 
    icon: MapPin, 
    end: 48, 
    label: "Stores Nationwide",
    suffix: ""
  },
  { 
    icon: Users, 
    end: 120, 
    label: "Passionate Employees",
    suffix: ""
  },
  { 
    icon: Calendar, 
    end: 10, 
    label: "Years of Modern Revival",
    suffix: ""
  }
];

function CounterAnimation({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export function StoresSection() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="py-20 bg-[#E8DCC3] relative overflow-hidden">
      {/* Decorative Map Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <path
            d="M 400 100 L 450 150 L 420 200 L 450 250 L 400 300 L 350 250 L 380 200 L 350 150 Z"
            fill="#5C3B2E"
            opacity="0.3"
          />
          <circle cx="300" cy="200" r="8" fill="#C89B61" />
          <circle cx="500" cy="250" r="8" fill="#C89B61" />
          <circle cx="400" cy="350" r="8" fill="#C89B61" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#5C3B2E]">
            Our Growing Family
          </h2>
          <p className="text-[#5C3B2E]/70 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            From humble beginnings to a nationwide presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4">
                <stat.icon className="w-12 h-12 text-[#C89B61] mx-auto" strokeWidth={1.5} />
              </div>
              
              <div className="mb-2">
                <span className="text-5xl text-[#5C3B2E]">
                  {isVisible && <CounterAnimation end={stat.end} />}
                  {stat.suffix}
                </span>
              </div>

              <div className="h-1 w-16 bg-[#C89B61] mx-auto mb-3"></div>

              <p className="text-[#5C3B2E]/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* City Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#5C3B2E]/60 mb-4 uppercase tracking-widest" style={{ fontSize: '0.875rem' }}>
            Find us in
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Davangere', 'Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Mumbai', 'Pune', 'Delhi'].map((city, index) => (
              <motion.span
                key={city}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + (index * 0.05) }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white rounded-full text-[#5C3B2E] hover:bg-[#C89B61] hover:text-white transition-colors cursor-default"
                style={{ fontSize: '0.875rem' }}
              >
                {city}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
