import { motion, useScroll, useTransform } from 'framer-motion'
import { Wallet, CreditCard, MessageSquare } from 'lucide-react'

export default function Rooms() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0.2, 0.8], [-2, 2])
  const x = useTransform(scrollYProgress, [0.2, 0.8], [0, -60])

  return (
    <section className="relative bg-black text-white">
      <motion.div style={{ rotate, x }} className="container mx-auto px-6 md:px-12 py-24 space-y-24">
        {/* Wallet room */}
        <div id="wallet" className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-cyan-400 mb-3 flex items-center gap-2">
              <Wallet size={18} />
              <span className="uppercase tracking-widest text-xs">Wallet Room</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">Manage your assets like a pro</h3>
            <p className="text-white/70 mt-3">A clean, holographic dashboard with balances, NFTs, and yield strategies. Drag-and-drop tokens, visualize flows, and sign with a tap.</p>
            <div className="mt-6 flex gap-3">
              <button className="neon-btn neon-cyan">Create Wallet</button>
              <button className="neon-btn neon-purple">Import</button>
            </div>
          </div>
          <div className="relative">
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                {['BTC','ETH','USDT','SOL'].map((t) => (
                  <div key={t} className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">{t}</div>
                    <div className="text-xl font-bold mt-1">{(Math.random()*2).toFixed(3)}<span className="text-white/50 text-sm"> {t}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="floating-badge">Secure • Non-custodial</div>
          </div>
        </div>

        {/* Buy room */}
        <div id="buy" className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="mockup-card">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/60">Choose asset</div>
                  <CreditCard className="text-purple-400" />
                </div>
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {['BTC','ETH','USDT','SOL','MATIC','ADA','DOGE','AVAX'].map((t) => (
                    <button key={t} className="rounded-lg border border-white/10 bg-white/5 py-3 text-sm hover:border-purple-400/40 hover:bg-white/10 transition">
                      {t}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <input className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:border-purple-400/40" placeholder="Amount" />
                  <button className="neon-btn neon-purple">Buy</button>
                </div>
              </div>
            </div>
            <div className="floating-badge">Best rates • Low fees</div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-purple-400 mb-3 uppercase tracking-widest text-xs">Crypto Buying Room</div>
            <h3 className="text-3xl md:text-4xl font-bold">Acquire crypto in seconds</h3>
            <p className="text-white/70 mt-3">We route your order across multiple exchanges to secure optimal pricing — visualized with glowing paths in real time.</p>
          </div>
        </div>

        {/* Support room */}
        <div id="support" className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-green-400 mb-3 flex items-center gap-2">
              <MessageSquare size={18} />
              <span className="uppercase tracking-widest text-xs">Support / Chat Room</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">We’re here 24/7</h3>
            <p className="text-white/70 mt-3">Get fast help with a modern chat interface — encrypted, friendly, and connected to your activity for quicker answers.</p>
            <div className="mt-6 flex gap-3">
              <button className="neon-btn neon-green">Open Chat</button>
              <button className="neon-btn neon-cyan">Docs</button>
            </div>
          </div>
          <div className="relative">
            <div className="mockup-card">
              <div className="p-6 space-y-3">
                {[0,1,2,3].map((i) => (
                  <div key={i} className={`chat-bubble ${i%2? 'right' : 'left'}`}>
                    {i%2? 'Sure! I can help you buy ETH with your card.' : 'Hi! How do I purchase ETH?'}
                  </div>
                ))}
                <div className="mt-4 flex gap-2">
                  <input className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:border-green-400/40" placeholder="Type a message..." />
                  <button className="neon-btn neon-green">Send</button>
                </div>
              </div>
            </div>
            <div className="floating-badge">Encrypted • Human + AI</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
