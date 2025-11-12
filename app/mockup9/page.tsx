'use client'

import Link from 'next/link'
import { Home, ArrowDown, Shield, Globe, Award, CheckCircle2, TrendingUp, Users, Zap, Target, ChevronRight } from 'lucide-react'

export default function Mockup9() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Special Partners</h1>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-lg hover:border-slate-600 transition-colors text-sm"
            >
              <Home size={16} />
              <span>홈으로</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Section 1 - Hero */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-8">
            <Zap size={16} />
            <span>의료기기 인허가 전문가</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            의료기기 인허가<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              맞춤형 컨설팅 전문 파트너
            </span>
          </h1>
          
          <p className="text-2xl text-slate-300 mb-12 leading-relaxed">
            한국·미국·유럽의 최신 사이버보안 규제 트렌드를 반영한<br />
            실질적인 의료기기 사이버보안 시스템 구축 컨설팅
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-10 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105">
              무료 상담 신청
            </button>
            <button className="px-10 py-4 border-2 border-slate-700 hover:border-slate-600 rounded-xl font-bold text-lg transition-all">
              서비스 알아보기
            </button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-slate-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* Section 2 - Stats */}
      <section className="min-h-screen flex items-center justify-center bg-slate-950 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,65,85,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              입증된 전문성
            </h2>
            <p className="text-xl text-slate-400">
              숫자로 말하는 Special Partners의 성과
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '156+', label: '인허가 승인', icon: CheckCircle2, color: 'from-blue-500 to-cyan-500' },
              { number: '100%', label: '심사 통과율', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
              { number: '3개국', label: '글로벌 지원', icon: Globe, color: 'from-purple-500 to-pink-500' },
              { number: '58개사', label: '협력 제조사', icon: Users, color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all">
                    <Icon className={`w-12 h-12 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`} />
                    <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-slate-400">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 3 - Services */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              핵심 서비스
            </h2>
            <p className="text-xl text-slate-400">
              Special Partners가 제공하는 전문 컨설팅
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '사이버보안 시스템 구축',
                description: '단순한 문서가 아닌 실질적인 보안 아키텍처 설계부터 구현까지',
                features: ['위협 모델링', '보안 아키텍처 설계', 'SBOM 구성 및 취약점 분석', '보안 테스트 및 검증'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Globe,
                title: '글로벌 인허가 컨설팅',
                description: '한국·미국·유럽의 최신 규제 트렌드를 반영한 맞춤형 지원',
                features: ['MFDS 식약처 인허가', 'FDA 510(k) 제출', 'MDR/IVDR CE 마킹', 'Premarket Cybersecurity'],
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Award,
                title: '규제 준수 교육',
                description: '지속적인 컴플라이언스를 위한 전문가 교육 프로그램',
                features: ['사내 사이버보안 교육', '심사 대응 전략', '문서 작성 실무', '사후 관리 지원'],
                color: 'from-purple-500 to-pink-500'
              }
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 size={12} className="text-white" />
                        </div>
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 4 - Countries */}
      <section className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              국가별 규제 지원
            </h2>
            <p className="text-xl text-slate-400">
              3개국의 최신 규제 요구사항을 완벽하게 준수합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                country: '한국',
                regulation: 'MFDS',
                description: '식품의약품안전처',
                details: '의료기기 사이버보안 가이드라인 완벽 대응',
                stats: '52건 승인',
                color: 'from-blue-500 to-blue-600'
              },
              {
                country: '미국',
                regulation: 'FDA',
                description: 'Food and Drug Administration',
                details: 'Premarket Cybersecurity Guidance 전문',
                stats: '67건 승인',
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                country: '유럽',
                regulation: 'MDR/IVDR',
                description: 'Medical Device Regulation',
                details: 'EU 사이버보안 요구사항 완벽 충족',
                stats: '37건 승인',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all h-full">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${item.color} rounded-xl mb-6`}>
                    <Globe size={20} />
                    <span className="font-bold text-lg">{item.country}</span>
                  </div>
                  <div className="text-3xl font-bold mb-2">{item.regulation}</div>
                  <div className="text-slate-400 text-sm mb-4">{item.description}</div>
                  <p className="text-slate-300 mb-6">{item.details}</p>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} bg-opacity-10 rounded-lg`}>
                    <span className={`font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - CTA */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Target className="w-20 h-20 text-blue-400 mx-auto mb-8" />
          <h2 className="text-6xl font-bold mb-8">
            귀사의 성공을<br />함께하겠습니다
          </h2>
          <p className="text-2xl text-slate-300 mb-12 leading-relaxed">
            검증된 프로세스와 풍부한 경험으로<br />
            의료기기 글로벌 인허가의 모든 단계를 완벽하게 지원합니다
          </p>
          <button className="group px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-bold text-xl transition-all hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105">
            <span className="flex items-center gap-3">
              무료 컨설팅 시작하기
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>
    </div>
  )
}

