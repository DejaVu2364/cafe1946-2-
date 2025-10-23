import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#5C3B2E] text-white">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,0 Q300,60 600,40 T1200,0 L1200,120 L0,120 Z"
            fill="#C89B61"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-3 text-[#E8DCC3]">1946 Café</h2>
          <p className="text-[#C89B61] font-script text-2xl">Brewed with Legacy</p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-[#C89B61]">About</h3>
            <ul className="space-y-2">
              {['Our Story', 'Heritage', 'Team', 'Careers'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#C89B61] transition-colors"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-[#C89B61]">Products</h3>
            <ul className="space-y-2">
              {['Coffee Beans', 'Merchandise', 'Gift Cards', 'Wholesale'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#C89B61] transition-colors"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-[#C89B61]">Resources</h3>
            <ul className="space-y-2">
              {['Blog', 'Brewing Guide', 'Franchise', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#C89B61] transition-colors"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-[#C89B61]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70" style={{ fontSize: '0.875rem' }}>
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#C89B61]" />
                <span>Davangere, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2 text-white/70" style={{ fontSize: '0.875rem' }}>
                <Phone className="w-4 h-4 flex-shrink-0 text-[#C89B61]" />
                <span>+91 1946 COFFEE</span>
              </li>
              <li className="flex items-center gap-2 text-white/70" style={{ fontSize: '0.875rem' }}>
                <Mail className="w-4 h-4 flex-shrink-0 text-[#C89B61]" />
                <span>hello@1946cafe.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8 pb-8 border-b border-white/10"
        >
          {[
            { Icon: Instagram, label: 'Instagram' },
            { Icon: Facebook, label: 'Facebook' },
            { Icon: Twitter, label: 'Twitter' }
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C89B61] flex items-center justify-center transition-all hover:scale-110"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/50" style={{ fontSize: '0.875rem' }}>
            © {currentYear} 1946 Café | Brewed with Love in Davangere
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
