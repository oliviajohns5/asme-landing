import { useEffect, useRef, useState } from 'react'

export function AboutSection() {
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
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#1978E5] text-sm font-medium tracking-widest uppercase mb-4">About</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-[1.3] mb-8">
            Join us for a thought-provoking assembly on{' '}
            <span className="font-medium">Digital Awareness</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#1978E5] mb-8" />
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            In an age where every click leaves a footprint, understanding the digital world around us
            has never been more important. This assembly invites you to reflect on how we navigate
            technology, protect our privacy, and make conscious choices online.
          </p>
        </div>
      </div>
    </section>
  )
}
