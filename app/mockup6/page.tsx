'use client'

import Link from 'next/link'
import { Home, ArrowRight, CheckCircle2, FileText, Shield, Award, Users, TrendingUp } from 'lucide-react'

export default function Mockup6() {
  // 컨설팅 프로세스 타임라인
  const consultingProcess = [
    {
      step: '01',
      title: '초기 상담 및 분석',
      duration: '1-2주',
      description: '귀사의 의료기기 특성과 목표 시장을 분석하여 최적의 인허가 전략을 수립합니다',
      tasks: [
        '제품 사양 및 기술 문서 검토',
        '목표 시장 규제 요구사항 분석',
        '프로젝트 로드맵 작성',
        '리스크 평가 및 대응 전략 수립'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: FileText
    },
    {
      step: '02',
      title: '사이버보안 시스템 구축',
      duration: '4-8주',
      description: '최신 규제 트렌드를 반영한 실질적인 사이버보안 시스템을 구축합니다',
      tasks: [
        '위협 모델링 (Threat Modeling)',
        '보안 아키텍처 설계',
        'SBOM 구성 및 취약점 분석',
        '보안 테스트 및 검증'
      ],
      color: 'from-purple-500 to-pink-500',
      icon: Shield
    },
    {
      step: '03',
      title: '인허가 문서 작성',
      duration: '3-6주',
      description: '각국 규제기관의 최신 가이드라인에 맞춘 완벽한 문서를 작성합니다',
      tasks: [
        'FDA Premarket Cybersecurity 문서',
        'MFDS 의료기기 사이버보안 가이드',
        'MDR/IVDR Technical Documentation',
        '리스크 관리 보고서'
      ],
      color: 'from-emerald-500 to-teal-500',
      icon: Award
    },
    {
      step: '04',
      title: '심사 대응 및 승인',
      duration: '2-4주',
      description: '규제기관 심사 과정에서 발생하는 모든 질의에 신속하고 정확하게 대응합니다',
      tasks: [
        '심사 질의 사항 분석',
        '추가 자료 준비 및 제출',
        '심사관 미팅 지원',
        '최종 승인 획득'
      ],
      color: 'from-orange-500 to-red-500',
      icon: TrendingUp
    }
  ]

  const successStories = [
    { metric: '156+', label: '성공적인 인허가' },
    { metric: '100%', label: '심사 통과율' },
    { metric: '4.2개월', label: '평균 승인 기간' },
    { metric: '58개사', label: '협력 제조사' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Special Partners
              </h1>
              <p className="text-sm text-slate-600">컨설팅 프로세스 여정</p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg hover:scale-105"
            >
              <Home size={18} />
              <span>홈으로</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
          <CheckCircle2 size={16} />
          <span>검증된 4단계 컨설팅 프로세스</span>
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
          귀사의 의료기기를<br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            글로벌 시장으로
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          한국, 미국, 유럽의 최신 규제 트렌드를 완벽히 반영한<br />
          체계적인 인허가 컨설팅 프로세스
        </p>
        
        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {story.metric}
              </div>
              <div className="text-sm text-slate-600">{story.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Process */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            성공적인 인허가를 위한 여정
          </h2>
          <p className="text-slate-600">
            Special Partners만의 체계적인 4단계 컨설팅 프로세스를 경험하세요
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 to-orange-500 hidden md:block"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {consultingProcess.map((process, index) => {
              const Icon = process.icon
              return (
                <div key={index} className="relative pl-0 md:pl-24">
                  {/* Step Number Badge */}
                  <div className="absolute left-0 md:left-4 -translate-x-0 md:-translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-white flex items-center justify-center mb-4 md:mb-0">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ml-20 md:ml-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex items-center gap-4 mb-3 md:mb-0">
                        <span className={`text-5xl font-bold bg-gradient-to-br ${process.color} bg-clip-text text-transparent`}>
                          {process.step}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            {process.title}
                          </h3>
                          <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                            예상 기간: {process.duration}
                          </p>
                        </div>
                      </div>
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${process.color} text-white text-sm font-medium whitespace-nowrap`}>
                        Step {process.step}
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 text-lg">
                      {process.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-3">
                      {process.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-start gap-3 group">
                          <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <CheckCircle2 className="text-white" size={12} />
                          </div>
                          <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                            {task}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Between Steps */}
                  {index < consultingProcess.length - 1 && (
                    <div className="hidden md:flex justify-center my-8">
                      <ArrowRight className="text-slate-300" size={32} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>
          <div className="relative z-10">
            <Users className="mx-auto mb-6 text-blue-400" size={48} />
            <h2 className="text-3xl font-bold mb-4">
              귀사의 성공적인 글로벌 진출을 함께하겠습니다
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              검증된 프로세스와 풍부한 경험으로<br />
              의료기기 인허가의 모든 단계를 완벽하게 지원합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all hover:shadow-lg hover:scale-105">
                무료 컨설팅 신청
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all">
                프로세스 상세보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Stats */}
      <section className="max-w-5xl mx-auto px-6 py-8 mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              지금까지 Special Partners와 함께한 기업들
            </h3>
            <p className="text-sm text-slate-600">
              글로벌 시장 진출에 성공한 의료기기 제조사들의 이야기
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['MFDS 승인 52건', 'FDA 승인 67건', 'MDR/IVDR 승인 37건', '평균 기간 4.2개월'].map((stat, index) => (
              <div key={index} className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-200">
                <span className="text-sm font-semibold text-slate-700">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
