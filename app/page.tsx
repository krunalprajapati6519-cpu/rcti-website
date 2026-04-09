'use client';

import { Mail, Phone, Share2, Heart, Star, Book, Users, Zap, Building2, ArrowRight } from 'lucide-react';

export default function Home() {
  const departments = [
    { name: 'Civil Engineering', icon: '🏗️' },
    { name: 'Computer Engineering', icon: '💻' },
    { name: 'Electrical Engineering', icon: '⚡' },
    { name: 'Mechanical Engineering', icon: '⚙️' },
    { name: 'Information Technology', icon: '📱' },
    { name: 'Applied Mechanics', icon: '🔧' },
    { name: 'Textile Technology', icon: '🧵' },
    { name: 'ICT', icon: '🌐' },
  ];

  const news = [
    { title: 'AI Content for Diploma Programs', date: 'Latest' },
    { title: 'Join Reliance Solar PV', date: 'Recruitment' },
    { title: 'NCC Selection 2025', date: 'Admissions' },
    { title: 'Winter Exam Forms Instructions', date: 'Important' },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg"></div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">RCTI</h1>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
              <a href="#departments" className="text-gray-600 hover:text-blue-600 transition">Departments</a>
              <a href="#news" className="text-gray-600 hover:text-blue-600 transition">News</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">Excellence in</span>
                <br />
                <span className="text-gray-900">Technical Education</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Est. 1910 | Pioneering technical education in India since over a century. Empowering students with industry-ready skills and innovation.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:-translate-y-1">
                  Explore Programs
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🎓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600 text-white rounded-lg">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To cater to the technological development of the nation through excellence in technical education by satisfying the needs of industries and society.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-600 text-white rounded-lg">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  Impart qualitative technical education with core values
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  Strengthen industry linkages and community programs
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  Strive for excellence in technological innovation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Departments</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Comprehensive engineering programs across diverse disciplines</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {dept.name}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition">
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Latest News & Updates</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 transition cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Stay updated with the latest announcements and opportunities at RCTI.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-white text-center">
              <div className="mb-4 flex justify-center">
                <Book size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Accredited Programs</h3>
              <p>NBA accredited diploma programs with international standards</p>
            </div>
            <div className="text-white text-center">
              <div className="mb-4 flex justify-center">
                <Building2 size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Modern Campus</h3>
              <p>State-of-the-art facilities in Sola, Ahmedabad since 1997</p>
            </div>
            <div className="text-white text-center">
              <div className="mb-4 flex justify-center">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Placed Graduates</h3>
              <p>Strong industry partnerships ensuring excellent placement opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">RCTI</h3>
              <p className="text-gray-400">Excellence in Technical Education Since 1910</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#departments" className="hover:text-white transition">Departments</a></li>
                <li><a href="#news" className="hover:text-white transition">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Important Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">GTU Portal</a></li>
                <li><a href="#" className="hover:text-white transition">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition">Downloads</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <span className="text-sm">rcti-abad-dte@gujarat.gov.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <span className="text-sm">079-27664785</span>
                </div>
                <p className="text-sm pt-2">Sola, Ahmedabad – 380060</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 R. C. Technical Institute. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Share2 size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Heart size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Star size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
