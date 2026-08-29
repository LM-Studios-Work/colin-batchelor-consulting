import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Colin Batchelor Consulting',
  description: 'Get in touch with Colin Batchelor Consulting for leadership, recovery and growth.',
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#242424] text-white px-[5.3vw] py-[90px] md:py-[120px] min-h-[85vh] flex items-center">
        <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Copy */}
          <div className="flex-1 lg:pt-4">
            <p className="text-[#b5122b] font-bold text-[10px] tracking-[0.13em] mb-4 uppercase">Get in Touch</p>
            <h1 className="text-[38px] md:text-[52px] font-serif font-bold leading-[.95] tracking-wide mb-8 text-white uppercase">
              START A CONVERSATION:
            </h1>
            <p className="text-gray-300 text-[15px] md:text-[16px] leading-[1.7] max-w-md">
              For enquiries regarding project management, interim management, or business development assignments, please complete the form and Colin will respond directly.
            </p>
            
            <div className="mt-14 space-y-8">
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[.08em] text-white mb-2">Direct Contact</h3>
                <a href="mailto:colin@colinbatchelor.com" className="text-[#b5122b] hover:underline underline-offset-4 text-[15px] font-medium transition-all">
                  colin@colinbatchelor.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="w-full">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="firstName" className="block text-[11px] font-bold uppercase tracking-[.08em] text-gray-300">First Name <span className="text-[#b5122b]">*</span></label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    className="w-full border border-white bg-white p-[16px] rounded-none focus:outline-none focus:border-[#b5122b] text-[15px] text-[#292827] transition-colors" 
                    required 
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="lastName" className="block text-[11px] font-bold uppercase tracking-[.08em] text-gray-300">Last Name <span className="text-[#b5122b]">*</span></label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    className="w-full border border-white bg-white p-[16px] rounded-none focus:outline-none focus:border-[#b5122b] text-[15px] text-[#292827] transition-colors" 
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-[.08em] text-gray-300">Email Address <span className="text-[#b5122b]">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full border border-white bg-white p-[16px] rounded-none focus:outline-none focus:border-[#b5122b] text-[15px] text-[#292827] transition-colors" 
                    required 
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-[.08em] text-gray-300">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full border border-white bg-white p-[16px] rounded-none focus:outline-none focus:border-[#b5122b] text-[15px] text-[#292827] transition-colors" 
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-[.08em] text-gray-300">Message <span className="text-[#b5122b]">*</span></label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  className="w-full border border-white bg-white p-[16px] rounded-none focus:outline-none focus:border-[#b5122b] text-[15px] text-[#292827] resize-none transition-colors" 
                  required
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button type="submit" className="contact-button w-full md:w-auto inline-flex items-center justify-center gap-3 cursor-pointer border-none text-center px-8 py-[14px]">
                  SEND MESSAGE
                  <span className="text-lg font-normal translate-y-[-1px] ml-1">&#x2197;&#xFE0E;</span>
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </section>
    </main>
  )
}
