import { useEffect, useRef, useState } from 'react'

export function RSVP() {
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
  
  const handleRSVP = () => {
    window.open('https://forms.google.com', '_blank')
  }

  return (
    <section ref={ref} id="rsvp" className="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-[#1978E5] text-sm font-medium tracking-widest uppercase mb-4">Join Us</p>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
          Will you be there?
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
          Let us know if you&apos;ll be attending the assembly. Your presence makes a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRSVP}
            className="bg-[#1978E5] text-white px-10 py-3.5 rounded-lg font-medium text-sm hover:bg-[#1978E5]/90 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Yes, I&apos;ll Attend
          </button>
          <button className="border border-gray-200 text-gray-700 px-10 py-3.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
            Maybe / Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
