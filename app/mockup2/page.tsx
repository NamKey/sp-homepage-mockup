import Link from 'next/link'
import { ArrowLeft, Zap, Rocket, Sparkles, Star, Heart, Shield } from 'lucide-react'

export default function Mockup2() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* 네비게이션 */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">돌아가기</span>
          </Link>
          <div className="flex gap-8">
            <a href="#hero" className="text-sm text-slate-400 hover:text-white transition-colors">홈</a>
            <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">특징</a>
            <a href="#mission" className="text-sm text-slate-400 hover:text-white transition-colors">미션</a>
            <a href="#cta" className="text-sm text-slate-400 hover:text-white transition-colors">시작하기</a>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* 배경 그라데이션 효과 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Special Partners</span>
          </div>
          
          <h1 className="text-7xl font-extrabold mb-8 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              의료기기 인허가,
            </span>
            <br />
            <span className="text-white">
              우리가 책임집니다
            </span>
          </h1>
          
          <p className="text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            글로벌 규제 전문가와 함께하는<br />
            맞춤형 사이버보안 시스템 구축 컨설팅
          </p>
          
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10">지금 시작하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 rounded-xl font-semibold hover:bg-blue-500/10 transition-all">
              더 알아보기
            </button>
          </div>

          {/* 떠다니는 요소들 */}
          <div className="absolute top-40 left-10 animate-float">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl rotate-12 opacity-20"></div>
          </div>
          <div className="absolute bottom-40 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </section>

      {/* 특징 카드 섹션 */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                왜 우리를 선택해야 할까요?
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              차별화된 가치로 고객의 성공을 보장합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">실질적 구축</h3>
                <p className="text-slate-400 leading-relaxed">
                  문서 작성을 넘어 실제 작동하는 
                  사이버보안 시스템을 구축합니다.
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">글로벌 전문성</h3>
                <p className="text-slate-400 leading-relaxed">
                  한국, 미국, 유럽 규제 트렌드를 
                  실시간으로 반영합니다.
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">100% 승인율</h3>
                <p className="text-slate-400 leading-relaxed">
                  체계적인 준비와 검증된 프로세스로 
                  완벽한 인허가 승인을 보장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 성과 섹션 */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-blue-100">인허가 승인</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3개국</div>
                <div className="text-blue-100">한국·미국·유럽</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-100">의료기기 제조사</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-blue-100">심사 통과율</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 미션 섹션 */}
      <section id="mission" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                우리의 <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">미션</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Special Partners는 의료기기 제조사가 글로벌 시장에서 
                성공적으로 인허가를 획득할 수 있도록 돕습니다.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                단순한 가이드라인 문서가 아닌, 실질적으로 작동하는 
                사이버보안 시스템을 구축하여 규제를 완벽하게 준수합니다.
              </p>
                <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">실질적 구축</h4>
                    <p className="text-slate-400">작동하는 시스템으로 규제 요구사항을 충족합니다</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">최신 트렌드</h4>
                    <p className="text-slate-400">글로벌 규제 변화를 실시간으로 반영합니다</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">맞춤형 전략</h4>
                    <p className="text-slate-400">의료기기 특성에 맞는 사이버보안 솔루션을 제공합니다</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-12">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold">혁신성</span>
                      <span className="text-blue-400 font-bold">95%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold">전문성</span>
                      <span className="text-cyan-400 font-bold">98%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold">신뢰도</span>
                      <span className="text-purple-400 font-bold">99%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold">고객 만족</span>
                      <span className="text-teal-400 font-bold">97%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-full" style={{ width: '97%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section id="cta" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-600/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              글로벌 시장 진출의 시작
            </span>
          </h2>
          <p className="text-2xl text-slate-300 mb-12 leading-relaxed">
            Special Partners와 함께라면<br />
            의료기기 인허가가 쉬워집니다
          </p>
          <div className="flex gap-4 justify-center">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10">무료 상담 신청</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="px-10 py-5 border-2 border-blue-500 rounded-xl font-bold text-lg hover:bg-blue-500/10 transition-all">
              포트폴리오 보기
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <div className="mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Special Partners
            </span>
          </div>
          <p className="text-sm">© 2025 Special Partners. 모든 권리 보유.</p>
        </div>
      </footer>
    </div>
  )
}


