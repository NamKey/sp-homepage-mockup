import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages에서 리포지토리 이름이 경로에 포함되는 경우
  // basePath와 assetPrefix를 설정해야 합니다
  // 예: https://username.github.io/repo-name/
  // basePath: '/sp-homepage-mockup',
  // assetPrefix: '/sp-homepage-mockup/',
  
  images: {
    unoptimized: true, // 정적 export에서는 이미지 최적화 비활성화 필요
  },
}

export default nextConfig


