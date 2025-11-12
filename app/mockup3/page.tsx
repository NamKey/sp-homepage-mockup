import Link from 'next/link'
import { ArrowLeft, Building2, TrendingUp, Users, Award, Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

export default function Mockup3() {
  return (
    <div className="min-h-screen bg-white">
      {/* 네비게이션 */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">돌아가기</span>
              </Link>
              <div className="hidden md:flex gap-8">
                <a href="#about" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">회사소개</a>
                <a href="#business" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">사업분야</a>
                <a href="#leadership" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">리더십</a>
                <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">문의하기</a>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              상담 신청
            </button>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
                EST. 2015
              </div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                의료기기 인허가<br />
                맞춤형 컨설팅 전문 파트너
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                한국, 미국, 유럽의 최신 사이버보안 규제를 완벽히 파악하여 
                실질적인 시스템 구축부터 인허가 승인까지 책임집니다.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  회사 소개서 다운로드
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                  문의하기
                </button>
              </div>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-blue-100">인허가 승인</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">3개국</div>
                  <div className="text-blue-100">한국·미국·유럽</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">의료기기 제조사</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">심사 통과율</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 회사 소개 섹션 */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              ABOUT US
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Special Partners를 소개합니다
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              의료기기 사이버보안 규제 및 인허가 전문 컨설팅 기업으로, 
              한국(MFDS), 미국(FDA), 유럽(MDR) 등 글로벌 규제 전문성을 보유하고 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                글로벌 규제 전문성
              </h3>
              <p className="text-slate-600 leading-relaxed">
                한국, 미국, 유럽의 최신 규제 트렌드를 
                실시간으로 파악하고 반영합니다.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                실질적 시스템 구축
              </h3>
              <p className="text-slate-600 leading-relaxed">
                단순 문서가 아닌 실제 작동하는 
                사이버보안 시스템을 구축합니다.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                100% 승인율
              </h3>
              <p className="text-slate-600 leading-relaxed">
                체계적인 준비로 인허가 심사를 
                완벽하게 통과합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 사업 분야 섹션 */}
      <section id="business" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              BUSINESS AREAS
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              주요 사업 분야
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              다양한 분야에서 전문적인 컨설팅과 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">01</span>
                </div>
                <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  사이버보안 시스템 구축
                </h3>
                <p className="text-slate-600">
                  의료기기 특성에 맞는 실질적인 사이버보안 시스템을 구축합니다
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>위협 모델링 및 리스크 분석</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>보안 아키텍처 설계 및 구현</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>취약점 평가 및 침투 테스트</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">02</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  한국 인허가 (MFDS)
                </h3>
                <p className="text-slate-600">
                  식약처 의료기기 사이버보안 가이드라인을 완벽하게 준수합니다
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>사이버보안 기술문서 작성</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>심사 대응 및 보완 자료 준비</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>사후 관리 및 변경 신고</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">03</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  미국 인허가 (FDA)
                </h3>
                <p className="text-slate-600">
                  FDA의 사이버보안 규제 요구사항을 완벽히 대응합니다
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Premarket Cybersecurity Guidance 준수</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>SBOM (Software Bill of Materials) 작성</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>510(k), PMA 문서 지원</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">04</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  유럽 인허가 (MDR/IVDR)
                </h3>
                <p className="text-slate-600">
                  유럽 의료기기 규정의 사이버보안 요구사항을 충족합니다
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>MDR Annex I 사이버보안 요구사항 대응</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>기술문서 및 임상평가 보고서</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>공인기관 심사 대응</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>

      {/* 리더십 섹션 */}
      <section id="leadership" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              LEADERSHIP
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              경영진
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              풍부한 경험과 전문성을 갖춘 리더들이 Special Partners를 이끌어갑니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">김철수</h3>
              <p className="text-blue-600 font-medium mb-3">대표이사 / CEO</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                20년 이상의 컨설팅 경력을 보유한 전략 전문가로, 
                다수의 글로벌 프로젝트를 성공적으로 이끌었습니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">이영희</h3>
              <p className="text-blue-600 font-medium mb-3">부사장 / COO</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                조직 개발 및 인사 전략 분야의 권위자로, 
                다양한 산업의 조직 혁신을 주도해왔습니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">박민수</h3>
              <p className="text-blue-600 font-medium mb-3">이사 / CTO</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                15년 이상의 IT 경력을 바탕으로 
                기업의 디지털 전환을 성공적으로 지원하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                문의하기
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                의료기기 인허가가 고민이신가요?<br />
                언제든지 문의해 주시면 맞춤형 솔루션을 제안해드립니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">전화</div>
                    <div className="font-semibold">02-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">이메일</div>
                    <div className="font-semibold">contact@specialpartners.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">주소</div>
                    <div className="font-semibold">서울특별시 강남구 테헤란로 123</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 text-slate-900">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    이름
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    이메일
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    문의 내용
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="문의하실 내용을 입력해주세요"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  문의하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-8 px-6 bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-xl font-bold text-white">Special Partners</span>
          </div>
          <p className="text-sm">© 2025 Special Partners. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


