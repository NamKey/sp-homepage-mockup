import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages 리포지토리 프로젝트 배포 설정
  // URL: https://username.github.io/sp-homepage-mockup/
  basePath: '/sp-homepage-mockup',
  assetPrefix: '/sp-homepage-mockup/',
  
  images: {
    unoptimized: true, // 정적 export에서는 이미지 최적화 비활성화 필요
  },
}

export default nextConfig


