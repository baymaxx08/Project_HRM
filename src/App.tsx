import { useState } from 'react';
import './App.css';

// Icon components
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-5 h-5 inline-block ml-2" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 text-coral inline" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
      <span className="text-navy font-bold text-sm">H</span>
    </div>
  </div>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(1);

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-rose-400 via-rose-300 to-orange-300 border-b border-gray-200 bg-opacity-98 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            
            <div className="hidden md:flex items-center gap-4">
              <button className="bg-white text-rose-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-50 transition flex items-center gap-2">
                Start Free Trial <ArrowIcon />
              </button>
              <button className="border-2 border-white text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-rose-600 transition flex items-center gap-2">
                See a 10-min Demo <ArrowIcon />
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon />
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              <button className="w-full bg-white text-rose-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                Start Free Trial <ArrowIcon />
              </button>
              <button className="w-full border-2 border-white text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-rose-600 transition flex items-center justify-center gap-2">
                See a 10-min Demo <ArrowIcon />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-400 via-rose-350 to-pink-300">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <p className="text-white/80 font-semibold mb-4 text-lg">Run Payroll Across 50 Outlets.</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Not a Single<br />Error.
            </h1>
            <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-lg font-medium">
              The HRMS built for the complexity of India's distributed workforces. Ensure 100% accuracy from the first site to the last shift - every single payroll day.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[
                  { bg: 'from-blue-400 to-blue-500' },
                  { bg: 'from-pink-400 to-pink-500' },
                  { bg: 'from-orange-400 to-orange-500' },
                  { bg: 'from-purple-400 to-purple-500' }
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} ring-3 ring-white flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-white/80 font-semibold">12M+ in-app users</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-full max-w-md bg-gradient-to-br from-blue-900 to-navy border-4 border-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-white font-bold text-2xl">TruHR</h2>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Your Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-gradient-to-r from-blue-300 to-blue-200 rounded-full px-6 py-3 text-navy placeholder-blue-400 focus:outline-none font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Your Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-gradient-to-r from-blue-300 to-blue-200 rounded-full px-6 py-3 text-navy placeholder-blue-400 focus:outline-none font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Your Company</label>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full bg-gradient-to-r from-blue-300 to-blue-200 rounded-full px-6 py-3 text-navy placeholder-blue-400 focus:outline-none font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-navy font-bold py-3 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-2 mt-8"
                >
                  Submit <ArrowIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - PROBLEM STATEMENT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-8">
              When 300 employees are waiting for their salary, there's no room for error.
            </h2>
            <button className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition inline-flex items-center gap-2">
              Get a Free Demo <ArrowIcon />
            </button>
          </div>
          <div>
            <p className="text-gray-900 text-lg leading-relaxed mb-4 font-medium">
              Most HRMS platforms are built for the predictable environment of a central office, but they fracture when faced with the chaos of multi-location management. For industries like Real Estate, Retail, and F&B, the complexity of diverse pay rules and shift rotations makes manual reconciliation a constant source of anxiety. TruHR addresses this head-on, replacing the "Payroll Day Panic" with a streamlined, fail-safe process that allows you to hit "disburse" with absolute peace of mind.
            </p>
          </div>
        </div>

        {/* Value Pillars */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Distributed Workforce Ready',
                desc: 'Outlet-by-outlet pay rules, shift logic, and overtime calculations; all handled automatically.',
                bordered: true,
                hasGraphic: true
              },
              {
                title: 'Payroll Day Confidence',
                desc: 'Real-time visibility and a full audit trail. No last-minute panic.',
                bordered: false,
                bgColor: 'bg-amber-100'
              },
              {
                title: 'Statutory Compliance',
                desc: 'PF, ESIC, and Professional Tax always up to date across every state and location',
                bordered: false,
                bgColor: 'bg-amber-100'
              }
            ].map((pillar, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 relative overflow-hidden transition ${
                  pillar.bordered
                    ? 'bg-white border-4 border-navy'
                    : `${pillar.bgColor || 'bg-orange-100'} border-2 border-orange-200`
                }`}
              >
                {pillar.hasGraphic && (
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <path d="M 50 150 Q 50 100 100 100 Q 150 100 150 150" fill="none" stroke="currentColor" strokeWidth="20" />
                      <path d="M 30 160 Q 30 110 80 110 Q 130 110 130 160" fill="none" stroke="currentColor" strokeWidth="15" opacity="0.7" />
                      <path d="M 70 170 Q 70 140 120 140 Q 170 140 170 170" fill="none" stroke="currentColor" strokeWidth="12" opacity="0.5" />
                    </svg>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-navy mb-3 relative z-10">{pillar.title}</h3>
                <p className={`relative z-10 ${pillar.bordered ? 'text-gray-700' : 'text-gray-800'}`}>{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-gray-300">
            <p className="text-gray-600 text-center mb-8 font-medium text-sm">More than 138 companies use TruHR every day:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['MGB', 'Checkpoint', 'PRESTO', 'KOALA', 'KAPSTON', 'TONIQUE'].map((logo, i) => (
                <span key={i} className="text-gray-700 font-bold text-sm md:text-base">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - FIELD STAFF FEATURE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-900 to-navy rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Real Visibility for Teams on the Move
          </h2>
          <p className="text-blue-100 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            TruHR's 'Pin My Visit' provides real-time data that keeps your field staff accountable and motivated. By standardizing site visits with one-tap checklists, you gain the data-backed defense needed to explain productivity trends to leadership with total confidence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: '◉', text: 'Real-time Ground Visibility' },
              { icon: '📋', text: 'Track Actual Productivity' },
              { icon: '✓', text: 'Automated Field Reporting' },
              { icon: '📑', text: 'Visit Checklists' }
            ].map((feature, i) => (
              <div key={i} className="border border-blue-700 rounded-2xl p-6 flex items-center gap-4 backdrop-blur-sm bg-blue-900/30 hover:bg-blue-800/50 transition">
                <div className="w-auto text-3xl text-rose-400 flex-shrink-0">
                  {feature.icon}
                </div>
                <span className="text-white font-semibold text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - CTA BANNER */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M40 60c0-20 20-35 40-35s40 15 40 35c0 20-20 40-40 45-20-5-40-25-40-45z" fill="rgba(200,200,220,0.3)" opacity="0.5"%3E%3C/path%3E%3C/svg%3E")',
        backgroundSize: '300px 300px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      }}>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-4">
            Give your HR team the<br />confidence they deserve.
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Join the leaders who trust TruHR when it matters most.
          </p>
          <button className="bg-white border-2 border-rose-400 text-navy px-10 py-3 rounded-full font-bold hover:bg-pink-50 transition inline-flex items-center gap-2 text-lg">
            Get a Free Demo <ArrowIcon />
          </button>
        </div>
      </section>

      {/* SECTION 6 - INDUSTRIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white italic mb-2">
            Different Industries.
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold text-yellow-300 italic mb-8">
            Same High Stakes.
          </h3>
          <p className="text-blue-100 text-lg mb-12 max-w-3xl">
            Your workforce doesn't sit behind a desk, so your HRMS shouldn't assume they do. TruHR is built for the specific 'flavor of chaos' your industry brings to the table.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Real Estate', desc: 'Precision for site workers and variable patterns across multiple projects.' },
              { title: 'F&B', desc: 'Seamless management of shift rotations, high turnover, and outlet-level incentives.' },
              { title: 'Retail', desc: 'Synchronized payroll for multi-location teams and seasonal staff.' },
              { title: 'Manufacturing', desc: 'Simplified wages for shopfloor workers and contract labor management.' },
              { title: 'Automotive', desc: 'Scalable tracking for dealership networks and target-linked compensation.' },
              { title: 'Healthcare', desc: 'Compliance-heavy payroll for rotating shifts and multi-department teams.', highlight: true }
            ].map((industry, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition ${
                  industry.highlight
                    ? 'bg-gradient-to-br from-rose-400 to-rose-500 text-white'
                    : 'bg-white text-navy'
                }`}
              >
                <h4 className={`text-2xl font-bold mb-3`}>
                  {industry.title}
                </h4>
                <p className={industry.highlight ? 'text-white/90' : 'text-gray-700'}>{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-5xl font-bold text-navy mb-6">FAQs</h2>
            <button className="text-rose-500 font-bold hover:underline flex items-center gap-2">
              Do you have more questions? Call Us <ArrowIcon />
            </button>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4">
              {[
                { q: 'Does TruHR handle state-specific compliance?', a: 'Yes, TruHR automatically handles PF, ESIC, and Professional Tax compliance across all Indian states and union territories.' },
                { q: 'How long does the setup take?', a: 'We offer full setup assistance to ensure your outlet-specific pay rules and shift logic are mapped correctly from day one.', expanded: true },
                { q: 'Can it handle 100+ locations?', a: 'Absolutely. TruHR is built to scale across hundreds of locations with centralized control and outlet-level customization.' },
                { q: 'Does the system provide an audit trail for compliance checks?', a: 'Yes, every payroll calculation, amendment, and correction is logged with full audit trails for regulatory compliance.' },
                { q: 'Can we set up custom checklists for our field staff?', a: 'Yes, custom checklists can be created and deployed instantly across your entire field workforce.' }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? -1 : i)}
                    className="flex justify-between items-start w-full text-left group"
                  >
                    <span className="text-navy font-bold group-hover:text-rose-600 transition text-lg">{faq.q}</span>
                    <span className="text-3xl text-navy ml-4 flex-shrink-0">
                      {expandedFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {expandedFaq === i && (
                    <p className="text-gray-700 mt-4 text-base">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 md:hidden">
              <p className="text-gray-600 text-sm mb-4">Do you have more questions?</p>
              <button className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition inline-flex items-center gap-2">
                Call Us <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-navy text-center mb-16">
            "Take their Word for It".
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'Nitika Singh', role: 'HR Manager', company: 'Pashupati Lifecare P Ltd.' },
              { name: 'Sharath Nittur', role: 'GM Compliance', company: 'Vestian Global' },
              { name: 'Chetan Sh', role: 'DGM Payroll', company: 'TechCorp India' },
              { name: 'Priya Jain', role: 'HR Director', company: 'Global Solutions Ltd.' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-sm leading-relaxed">
                  "Amazing application, take lesser time - Excellent Application. Take lesser time to check in a check out. Teams are very helpful and supportive they always give the prompt response."
                </p>
                <div>
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-gray-600 text-xs mt-1">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 pb-12 border-b border-blue-800 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">H</span>
                </div>
              </div>
              <div className="text-sm">
                <p className="text-blue-100 font-medium mb-4">Learn More</p>
                <div className="space-y-3 flex flex-col">
                  <a href="#solutions" className="text-blue-100 hover:text-white transition font-semibold">Solutions</a>
                  <a href="#industries" className="text-blue-100 hover:text-white transition font-semibold">Industries</a>
                  <a href="#company" className="text-blue-100 hover:text-white transition font-semibold">Company</a>
                </div>
              </div>
              <button className="bg-white text-navy px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition mt-8 inline-flex items-center gap-2">
                Schedule a Call <ArrowIcon />
              </button>
            </div>

            <div className="text-sm text-right">
              <p className="text-blue-100 leading-relaxed mb-6">
                #5, 3rd Floor,
                <br />
                Rajapushpa Business Centre,
                <br />
                Opp: Google, Kondapur,
                <br />
                Hyderabad, Telangana 500084.
              </p>
              <p className="text-white font-bold mb-4">TruHR</p>
              <p className="text-blue-100 text-xs">Diyos InfoTech Pvt. Ltd.</p>
            </div>
          </div>

          <div className="text-center text-blue-200 text-xs">
            <p>&copy; 2026 Diyos InfoTech Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
