'use client'

import Link from 'next/link'
import { Home, Shield, Globe, Award, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Mockup10() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg"></div>
              <span className="text-xl font-bold text-slate-900">Special Partners</span>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Home size={16} />
              <span>홈으로</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Logo Centered */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Large Logo Display */}
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl"></div>
            <div className="relative inline-flex items-center justify-center p-12 bg-white rounded-3xl shadow-2xl border border-slate-200">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-5xl font-bold text-slate-900">Special Partners</h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-cyan-600 mt-2"></div>
                  </div>
                </div>
                <p className="text-xl text-slate-600 font-medium">
                  의료기기 인허가 맞춤형 컨설팅 전문 파트너
                </p>
              </div>
            </div>
          </div>

          <p className="text-2xl text-slate-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            한국·미국·유럽의 최신 사이버보안 규제 트렌드를 반영한<br />
            <span className="font-semibold text-blue-600">실질적인 시스템 구축 컨설팅</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all hover:scale-105">
              무료 상담 시작하기
            </button>
            <button className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
              포트폴리오 보기
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '156+', label: '인허가 승인' },
              { value: '100%', label: '심사 통과율' },
              { value: '3개국', label: '글로벌 지원' },
              { value: '58개사', label: '협력 제조사' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Special Partners의 약속
            </h2>
            <p className="text-xl text-slate-600">
              우리는 고객의 성공을 최우선으로 생각합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '실질적 시스템 구축',
                description: '단순한 가이드라인 문서가 아닌, 실제로 작동하는 사이버보안 시스템을 구축합니다.',
                color: 'from-blue-600 to-blue-700'
              },
              {
                icon: Globe,
                title: '글로벌 규제 전문성',
                description: '한국·미국·유럽의 최신 규제 트렌드를 실시간으로 파악하고 반영합니다.',
                color: 'from-cyan-600 to-cyan-700'
              },
              {
                icon: Award,
                title: '완벽한 심사 대응',
                description: '100% 심사 통과율을 자랑하는 체계적인 프로세스로 승인을 보장합니다.',
                color: 'from-blue-700 to-cyan-700'
              }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                국가별 맞춤형<br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  인허가 컨설팅
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                각국의 규제 특성을 완벽하게 이해하고<br />
                최적의 전략을 제시합니다
              </p>

              <div className="space-y-6">
                {[
                  { country: '한국 MFDS', desc: '식약처 의료기기 사이버보안 가이드라인' },
                  { country: '미국 FDA', desc: 'Premarket Cybersecurity Guidance' },
                  { country: '유럽 MDR/IVDR', desc: 'CE 마킹 및 Technical Documentation' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.country}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">컨설팅 프로세스</h3>
                      <p className="text-slate-600">체계적인 4단계 접근</p>
                    </div>
                  </div>

                  {[
                    { step: '01', title: '초기 분석', duration: '1-2주' },
                    { step: '02', title: '시스템 구축', duration: '4-8주' },
                    { step: '03', title: '문서 작성', duration: '3-6주' },
                    { step: '04', title: '승인 획득', duration: '2-4주' }
                  ].map((process, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center font-bold text-white">
                        {process.step}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">{process.title}</div>
                        <div className="text-sm text-slate-500">{process.duration}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            귀사의 글로벌 진출을<br />함께 시작하겠습니다
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Special Partners와 함께 의료기기 인허가의 모든 과정을 완벽하게 준비하세요
          </p>
          <button className="px-12 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105 shadow-xl">
            지금 상담 신청하기
          </button>
        </div>
      </section>
    </div>
  )
}

