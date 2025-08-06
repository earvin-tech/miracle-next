import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="flex flex-col gap-y-16 max-w-6xl mx-auto px-4 py-16">
      
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="flex flex-col justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold font-lemon mb-4 text-black">Our Roots</h2>
          <p className="font-kopik text-black">
            Miracle Cafe opened in Kew East, Melbourne in September 2024, but its story began years ago in the Philippines.
            Our parents started a jeepney business—jeepneys being a popular mode of transport for Filipinos. They named their first jeepney “Miracle.”
          </p>
        </motion.div>

        <motion.div
          className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow bg-gray-300"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img
            src="/site_images/monochrome_window.jpg"
            alt="Monochrome window"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="flex flex-col justify-center md:order-1"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl text-black font-bold font-lemon mb-4">The Turning Point</h2>
          <p className="font-kopik text-black">
            In 2024, after years of working in HR and administration, I felt a strong pull to try something new.
            While cafe hopping in June, I stumbled upon a café for sale—and I was the only one there on inspection day.
          </p>
        </motion.div>

        <motion.div
          className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow bg-gray-300"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img
            src="/site_images/espresso_pour.jpg"
            alt="Espresso Pour"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="flex flex-col justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold font-lemon mb-4 text-black">Why "Miracle"?</h2>
          <p className="font-kopik text-black">
            Not just because our jeeps were called Miracle, but because my life has been full of unexpected blessings—
            miracles that always seemed to show up when I needed them most.
          </p>
        </motion.div>

        <motion.div
          className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow bg-gray-300"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img
            src="/site_images/sunset.jpg"
            alt="Sunset"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
