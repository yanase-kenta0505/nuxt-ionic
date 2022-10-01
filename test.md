## 注意ポイント
---
- ios、Androidアプリにビルドする場合、「npx cap add ios」などでcapacitorプロジェクトを生成後、「npx nuxi generagte」でdistフォルダーを生成。
その後「npx cap sync」でcapacitorプロジェクトを更新する必要がある

- global is not definedというエラーが出る。  
理由：webpackの使用を想定した一部のライブラリではグローバルオブジェクトとしてglobalが使用されていますが、viteでは定義していないので、別途window.globalを定義する必要があるそうです。  
参考資料  
https://qiita.com/tatmius/items/f28369bb8d10324f6b7b  
https://github.com/nuxt/framework/issues/2874  
https://github.com/aws-amplify/amplify-js/issues/9671 ←これが最有力

