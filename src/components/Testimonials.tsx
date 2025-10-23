import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Coffee Enthusiast",
    quote: "The aroma and bold flavor remind me of home — it's more than coffee, it's comfort.",
    image: "PS"
  },
  {
    name: "Rajesh Kumar",
    role: "Regular Customer",
    quote: "Every visit feels like stepping back in time. The warmth, the taste, the stories — all perfect.",
    image: "RK"
  },
  {
    name: "Ananya Reddy",
    role: "Café Owner",
    quote: "1946 Café sets the standard. Their commitment to quality and heritage is truly inspiring.",
    image: "AR"
  },
  {
    name: "Vikram Menon",
    role: "Coffee Blogger",
    quote: "From bean to cup, every detail is crafted with love. This is what authentic coffee tastes like.",
    image: "VM"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FDF8F3] to-[#E8DCC3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#5C3B2E]">
            Our Smiling Customers
          </h2>
          <p className="text-[#5C3B2E]/70 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Stories from our beloved coffee community
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 md:h-64">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : -100,
                  display: currentIndex === index ? 'block' : 'none'
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-[#C89B61]/20" />
                  
                  <div className="relative z-10">
                    <p 
                      className="text-[#5C3B2E] mb-8 italic text-center text-lg md:text-xl"
                      style={{ lineHeight: '1.6' }}
                    >
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C89B61] to-[#5C3B2E] flex items-center justify-center text-white shadow-lg">
                        {testimonial.image}
                      </div>
                      <div className="text-left">
                        <p className="text-[#5C3B2E]">
                          {testimonial.name}
                        </p>
                        <p className="text-[#5C3B2E]/60" style={{ fontSize: '0.875rem' }}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-[#C89B61] w-8' 
                    : 'bg-[#5C3B2E]/20 hover:bg-[#5C3B2E]/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
