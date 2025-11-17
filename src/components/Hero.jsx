import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.15])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -60])
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, -5])

  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* holographic gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,255,229,0.18),transparent),radial-gradient(40%_40%_at_80%_100%,rgba(99,102,241,0.18),transparent)]" />

      {/* scanlines + grid */}
      <div className="pointer-events-none absolute inset-0 hologram-grid" />
      <div className="pointer-events-none absolute inset-0 scanlines opacity-30 mix-blend-screen" />

      <motion.div style={{ scale, y, rotate }} className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Welcome to the Future of Crypto
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-4 md:mt-6 text-lg md:text-xl text-white/70">
              Step into a digital vault with holographic depth, floating tokens, and seamless motion. Explore your wallet, buy crypto, and get support inside one immersive 3D room.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="mt-8 flex flex-wrap gap-4">
              <a href="#wallet" className="neon-btn neon-cyan">Create Wallet</a>
              <a href="#buy" className="neon-btn neon-purple">Buy Crypto</a>
              <a href="#support" className="neon-btn neon-green">Support Center</a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating coins overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <FloatingCoin label="BTC" color="#F7931A" x="10%" y="65%" delay={0} />
        <FloatingCoin label="ETH" color="#627EEA" x="80%" y="20%" delay={-1} />
        <FloatingCoin label="USDT" color="#26A17B" x="75%" y="75%" delay={-2} />
        <FloatingCoin label="SOL" color="#14F195" x="20%" y="20%" delay={-1.6} />
      </div>

      {/* glow lines */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 neon-line" />
    </section>
  )
}

function FloatingCoin({ label, color, x, y, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 0.9, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="absolute"
      style={{ left: x, top: y }}
    >
      <motion.div
        className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl"
        style={{ boxShadow: `0 0 40px ${color}55, inset 0 0 30px ${color}30` }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear', delay }}
      >
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/20">
          <div className="absolute inset-0 rounded-full" style={{ boxShadow: `0 8px 40px ${color}33` }} />
          <div className="absolute inset-0 flex items-center justify-center text-[11px] md:text-xs font-bold tracking-widest" style={{ color }}>
            {label}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
