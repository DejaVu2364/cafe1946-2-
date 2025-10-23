import { motion } from "motion/react";
import { Coffee, Flame, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "From Farm to Cup",
    description: "Ethically sourced, locally roasted with care and passion"
  },
  {
    icon: Flame,
    title: "Artisan Roasting",
    description: "Slow-roasted perfection for authentic flavor profiles"
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Zero-waste practices for a better tomorrow"
  },
  {
    icon: Heart,
    title: "Community Love",
    description: "Born in 1946, still a people's café at heart"
  }
];

export function WhyDifferent() {
  return (
    <section className="py-20 bg-[#FDF8F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#5C3B2E]">
            Why We're Different
          </h2>
          <p className="text-[#5C3B2E]/70 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Our commitment to excellence goes beyond the cup
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C89B61] to-[#5C3B2E] mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#C89B61]/30 transition-shadow"
              >
                <feature.icon className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-[#5C3B2E] mb-3">
                {feature.title}
              </h3>

              <p className="text-[#5C3B2E]/70" style={{ lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Coffee Bean */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none"
        >
          <div className="w-full h-full rounded-full bg-[#C89B61] blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
