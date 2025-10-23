import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const articles = [
  {
    title: "The Art of Pour Over: A Timeless Ritual",
    date: "Oct 15, 2025",
    excerpt: "Discover the meditative process of pour-over coffee and why it remains a beloved brewing method...",
    image: "https://images.unsplash.com/photo-1531441059801-fa3f5859e128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwb3VyaW5nJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzYxMTYyNTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "From Farm to Cup: Our Sourcing Journey",
    date: "Oct 8, 2025",
    excerpt: "Join us as we trace the journey of our coffee beans from the lush plantations of Chikmagalur...",
    image: "https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0aW5nfGVufDF8fHx8MTc2MTIzNTk5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Coffee Culture Through the Decades",
    date: "Sep 28, 2025",
    excerpt: "A nostalgic look at how coffee culture has evolved since 1946, and what remains constant...",
    image: "https://images.unsplash.com/photo-1656877280226-ebf9ea8b1303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBqb3VybmFsJTIwd3JpdGluZ3xlbnwxfHx8fDE3NjEyMTc2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-[#FDF8F3] relative">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C89B61] to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-[#5C3B2E]">
            Coffee Chronicles
          </h2>
          <p className="text-[#5C3B2E]/70 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Stories, insights, and brewing tips from our café
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#C89B61] mb-3" style={{ fontSize: '0.875rem' }}>
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-[#5C3B2E] mb-3 group-hover:text-[#C89B61] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-[#5C3B2E]/70 mb-4" style={{ lineHeight: '1.6' }}>
                    {article.excerpt}
                  </p>

                  <div className="flex items-center text-[#5C3B2E] group-hover:text-[#C89B61] transition-colors">
                    <span style={{ fontSize: '0.875rem' }}>Read More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
