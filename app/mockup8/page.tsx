'use client'

import Link from 'next/link'
import { Home, Shield, Globe, Award, FileCheck, Users, TrendingUp, Zap, CheckCircle2, ArrowRight, Target, Clock } from 'lucide-react'

export default function Mockup8() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-900">Special Partners</h1>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm"
            >
              <Home size={16} />
              <span>홈으로</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            <span>의료기기 인허가 맞춤형 컨설팅</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            글로벌 시장을 향한<br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              확실한 파트너
            </span>
          </h1>
          <p className="text-xl text-slate-600">
            한국·미국·유럽의 최신 사이버보안 규제 트렌드를 반영한<br />
            실질적인 시스템 구축 컨설팅
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large Card 1 - Stats */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  입증된 성과
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                  100% 심사 통과율을 자랑하는<br />
                  Special Partners의 실적
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">156+</div>
                  <div className="text-blue-100">인허가 승인</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">통과율</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">3개국</div>
                  <div className="text-blue-100">지원 국가</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">58개</div>
                  <div className="text-blue-100">협력사</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Korea */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">한국 MFDS</h3>
            <p className="text-slate-600 text-sm mb-4">식약처 인허가 전문</p>
            <div className="space-y-2">
              {['위험 관리', '기술문서', '심사 대응'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 - USA */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">미국 FDA</h3>
            <p className="text-slate-600 text-sm mb-4">510(k) 제출 지원</p>
            <div className="space-y-2">
              {['SBOM 작성', 'Threat Model', 'Premarket'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 - Europe */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">유럽 MDR</h3>
            <p className="text-slate-600 text-sm mb-4">CE 마킹 컨설팅</p>
            <div className="space-y-2">
              {['Technical Doc', 'Risk Analysis', 'CE Marking'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5 - Process */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6">컨설팅 프로세스</h3>
            <div className="space-y-4">
              {[
                { step: '01', title: '초기 분석', duration: '1-2주' },
                { step: '02', title: '시스템 구축', duration: '4-8주' },
                { step: '03', title: '문서 작성', duration: '3-6주' },
                { step: '04', title: '승인 획득', duration: '2-4주' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-cyan-400">{item.step}</div>
                  <div className="flex-1">
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-slate-300">{item.duration}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 6 - Cybersecurity */}
          <div className="lg:row-span-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-xl">
            <Shield className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              사이버보안<br />시스템 구축
            </h3>
            <p className="text-purple-100 mb-6">
              실질적인 보안 아키텍처 설계부터 구현, 테스트까지
            </p>
            <div className="space-y-3">
              {[
                '위협 모델링',
                '보안 아키텍처',
                'SBOM 구성',
                '취약점 분석',
                '침투 테스트',
                '보안 검증'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 7 - Why Us */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all">
            <Target className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              왜 Special Partners인가?
            </h3>
            <p className="text-slate-600 text-sm">
              최신 규제 트렌드를 완벽히 파악한 전문가 그룹
            </p>
          </div>

          {/* Card 8 - Contact */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer">
            <Users className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">무료 상담</h3>
            <p className="text-emerald-100 text-sm mb-4">
              전문가와 직접 상담하세요
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>상담 신청하기</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Card 9 - Features */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">핵심 강점</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: FileCheck, title: '실질적 구축', desc: '문서가 아닌 시스템' },
                { icon: TrendingUp, title: '최신 트렌드', desc: '국가별 규제 파악' },
                { icon: Clock, title: '빠른 승인', desc: '평균 4.2개월' }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            글로벌 진출의 첫 걸음을 함께하세요
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            의료기기 인허가 맞춤형 컨설팅 전문 파트너
          </p>
          <button className="px-10 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all hover:shadow-xl hover:scale-105">
            지금 시작하기
          </button>
        </div>
      </section>
    </div>
  )
}

