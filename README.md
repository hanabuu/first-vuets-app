# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## 覚書

* viteのテンプレートは``vue-ts``
* vue router、vue2とは結構変わる
* ~~vite と express の関係も気にする必要あり~~
* vuetifyを入れてみた

## 参考

* [Vite + Vue3 + TypeScriptの開発体験](https://zenn.dev/hctaw_srp/articles/5f2e2a6470d2ec)
* [Vue3 チュートリアル 5 VueRouterの導入](https://qiita.com/TakahiRoyte/items/231aa3ac3aacbe25ebeb)
* [Viteを使ってExpress.jsアプリを作る](https://scrapbox.io/dojineko/Vite%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6Express.js%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E4%BD%9C%E3%82%8B)
* [TypeScript+Express+Viteを用いたモダン(？)なWeb APIアプリのボイラーテンプレートを作ってみました。](https://www.neko3cs.net/entry/express-ts-with-vite-template)
* [Vue3でVuetifyをインストールしよう](https://asameshicode.com/vue3-vuetify/)
* [Vuetifyについて学んでみた🧑‍🎨](https://zenn.dev/joo_hashi/articles/50c77b03d195de)