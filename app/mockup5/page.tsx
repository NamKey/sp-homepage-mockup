import Link from 'next/link'
import { ArrowLeft, Shield, Globe, Award, Users, CheckCircle, ArrowRight, Sparkles, Zap, Target } from 'lucide-react'

export default function Mockup5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* 배경 메시 그라데이션 */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>

      {/* 네비게이션 */}
      <nav className="relative z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">돌아가기</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors">소개</a>
            <a href="#services" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors">서비스</a>
            <a href="#process" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors">프로세스</a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all">
              상담하기
            </button>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/60 border border-white/40 rounded-full mb-6 shadow-lg">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Medical Device Cybersecurity
                </span>
              </div>
              
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                  의료기기 인허가
                </span>
                <br />
                <span className="text-slate-900">맞춤형 컨설팅</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                한국, 미국, 유럽의 사이버보안 규제를 완벽히 준수하는<br />
                프리미엄 인허가 컨설팅 서비스
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/70 border border-white/40 rounded-full shadow-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-700">100+ 승인</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/70 border border-white/40 rounded-full shadow-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-700">3개국 지원</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/70 border border-white/40 rounded-full shadow-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-700">100% 통과</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                  무료 상담 신청
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 backdrop-blur-xl bg-white/70 border border-white/40 text-slate-700 font-semibold rounded-2xl hover:shadow-lg transition-all">
                  포트폴리오
                </button>
              </div>
            </div>

            {/* 3D 플로팅 카드 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-3xl"></div>
              
              <div className="relative space-y-4">
                {/* 메인 카드 */}
                <div className="backdrop-blur-2xl bg-white/40 border border-white/60 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">규제 준수 현황</h3>
                    <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full">
                      CERTIFIED
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-700 font-medium">한국 MFDS</span>
                        <span className="text-purple-600 font-bold">100%</span>
                      </div>
                      <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-700 font-medium">미국 FDA</span>
                        <span className="text-blue-600 font-bold">100%</span>
                      </div>
                      <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-700 font-medium">유럽 MDR</span>
                        <span className="text-indigo-600 font-bold">100%</span>
                      </div>
                      <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 통계 카드 */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl p-4 text-center shadow-lg">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">50+</div>
                    <div className="text-xs text-slate-600 font-medium">제조사</div>
                  </div>
                  <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl p-4 text-center shadow-lg">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">100+</div>
                    <div className="text-xs text-slate-600 font-medium">승인</div>
                  </div>
                  <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl p-4 text-center shadow-lg">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">100%</div>
                    <div className="text-xs text-slate-600 font-medium">성공률</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section id="services" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              프리미엄 컨설팅 서비스
            </h2>
            <p className="text-xl text-slate-600">
              기술 기반의 실질적인 사이버보안 시스템 구축
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '사이버보안 시스템 구축',
                desc: '위협 모델링부터 취약점 평가까지 완벽한 보안 시스템',
                gradient: 'from-purple-500 to-blue-500',
                features: ['Threat Modeling', 'Security Architecture', 'Penetration Test']
              },
              {
                icon: Globe,
                title: '글로벌 인허가 대응',
                desc: 'MFDS, FDA, MDR 등 주요 국가의 인허가 완벽 지원',
                gradient: 'from-blue-500 to-cyan-500',
                features: ['한국 식약처', '미국 FDA', '유럽 MDR/IVDR']
              },
              {
                icon: Award,
                title: '지속적 규제 준수',
                desc: '인허가 후 사후관리 및 규제 변화 대응',
                gradient: 'from-cyan-500 to-teal-500',
                features: ['Post-Market', 'Patch Management', 'Compliance Update']
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative">
                <div className="backdrop-blur-2xl bg-white/40 border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로세스 섹션 */}
      <section id="process" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              4단계 컨설팅 프로세스
            </h2>
            <p className="text-xl text-slate-600">
              체계적인 방법론으로 100% 승인율 달성
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '현황 분석', icon: Target, color: 'purple' },
              { step: '02', title: '시스템 구축', icon: Zap, color: 'blue' },
              { step: '03', title: '문서 작성', icon: Shield, color: 'cyan' },
              { step: '04', title: '심사 완료', icon: CheckCircle, color: 'teal' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="backdrop-blur-2xl bg-white/40 border border-white/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-slate-400 mb-2">STEP {item.step}</div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/50 to-white/30 border border-white/60 rounded-[3rem] p-12 shadow-2xl text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              글로벌 시장 진출을 준비하세요
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Special Partners와 함께라면 의료기기 인허가가 쉬워집니다
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all">
              지금 시작하기
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="relative py-12 px-6 backdrop-blur-xl bg-white/40 border-t border-white/40">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Special Partners
          </div>
          <p className="text-slate-600 text-sm mb-4">의료기기 인허가 맞춤형 컨설팅 전문 파트너</p>
          <p className="text-slate-500 text-xs">© 2025 Special Partners. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

