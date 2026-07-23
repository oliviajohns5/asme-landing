import { useEffect, useRef, useState } from 'react'

export function Presenters() {
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
      <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-[#1978E5] text-sm font-medium tracking-widest uppercase mb-4">Presented By</p>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
          Brought to you by{' '}
          <span className="font-medium text-[#1978E5]">Class XH &amp; XB</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Our students have prepared a meaningful presentation to spark conversations about
          digital responsibility and mindful technology use.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-[#1978E5] px-5 py-2.5 rounded-lg text-sm font-medium border border-blue-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            40+ Students Involved
          </span>
        </div>
      </div>
    </section>
  )
}
