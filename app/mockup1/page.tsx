import Link from 'next/link'
import { ArrowLeft, Building2, Users, Target, TrendingUp, Award, Globe } from 'lucide-react'

export default function Mockup1() {
  return (
    <div className="min-h-screen bg-white">
      {/* 네비게이션 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">돌아가기</span>
          </Link>
          <div className="flex gap-8">
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">소개</a>
            <a href="#services" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">서비스</a>
            <a href="#values" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">가치</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">연락처</a>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-slate-100 rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-medium text-slate-600">Special Partners</span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight animate-slide-up">
              의료기기 인허가<br />
              맞춤형 컨설팅 전문 파트너
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              한국, 미국, 유럽의 최신 사이버보안 규제 트렌드를 반영한<br />
              실질적인 의료기기 사이버보안 시스템 구축 컨설팅
            </p>
            <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                시작하기
              </button>
              <button className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">
                더 알아보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">100+</div>
              <div className="text-slate-600">인허가 승인</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">3개국</div>
              <div className="text-slate-600">한국·미국·유럽</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-600">의료기기 제조사</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-slate-600">심사 통과율</div>
            </div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                우리는 누구인가요?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Special Partners는 의료기기 사이버보안 규제 및 인허가 전문 컨설팅 기업입니다. 
                한국(MFDS), 미국(FDA), 유럽(MDR) 등 주요 국가의 최신 사이버보안 심사 트렌드를 
                실시간으로 파악하고 있으며, 이를 바탕으로 맞춤형 솔루션을 제공합니다.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                단순한 가이드라인 기반 문서 컨설팅이 아닌, 실질적인 사이버보안 시스템 구축부터 
                인허가 승인까지 전 과정을 책임지는 진정한 파트너입니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-8 rounded-2xl">
                <Building2 className="w-10 h-10 text-slate-900 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">글로벌 규제 전문성</h3>
                <p className="text-sm text-slate-600">
                  한국, 미국, 유럽의 최신 규제 트렌드 완벽 파악
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <Users className="w-10 h-10 text-slate-900 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">실질적 구축</h3>
                <p className="text-sm text-slate-600">
                  문서 작성부터 시스템 구축까지 원스톱 지원
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <Target className="w-10 h-10 text-slate-900 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">100% 승인율</h3>
                <p className="text-sm text-slate-600">
                  체계적인 준비로 인허가 심사 완벽 통과
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl">
                <TrendingUp className="w-10 h-10 text-slate-900 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">맞춤형 컨설팅</h3>
                <p className="text-sm text-slate-600">
                  의료기기 특성에 맞는 사이버보안 전략 수립
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              주요 서비스
            </h2>
            <p className="text-lg text-slate-600">
              고객의 성공을 위한 다양한 솔루션을 제공합니다
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                사이버보안 시스템 구축
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                의료기기 특성에 맞는 실질적인 사이버보안 시스템을 
                설계하고 구축하여 규제 요구사항을 충족합니다.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  위협 모델링 및 리스크 분석
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  보안 아키텍처 설계 및 구현
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  취약점 평가 및 침투 테스트
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                글로벌 인허가 컨설팅
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                한국(MFDS), 미국(FDA), 유럽(MDR/IVDR) 등 
                주요 국가의 인허가 심사를 완벽하게 준비합니다.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  국가별 규제 요구사항 분석
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  인허가 문서 작성 및 검토
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  심사 대응 및 사후 관리
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                규제 준수 교육
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                조직 내 사이버보안 인식을 높이고 
                지속적인 규제 준수 체계를 구축합니다.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  임직원 사이버보안 교육
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  보안 정책 및 절차 수립
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  사고 대응 체계 구축
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 가치 섹션 */}
      <section id="values" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              우리의 핵심 가치
            </h2>
            <p className="text-lg text-slate-600">
              Special Partners를 움직이는 원동력입니다
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                실질적 구축
              </h3>
              <p className="text-slate-600 leading-relaxed">
                단순 문서 작성을 넘어, 실제 작동하는 
                사이버보안 시스템을 구축합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                최신 트렌드
              </h3>
              <p className="text-slate-600 leading-relaxed">
                글로벌 규제 변화를 실시간으로 파악하여 
                최신 심사 트렌드를 반영합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                맞춤형 솔루션
              </h3>
              <p className="text-slate-600 leading-relaxed">
                의료기기의 특성과 위험도에 따른 
                맞춤형 사이버보안 전략을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            의료기기 인허가, 이제 걱정 없습니다
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Special Partners와 함께 글로벌 시장 진출을 준비하세요
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium">
              상담 신청하기
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium">
              자료 다운로드
            </button>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-400">
            <p>© 2025 Special Partners. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}


