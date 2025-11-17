import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#wallet', label: 'Wallet' },
    { href: '#buy', label: 'Buy' },
    { href: '#support', label: 'Support' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-3 mt-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="font-bold tracking-wider text-white">CRYPTO ROOM</a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2 text-white/80">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block py-1">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
