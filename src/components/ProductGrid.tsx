import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Malnad Roast",
    region: "Chikmagalur, Karnataka",
    price: "₹499",
    description: "Rich, bold flavor with hints of dark chocolate"
  },
  {
    name: "Coorg Gold",
    region: "Coorg, Karnataka",
    price: "₹549",
    description: "Smooth, aromatic with caramel notes"
  },
  {
    name: "Bali Blend",
    region: "Bali, Indonesia",
    price: "₹599",
    description: "Exotic, fruity with floral undertones"
  },
  {
    name: "Heritage Reserve",
    region: "Davangere, Karnataka",
    price: "₹649",
    description: "Our signature 1946 blend, perfectly balanced"
  }
];

export function ProductGrid() {
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
            Explore Our Special Brews
          </h2>
          <p className="text-[#5C3B2E]/70 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Each blend is a story brewed from the finest origins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#C89B61]/20 hover:-translate-y-2">
                <div className="aspect-square bg-[#E8DCC3] relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1598198192305-46b0805890d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYWclMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzYxMjA5Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#5C3B2E] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#5C3B2E]/60 mb-3" style={{ fontSize: '0.875rem' }}>
                    {product.region}
                  </p>
                  <p className="text-[#5C3B2E]/70 mb-4" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C89B61]">
                      {product.price}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#C89B61]/10 flex items-center justify-center group-hover:bg-[#C89B61] transition-colors">
                      <ArrowRight className="w-4 h-4 text-[#C89B61] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            variant="outline"
            className="border-2 border-[#5C3B2E] text-[#5C3B2E] hover:bg-[#5C3B2E] hover:text-white transition-all group"
          >
            See All Products
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
