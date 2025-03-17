import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    port: 3333, // 원하는 포트 번호 설정 (디폴트는 5173)
    open: true, // 서버 실행 시 브라우저 자동 열기 (옵션)
    strictPort: true // 포트가 사용 중이면 에러 발생 (기본값: false)
  },
})
