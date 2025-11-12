import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Special Partners
          </h1>
          <p className="text-xl text-slate-600">
            의료기기 인허가 맞춤형 컨설팅 전문 파트너
          </p>
          <p className="text-base text-slate-500 mt-2">
            회사 소개 페이지 목업 모음
          </p>
        </div>

               <div className="grid md:grid-cols-3 gap-6">
          <Link 
            href="/mockup1" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform"></div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              목업 #1
            </h2>
            <p className="text-slate-600 mb-4">
              모던 미니멀 디자인
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li>• 깔끔한 레이아웃</li>
              <li>• 부드러운 애니메이션</li>
              <li>• 미니멀 색상</li>
            </ul>
          </Link>

          <Link 
            href="/mockup2" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform"></div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              목업 #2
            </h2>
            <p className="text-slate-600 mb-4">
              다이나믹 그라데이션
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li>• 블루-시안-퍼플 톤</li>
              <li>• 대담한 타이포그래피</li>
              <li>• 현대적 레이아웃</li>
            </ul>
          </Link>

          <Link 
            href="/mockup3" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-600 rounded-xl group-hover:scale-110 transition-transform"></div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              목업 #3
            </h2>
            <p className="text-slate-600 mb-4">
              프로페셔널 기업
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li>• 전문적인 구조</li>
              <li>• 명확한 정보 전달</li>
              <li>• 신뢰감 있는 디자인</li>
            </ul>
          </Link>

          <Link 
            href="/mockup4" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl group-hover:scale-110 transition-transform"></div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              목업 #4
            </h2>
            <p className="text-slate-600 mb-4">
              테크 전문가
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li>• 기술 중심 디자인</li>
              <li>• 사이버보안 특화</li>
              <li>• 데이터 시각화</li>
            </ul>
          </Link>

          <Link 
            href="/mockup5" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform"></div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              목업 #5
            </h2>
            <p className="text-slate-600 mb-4">
              글래스모피즘 3D
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li>• 반투명 유리 효과</li>
              <li>• 3D 카드 디자인</li>
              <li>• 모던 프리미엄</li>
            </ul>
          </Link>

                 <Link
                   href="/mockup6"
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                 >
                   <div className="mb-4">
                     <div className="w-12 h-12 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900 rounded-xl group-hover:scale-110 transition-transform"></div>
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-3">
                     목업 #6
                   </h2>
                   <p className="text-slate-600 mb-4">
                     컨설팅 여정
                   </p>
                   <ul className="text-sm text-slate-500 space-y-2">
                     <li>• 프로세스 타임라인</li>
                     <li>• 단계별 시각화</li>
                     <li>• 스토리텔링</li>
                   </ul>
                 </Link>

                 <Link
                   href="/mockup7"
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                 >
                   <div className="mb-4">
                     <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform"></div>
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-3">
                     목업 #7
                   </h2>
                   <p className="text-slate-600 mb-4">
                     스플릿 스크린
                   </p>
                   <ul className="text-sm text-slate-500 space-y-2">
                     <li>• 좌우 분할 레이아웃</li>
                     <li>• 비주얼 중심</li>
                     <li>• 모던 UI</li>
                   </ul>
                 </Link>

                 <Link
                   href="/mockup8"
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                 >
                   <div className="mb-4">
                     <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-xl group-hover:scale-110 transition-transform"></div>
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-3">
                     목업 #8
                   </h2>
                   <p className="text-slate-600 mb-4">
                     벤토 그리드
                   </p>
                   <ul className="text-sm text-slate-500 space-y-2">
                     <li>• 카드 기반 레이아웃</li>
                     <li>• 다양한 크기 조합</li>
                     <li>• 인터랙티브</li>
                   </ul>
                 </Link>

                 <Link
                   href="/mockup9"
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                 >
                   <div className="mb-4">
                     <div className="w-12 h-12 bg-gradient-to-br from-slate-900 via-slate-700 to-blue-600 rounded-xl group-hover:scale-110 transition-transform"></div>
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-3">
                     목업 #9
                   </h2>
                   <p className="text-slate-600 mb-4">
                     풀스크린 스토리
                   </p>
                   <ul className="text-sm text-slate-500 space-y-2">
                     <li>• 전체 화면 섹션</li>
                     <li>• 다크 테마</li>
                     <li>• 몰입형 경험</li>
                   </ul>
                 </Link>

                 <Link
                   href="/mockup10"
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                 >
                   <div className="mb-4">
                     <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 rounded-xl group-hover:scale-110 transition-transform"></div>
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-3">
                     목업 #10
                   </h2>
                   <p className="text-slate-600 mb-4">
                     브랜드 중심 히어로
                   </p>
                   <ul className="text-sm text-slate-500 space-y-2">
                     <li>• 로고 중심 레이아웃</li>
                     <li>• 브랜드 아이덴티티</li>
                     <li>• 신뢰감 강조</li>
                   </ul>
                 </Link>

                 <Link
                   href="/mockup11"
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                 >
                   <div className="mb-4">
                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-500 rounded-xl group-hover:scale-110 transition-transform"></div>
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-3">
                     목업 #11
                   </h2>
                   <p className="text-slate-600 mb-4">
                     브랜드 아이덴티티
                   </p>
                   <ul className="text-sm text-slate-500 space-y-2">
                     <li>• SP 로고마크</li>
                     <li>• 그라데이션 배경</li>
                     <li>• 통계 카드</li>
                   </ul>
                 </Link>

                 <Link
                   href="/mockup12"
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                 >
                   <div className="mb-4">
                     <div className="w-12 h-12 bg-gradient-to-br from-slate-950 via-blue-600 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform"></div>
                   </div>
                   <h2 className="text-2xl font-bold text-slate-900 mb-3">
                     목업 #12
                   </h2>
                   <p className="text-slate-600 mb-4">
                     미니멀 브랜드
                   </p>
                   <ul className="text-sm text-slate-500 space-y-2">
                     <li>• 다크 모드</li>
                     <li>• 초미니멀 디자인</li>
                     <li>• 프리미엄 감성</li>
                   </ul>
                 </Link>
        </div>

        <div className="text-center mt-12 text-slate-500">
          <p className="text-sm">
            각 카드를 클릭하여 목업을 확인하세요
          </p>
        </div>
      </div>
    </div>
  )
}


