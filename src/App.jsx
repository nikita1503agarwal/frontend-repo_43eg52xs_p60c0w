import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Rooms from './components/Rooms'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Rooms />
      <Footer />
    </div>
  )
}
