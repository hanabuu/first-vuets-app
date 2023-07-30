import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'  // npm install path

// https://vitejs.dev/config/
export default defineConfig({
  // aliasの作成 各コンポーネントで別ファイルを指定するときは以下でよくなる
  // 例)import MyButton from '@/components/basics/MyButton.vue'
  // https://qiita.com/TakahiRoyte/items/231aa3ac3aacbe25ebeb
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue()
  ],
})
