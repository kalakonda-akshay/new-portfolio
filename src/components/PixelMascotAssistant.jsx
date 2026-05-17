import { motion } from 'framer-motion';

const mascotSrc = '/assets/mascot/akshay-mini-mascot.svg';

export default function PixelMascotAssistant({ onClick }) {
  return (
    <motion.button
      type="button"
      aria-label="Akshay pixel mascot assistant"
      title="Ask Akshay's AI assistant"
      onClick={onClick}
      className="fixed bottom-24 right-5 z-[1850] w-[110px] cursor-pointer border-0 bg-transparent p-0 transition-[filter] duration-300 hover:drop-shadow-[0_0_28px_rgba(0,212,255,0.35)] max-sm:bottom-[88px] max-sm:right-2.5 max-sm:w-[75px]"
      initial={{ opacity: 0, y: 22, scale: 0.88 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
        rotate: [-0.8, 0.8, -0.8],
        scale: [1, 1.015, 1],
      }}
      whileHover={{ scale: 1.08 }}
      transition={{
        opacity: { duration: 0.55, delay: 0.35 },
        y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
        scale: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <span className="absolute left-1/2 top-[54%] -z-10 h-[78%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(61,139,255,.34),rgba(0,212,255,.18)_42%,transparent_72%)] blur-2xl animate-pulse" />
      <img
        src={mascotSrc}
        alt="Akshay mini pixel-art mascot"
        width="220"
        height="320"
        loading="eager"
        decoding="async"
        className="block h-auto w-full select-none object-contain [image-rendering:pixelated] [image-rendering:crisp-edges] drop-shadow-[0_12px_24px_rgba(0,0,0,.42)]"
        draggable="false"
      />
    </motion.button>
  );
}
