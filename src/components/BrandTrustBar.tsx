import { motion } from "motion/react";

export function BrandTrustBar() {
  const partners = [
    "Specialty Coffee Association",
    "Organic Roasters Guild",
    "Fair Trade Certified",
    "Karnataka Coffee Board",
    "Sustainable Coffee Alliance"
  ];

  return (
    <section className="py-12 bg-[#E8DCC3]">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[#5C3B2E]/70 mb-8 uppercase tracking-widest"
          style={{ fontSize: '0.875rem' }}
        >
          Trusted by coffee lovers and brands across India
        </motion.p>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 justify-center items-center flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-[#5C3B2E]/60 hover:text-[#5C3B2E] transition-colors cursor-default"
                style={{ fontSize: '0.9rem' }}
              >
                {partner}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
