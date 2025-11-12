'use client'

import Link from 'next/link'
import { Home, ArrowRight, Shield, Globe, Award, CheckCircle2, Zap, Target, Users, TrendingUp } from 'lucide-react'

export default function Mockup7() {
  const services = [
    {
      icon: Shield,
      title: '사이버보안 시스템 구축',
      description: '실질적인 보안 아키텍처 설계부터 구현까지',
      features: ['위협 모델링', 'SBOM 구성', '취약점 분석', '보안 테스트']
    },
    {
      icon: Globe,
      title: '글로벌 인허가 컨설팅',
      description: '한국·미국·유럽 규제 전문가의 맞춤형 지원',
      features: ['MFDS 식약처', 'FDA 510(k)', 'MDR/IVDR', 'Premarket']
    },
    {
      icon: Award,
      title: '규제 준수 교육',
      description: '지속적인 컴플라이언스를 위한 전문 교육',
      features: ['사내 교육', '심사 대응', '문서 작성', '사후 관리']
    }
  ]

  const stats = [
    { number: '156+', label: '인허가 승인' },
    { number: '100%', label: '심사 통과율' },
    { number: '3개국', label: '글로벌 지원' },
    { number: '58개사', label: '협력 제조사' }
  ]

  const countries = [
    {
      name: '한국',
      regulation: 'MFDS',
      color: 'from-blue-500 to-blue-600',
      description: '식품의약품안전처 의료기기 사이버보안 가이드라인',
      features: ['위험 관리', '사이버보안 문서', '기술문서 작성', '심사 대응']
    },
    {
      name: '미국',
      regulation: 'FDA',
      color: 'from-emerald-500 to-emerald-600',
      description: 'FDA Premarket Cybersecurity Guidance',
      features: ['510(k) 제출', 'SBOM 작성', 'Threat Model', 'Security Testing']
    },
    {
      name: '유럽',
      regulation: 'MDR/IVDR',
      color: 'from-purple-500 to-purple-600',
      description: 'EU 의료기기 규정 및 사이버보안 요구사항',
      features: ['Technical Documentation', 'Risk Analysis', 'Post-Market', 'CE Marking']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <h1 className="text-xl font-bold text-slate-900">Special Partners</h1>
              <div className="hidden md:flex items-center gap-8 text-sm">
                <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">서비스</a>
                <a href="#countries" className="text-slate-600 hover:text-slate-900 transition-colors">국가별 지원</a>
                <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">회사소개</a>
              </div>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-sm border border-slate-300 rounded-lg hover:border-slate-400 transition-colors"
            >
              <Home size={16} />
              <span>홈으로</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Screen */}
      <section className="pt-24 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                <Zap size={16} />
                <span>의료기기 인허가 전문가</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                실질적인<br />
                사이버보안<br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  시스템 구축
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                단순한 가이드라인 기반 문서 컨설팅이 아닌,<br />
                한국·미국·유럽의 최신 규제 트렌드를 반영한<br />
                체계적인 의료기기 사이버보안 컨설팅
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all hover:shadow-lg hover:scale-105">
                  무료 상담 신청
                </button>
                <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                  서비스 자세히 보기
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-3xl p-1">
                <div className="w-full h-full bg-white rounded-3xl p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      의료기기 인허가<br />맞춤형 컨설팅 전문 파트너
                    </h3>
                    <div className="space-y-3">
                      {[
                        '최신 사이버보안 컨설팅 경력',
                        '국가별 심사 트렌드 확보',
                        '실질적 시스템 구축 컨설팅',
                        '100% 심사 통과 기록'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="text-white" size={14} />
                          </div>
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">MFDS</div>
                      <div className="text-xs text-slate-600 mt-1">한국</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">FDA</div>
                      <div className="text-xs text-slate-600 mt-1">미국</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">MDR</div>
                      <div className="text-xs text-slate-600 mt-1">유럽</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-xl flex items-center justify-center animate-float">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <Award className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              핵심 서비스
            </h2>
            <p className="text-xl text-slate-600">
              Special Partners가 제공하는 전문 컨설팅 서비스
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              국가별 규제 지원
            </h2>
            <p className="text-xl text-slate-600">
              3개국의 최신 규제 트렌드를 완벽하게 파악하고 있습니다
            </p>
          </div>

          <div className="space-y-6">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-200">
                <div className="grid md:grid-cols-[300px,1fr] gap-8 items-center">
                  <div>
                    <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${country.color} text-white rounded-xl mb-4`}>
                      <Globe size={24} />
                      <div>
                        <div className="text-2xl font-bold">{country.name}</div>
                        <div className="text-sm opacity-90">{country.regulation}</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      {country.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {country.features.map((feature, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-lg p-4 text-center">
                        <CheckCircle2 className={`w-6 h-6 bg-gradient-to-r ${country.color} bg-clip-text text-transparent mx-auto mb-2`} />
                        <div className="text-sm font-medium text-slate-900">{feature}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <Target className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h2 className="text-4xl font-bold mb-6">
            귀사의 글로벌 진출을 함께하겠습니다
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            의료기기 인허가 맞춤형 컨설팅 전문 파트너<br />
            Special Partners와 함께 시작하세요
          </p>
          <button className="px-10 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all hover:shadow-xl hover:scale-105">
            지금 상담 신청하기 →
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

