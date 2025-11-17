import { motion } from 'framer-motion'
import { Shield, Wallet, LineChart, Cpu, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Bank-grade Security',
    desc: 'Multi-sig vaults, hardware key support, and real-time anomaly detection.',
  },
  {
    icon: Wallet,
    title: 'Unified Wallet',
    desc: 'Manage BTC, ETH, USDT, and more in one holographic interface.',
  },
  {
    icon: LineChart,
    title: 'Smart Trading',
    desc: 'Deep liquidity routing and instant swaps across major chains.',
  },
  {
    icon: Cpu,
    title: 'On-chain Analytics',
    desc: 'AI-powered insights visualized with glowing 3D graphs.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#05060A] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="h-full w-full hologram-grid" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="text-cyan-400" />
          <h2 className="text-2xl md:text-4xl font-bold">Holographic Features</h2>
        </div>
        <p className="text-white/70 max-w-2xl mb-12">
          Built for speed, safety, and style. Everything you need to navigate the crypto universe with confidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-colors"
            >
              <it.icon className="mb-4 text-cyan-400 group-hover:text-purple-400 transition-colors" />
              <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-white/70 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
