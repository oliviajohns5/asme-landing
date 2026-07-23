import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { EventDetails } from './components/EventDetails'
import { Presenters } from './components/Presenters'
import { RSVP } from './components/RSVP'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <AboutSection />
      <EventDetails />
      <Presenters />
      <RSVP />
      <Contact />
      <Footer />
    </main>
  )
}
