export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} Crypto Room. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#wallet" className="hover:text-white">Wallet</a>
            <a href="#buy" className="hover:text-white">Buy</a>
            <a href="#support" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
