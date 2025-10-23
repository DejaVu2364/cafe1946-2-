import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function OurStory() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-[#E8DCC3]"></div>
        <div className="w-1/2 bg-[#5C3B2E]"></div>
      </div>

      {/* Curved Divider */}
      <svg
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-auto"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        style={{ width: '200px' }}
      >
        <path
          d="M 50 0 Q 30 500 50 1000"
          fill="#E8DCC3"
          stroke="none"
        />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1625744494690-7a14ae606b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FmZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MTIzMDA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vintage café interior"
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(0.3)' }}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C89B61] rounded-full opacity-20 blur-3xl"></div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="uppercase tracking-widest text-[#C89B61] mb-4"
              style={{ fontSize: '0.875rem' }}
            >
              Our Legacy
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl mb-6 text-white"
            >
              The Legacy of 1946
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white/80 mb-6"
              style={{ lineHeight: '1.6' }}
            >
              Founded in the heart of Karnataka in 1946, our story began with a single cup brewed for connection. In the aftermath of a changing world, our founders believed coffee could bring people together—one warm, handcrafted cup at a time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-white/80 mb-8"
              style={{ lineHeight: '1.6' }}
            >
              Today, we honor that heritage with every roast, every brew, and every smile. From farm to cup, our commitment to quality and community remains unchanged—timeless, just like our coffee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button 
                className="bg-[#C89B61] hover:bg-[#C89B61]/90 text-[#5C3B2E] transition-all group"
              >
                Explore Our Heritage
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
