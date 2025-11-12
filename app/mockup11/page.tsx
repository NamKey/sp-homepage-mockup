'use client'

import Link from 'next/link'
import { Home, Shield, Globe, CheckCircle2, ArrowRight, Zap, Target, Users } from 'lucide-react'

export default function Mockup11() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-slate-200 px-8 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg"></div>
              <span className="font-bold text-slate-900">Special Partners</span>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Home size={16} />
              <span>홈으로</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Brand Identity */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Brand Statement */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-900">의료기기 인허가 전문</span>
              </div>

              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h1 className="text-6xl font-bold text-slate-900">SP</h1>
                    </div>
                  </div>
                  <div className="h-2 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6"></div>
                </div>

                <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
                  맞춤형 컨설팅으로<br />
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    글로벌 시장 진출
                  </span>을 완성합니다
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Special Partners는 한국·미국·유럽의 최신 사이버보안 규제를<br />
                  완벽히 이해하고, 실질적인 시스템 구축부터 인허가 승인까지<br />
                  모든 과정을 함께합니다.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105">
                  컨설팅 시작하기
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold border-2 border-slate-200 hover:border-blue-600 transition-all">
                  실적 보기
                </button>
              </div>
            </div>

            {/* Right - Stats Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      156+
                    </div>
                    <div className="text-slate-600">성공적인 인허가</div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full w-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">3개국</div>
                  <div className="text-sm text-slate-600">글로벌 지원</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">58개사</div>
                  <div className="text-sm text-slate-600">협력 제조사</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-6xl font-bold">100%</div>
                  <Target className="w-12 h-12 opacity-50" />
                </div>
                <div className="text-xl font-semibold">심사 통과율</div>
                <div className="text-blue-100 mt-2">완벽한 승인 기록을 자랑합니다</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Special Partners의 핵심 역량
            </h2>
            <p className="text-xl text-slate-600">
              브랜드 가치를 실현하는 전문성
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '실질적 구축',
                description: '문서가 아닌 작동하는 시스템',
                features: ['위협 모델링', '보안 아키텍처', 'SBOM 구성', '침투 테스트'],
                color: 'blue'
              },
              {
                icon: Zap,
                title: '최신 트렌드',
                description: '글로벌 규제 실시간 반영',
                features: ['MFDS 가이드', 'FDA Guidance', 'MDR/IVDR', 'Post-Market'],
                color: 'cyan'
              },
              {
                icon: Target,
                title: '맞춤형 전략',
                description: '제품 특성에 최적화',
                features: ['초기 분석', '리스크 평가', '문서 작성', '심사 대응'],
                color: 'blue'
              }
            ].map((competency, index) => {
              const Icon = competency.icon
              return (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${competency.color}-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{competency.title}</h3>
                  <p className="text-slate-600 mb-6">{competency.description}</p>
                  <div className="space-y-2">
                    {competency.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${competency.color}-600`}></div>
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">Special Partners</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-4">
                우리의 약속
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                귀사의 의료기기가 글로벌 시장에서 성공할 수 있도록<br />
                검증된 프로세스와 풍부한 경험으로 완벽하게 지원합니다
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                  무료 상담 신청
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all border border-white/30">
                  포트폴리오 다운로드
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl"></div>
            <span className="text-2xl font-bold text-slate-900">Special Partners</span>
          </div>
          <p className="text-slate-600">의료기기 인허가 맞춤형 컨설팅 전문 파트너</p>
          <p className="text-sm text-slate-500 mt-4">© 2025 Special Partners. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

