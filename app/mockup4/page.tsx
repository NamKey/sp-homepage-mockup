import Link from 'next/link'
import { ArrowLeft, Shield, Lock, FileCheck, Globe2, CheckCircle2, AlertTriangle, Activity, Database, Code, Server, ChevronRight } from 'lucide-react'

export default function Mockup4() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* 배경 그리드 효과 */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* 네비게이션 */}
      <nav className="relative z-50 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">돌아가기</span>
          </Link>
          <div className="flex items-center gap-8">
            <a href="#services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">서비스</a>
            <a href="#process" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">프로세스</a>
            <a href="#compliance" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">규제준수</a>
            <button className="px-4 py-2 bg-cyan-500 text-slate-950 text-sm font-semibold rounded-lg hover:bg-cyan-400 transition-colors">
              무료 상담
            </button>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        {/* 발광 효과 */}
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Medical Device Cybersecurity Expert</span>
              </div>
              
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">의료기기</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  사이버보안 인허가
                </span>
                <br />
                <span className="text-white">전문 파트너</span>
              </h1>
              
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                한국(MFDS), 미국(FDA), 유럽(MDR) 규제를 완벽히 준수하는<br />
                실질적인 사이버보안 시스템 구축 및 인허가 컨설팅
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-slate-300">100+ 인허가 승인</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-slate-300">100% 심사 통과율</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-slate-300">3개국 전문 대응</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all hover:scale-105 flex items-center gap-2">
                  상담 신청하기
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all">
                  포트폴리오
                </button>
              </div>
            </div>

            {/* 기술 스펙 카드 */}
            <div className="relative">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">규제 준수 현황</h3>
                  <div className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full">
                    <span className="text-xs font-semibold text-green-400">ACTIVE</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300">한국 MFDS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 font-mono text-sm">100%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300">미국 FDA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 font-mono text-sm">100%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300">유럽 MDR/IVDR</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 font-mono text-sm">100%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-cyan-500/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
                      <div className="text-xs text-slate-400">제조사</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-400 mb-1">100+</div>
                      <div className="text-xs text-slate-400">승인</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                      <div className="text-xs text-slate-400">지원</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 서비스 섹션 */}
      <section id="services" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">CORE SERVICES</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              기술 기반 맞춤형 컨설팅
            </h2>
            <p className="text-xl text-slate-400">
              단순 문서가 아닌, 실제 작동하는 시스템을 구축합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-cyan-500/20 border border-cyan-500/50 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  사이버보안 시스템 구축
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  위협 모델링, 보안 아키텍처 설계, 취약점 평가 등 
                  실질적인 사이버보안 시스템을 구축합니다.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    Threat Modeling & Risk Analysis
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    Security Architecture Design
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    Vulnerability Assessment & Penetration Test
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-cyan-500/20 border border-cyan-500/50 rounded-lg flex items-center justify-center mb-6">
                  <FileCheck className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  글로벌 인허가 대응
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  한국, 미국, 유럽의 최신 규제 트렌드를 반영하여 
                  인허가 심사를 완벽하게 준비합니다.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    MFDS 사이버보안 기술문서
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    FDA Premarket Cybersecurity & SBOM
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    MDR/IVDR Cybersecurity Requirements
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-cyan-500/20 border border-cyan-500/50 rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  지속적 규제 준수
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  인허가 승인 후에도 지속적인 모니터링과 
                  업데이트로 규제 준수를 유지합니다.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    Post-Market Surveillance
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    Security Patch Management
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    Regulatory Change Monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로세스 섹션 */}
      <section id="process" className="relative py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
              <Server className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">PROCESS</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              체계적인 컨설팅 프로세스
            </h2>
            <p className="text-xl text-slate-400">
              검증된 방법론으로 100% 승인율을 달성합니다
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: '현황 분석',
                desc: '의료기기 특성 및 사이버보안 현황 분석',
                icon: AlertTriangle
              },
              {
                step: '02',
                title: '시스템 구축',
                desc: '실질적인 사이버보안 시스템 설계 및 구현',
                icon: Server
              },
              {
                step: '03',
                title: '문서 작성',
                desc: '국가별 규제에 맞는 기술문서 작성',
                icon: FileCheck
              },
              {
                step: '04',
                title: '심사 대응',
                desc: '인허가 심사 대응 및 승인 완료',
                icon: CheckCircle2
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-slate-900/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/50 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-3xl font-bold text-cyan-400/30 font-mono">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 규제 준수 섹션 */}
      <section id="compliance" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">COMPLIANCE</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              글로벌 규제 준수
            </h2>
            <p className="text-xl text-slate-400">
              3개국 규제 전문성으로 완벽한 인허가 지원
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-400">KR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">한국 MFDS</h3>
                  <p className="text-sm text-slate-400">식품의약품안전처</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium mb-1">사이버보안 가이드라인</div>
                    <div className="text-sm text-slate-400">의료기기 사이버보안 기술문서 작성</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium mb-1">심사 대응</div>
                    <div className="text-sm text-slate-400">식약처 심사 대응 및 보완 자료 준비</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-400">US</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">미국 FDA</h3>
                  <p className="text-sm text-slate-400">Food and Drug Administration</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium mb-1">Premarket Cybersecurity</div>
                    <div className="text-sm text-slate-400">FDA 사이버보안 가이던스 준수</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium mb-1">SBOM & 510(k)/PMA</div>
                    <div className="text-sm text-slate-400">Software Bill of Materials 작성 지원</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-500/20 border border-yellow-500/50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-400">EU</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">유럽 MDR/IVDR</h3>
                  <p className="text-sm text-slate-400">Medical Device Regulation</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium mb-1">MDR Annex I</div>
                    <div className="text-sm text-slate-400">사이버보안 요구사항 대응</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium mb-1">Notified Body 심사</div>
                    <div className="text-sm text-slate-400">공인기관 심사 대응 및 기술문서</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12">
            <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              의료기기 인허가, 이제 걱정하지 마세요
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Special Partners와 함께 글로벌 시장 진출을 준비하세요
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all hover:scale-105">
                무료 상담 신청하기
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all">
                성공 사례 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="relative py-12 px-6 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                Special Partners
              </div>
              <p className="text-sm text-slate-400">의료기기 인허가 맞춤형 컨설팅 전문 파트너</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">개인정보처리방침</a>
              <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">이용약관</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cyan-500/10 text-center text-sm text-slate-500">
            © 2025 Special Partners. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

