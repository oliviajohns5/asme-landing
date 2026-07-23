import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className={`text-sm text-blue-600 font-medium tracking-widest uppercase mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Class Assembly Invitation
        </p>
        <h1 className={`text-3xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-gray-900 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          &ldquo;Awareness is not just knowing risks,<br />
          <span className="font-medium">but choosing what is right</span><br />
          when no one is watching.&rdquo;
        </h1>
        <div className={`mt-10 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a
            href="#rsvp"
            className="inline-flex items-center gap-2 bg-[#1978E5] text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-[#1978E5]/90 transition-colors"
          >
            RSVP Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-bounce w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}
