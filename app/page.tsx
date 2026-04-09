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
      <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">RCTI</h1>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
              <a href="#departments" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Departments</a>
              <a href="#news" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">News</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-25">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">Excellence in</span>
                  <br />
                  <span className="text-gray-900">Technical Education</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Est. 1910 | Pioneering technical education in India since over a century. Empowering students with industry-ready skills and innovation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  Explore Programs
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover:border-blue-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative lg:flex lg:justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-100 via-blue-50 to-purple-50 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-8xl md:text-9xl">🎓</div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🔧</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-25 to-purple-25 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-semibold rounded-full text-sm mb-6 shadow-sm">
              Our Foundation
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Vision & Mission
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Driving technological excellence and innovation for over a century
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-10 lg:p-12 rounded-3xl border border-blue-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap size={40} />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                  To cater to the technological development of the nation through excellence in technical education by satisfying the needs of industries and society.
                </p>
                <div className="mt-8 flex items-center gap-3 text-blue-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-10 lg:p-12 rounded-3xl border border-purple-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-5 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users size={40} />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                  </div>
                </div>
                <ul className="space-y-6 text-gray-700">
                  <li className="flex gap-5 items-start group/item">
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover/item:scale-110 transition-transform duration-300">1</span>
                    <span className="text-lg md:text-xl leading-relaxed pt-1">Impart qualitative technical education with core values</span>
                  </li>
                  <li className="flex gap-5 items-start group/item">
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover/item:scale-110 transition-transform duration-300">2</span>
                    <span className="text-lg md:text-xl leading-relaxed pt-1">Strengthen industry linkages and community programs</span>
                  </li>
                  <li className="flex gap-5 items-start group/item">
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover/item:scale-110 transition-transform duration-300">3</span>
                    <span className="text-lg md:text-xl leading-relaxed pt-1">Strive for excellence in technological innovation</span>
                  </li>
                </ul>
                <div className="mt-8 flex items-center gap-3 text-purple-600 font-semibold">
                  <span>Explore More</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-blue-25 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-blue-100/30"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 font-semibold rounded-full text-sm mb-6 shadow-sm">
              Academic Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Our Departments
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive engineering programs across diverse disciplines
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative">
                  <div className="text-7xl mb-8 text-center group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-lg">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-center mb-6 leading-tight">
                    {dept.name}
                  </h3>
                  <div className="flex items-center justify-center gap-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="font-semibold text-lg">Explore</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-25 via-white to-purple-25 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-purple-50/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 font-semibold rounded-full text-sm mb-6 shadow-sm">
              Latest Updates
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-orange-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Latest News & Updates
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay informed with the latest announcements and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {news.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-bold rounded-full shadow-md border border-orange-200">
                      {item.date}
                    </span>
                    <div className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-12">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Stay updated with the latest announcements and opportunities at RCTI. Click to read more about this exciting development and how it impacts our community.
                  </p>
                  <div className="flex items-center gap-3 text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span>Read More</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-700/90 to-blue-800/90"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm mb-6 shadow-lg border border-white/30">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Why Choose RCTI?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              Leading technical education with industry partnerships and modern facilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="mb-8 flex justify-center">
                <div className="relative p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <Book size={56} className="text-white relative z-10 drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">Accredited Programs</h3>
              <p className="text-blue-100 leading-relaxed text-lg drop-shadow-sm">NBA accredited diploma programs with international standards and industry recognition</p>
            </div>
            <div className="text-center group">
              <div className="mb-8 flex justify-center">
                <div className="relative p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <Building2 size={56} className="text-white relative z-10 drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">Modern Campus</h3>
              <p className="text-blue-100 leading-relaxed text-lg drop-shadow-sm">State-of-the-art facilities in Sola, Ahmedabad since 1997 with cutting-edge technology</p>
            </div>
            <div className="text-center group">
              <div className="mb-8 flex justify-center">
                <div className="relative p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <Users size={56} className="text-white relative z-10 drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">Industry Ready</h3>
              <p className="text-blue-100 leading-relaxed text-lg drop-shadow-sm">Strong industry partnerships ensuring excellent placement opportunities and career success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <h3 className="text-2xl font-bold">RCTI</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Excellence in Technical Education Since 1910. Empowering the next generation of engineers and innovators.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Share2 size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Heart size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Star size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#departments" className="hover:text-white transition-colors duration-200">Departments</a></li>
                <li><a href="#news" className="hover:text-white transition-colors duration-200">Latest News</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Important Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">GTU Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Downloads</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Syllabus</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-400" />
                  <span className="text-sm">rcti-abad-dte@gujarat.gov.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-400" />
                  <span className="text-sm">079-27664785</span>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-300 mb-1">Address:</p>
                  <p className="text-sm leading-relaxed">
                    Opp Sola Civil Hospital,<br />
                    Near Gujarat High Court,<br />
                    S.G. Highway, Sola,<br />
                    Ahmedabad – 380060
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 R. C. Technical Institute. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Affiliated to Gujarat Technological University | Approved by AICTE
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
