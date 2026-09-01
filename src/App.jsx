import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import WhyChooseUs from './components/WhyChooseUs'
import Delivery from './components/Delivery'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collections />
        <WhyChooseUs />
        <Delivery />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
