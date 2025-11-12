'use client'

import Link from 'next/link'
import { Home, Shield, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

export default function Mockup12() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-50"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg"></div>
              </div>
              <div>
                <div className="text-xl font-bold">Special Partners</div>
                <div className="text-xs text-slate-400">Medical Device Consulting</div>
              </div>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Home size={16} />
              <span>홈으로</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero - Extreme Minimal */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Large Logo Mark */}
          <div className="mb-12">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center mb-8 mx-auto">
                  <Shield className="w-20 h-20 text-white" />
                </div>
                <h1 className="text-7xl font-bold mb-4">Special Partners</h1>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-3xl text-slate-300 mb-4 font-light">
            의료기기 인허가 맞춤형 컨설팅
          </p>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
            한국·미국·유럽의 사이버보안 규제를 완벽히 이해하는 전문 파트너
          </p>

          <button className="px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 mb-20">
            프로젝트 시작하기
          </button>

          {/* Minimal Stats */}
          <div className="grid grid-cols-4 gap-12 max-w-4xl mx-auto pt-12 border-t border-slate-800">
            {[
              { value: '156+', label: 'Projects' },
              { value: '100%', label: 'Success' },
              { value: '3', label: 'Countries' },
              { value: '58+', label: 'Clients' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Ultra Clean */}
      <section className="py-32 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl text-slate-400">세 가지 핵심 역량</p>
          </div>

          <div className="space-y-8">
            {[
              {
                number: '01',
                title: '실질적 시스템 구축',
                subtitle: 'Real System Implementation',
                description: '문서가 아닌 실제 작동하는 사이버보안 시스템을 구축합니다',
                features: ['위협 모델링', '보안 아키텍처 설계', 'SBOM 구성', '취약점 분석']
              },
              {
                number: '02',
                title: '글로벌 규제 대응',
                subtitle: 'Global Regulatory Compliance',
                description: '한국·미국·유럽의 최신 규제 트렌드를 실시간으로 반영합니다',
                features: ['MFDS 인허가', 'FDA 510(k)', 'MDR/IVDR', 'Premarket Security']
              },
              {
                number: '03',
                title: '완벽한 심사 통과',
                subtitle: '100% Approval Rate',
                description: '체계적인 프로세스로 심사를 완벽하게 준비하고 대응합니다',
                features: ['초기 컨설팅', '문서 작성', '심사 대응', '사후 관리']
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-12 hover:border-slate-700 transition-all">
                  <div className="flex items-start gap-8">
                    <div className="text-8xl font-bold text-slate-800 leading-none">
                      {service.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                      <p className="text-slate-400 text-sm mb-4 uppercase tracking-wider">{service.subtitle}</p>
                      <p className="text-xl text-slate-300 mb-6">{service.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="w-8 h-8 text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries - Minimal Grid */}
      <section className="py-32 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Global Coverage</h2>
            <p className="text-xl text-slate-400">3개국 완벽 대응</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { country: 'South Korea', code: 'KR', agency: 'MFDS', count: '52' },
              { country: 'United States', code: 'US', agency: 'FDA', count: '67' },
              { country: 'European Union', code: 'EU', agency: 'MDR/IVDR', count: '37' }
            ].map((location, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all group">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-6xl font-bold text-slate-800">{location.code}</div>
                  <div className="text-right">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {location.count}
                    </div>
                    <div className="text-sm text-slate-500">Projects</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{location.country}</h3>
                <p className="text-slate-400 mb-4">{location.agency}</p>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-32 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-6xl font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-2xl text-slate-400 mb-12">
            귀사의 글로벌 진출을 Special Partners와 함께 시작하세요
          </p>
          <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105">
            무료 상담 신청하기
          </button>
        </div>
      </section>

      {/* Footer - Ultra Minimal */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg"></div>
              <span className="font-bold">Special Partners</span>
            </div>
            <div className="text-sm text-slate-500">© 2025 All rights reserved</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

