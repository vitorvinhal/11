# Instalação Pessoal do App Mobile (11)

Sistema é de **uso pessoal**. Não precisa de loja nem conta de desenvolvedor paga se
você usar o aparelho do próprio dono.

## Android (fácil)

1. No GitHub: **Actions → "Android Build" → Run workflow** (ou está automático em push na main).
2. Baixe o artifact **`11-mobile-release`** → `app-release.apk`.
3. Instale no celular. Pela primeira vez: Settings → Permitir "install unknown apps" para
   o seu navegador/gerenciador.
4. Observação: `site= https://11-app-sage.vercel.app` (produção) já é o default do APK.

## iOS (sem Mac, sem conta paga)

O workflow **"iOS Build"** (GitHub Actions, runner macOS) gera o IPA.

O iOS **exige assinatura** para instalar (regra da Apple). Como o uso é pessoal, você
assina com sua própria Apple ID **gratuita**, direto do Windows:

1. **No seu Windows** baixe o **Sideloadly** (ou AltStore): https://sideloadly.io
2. Baixe o artifact **`11-ios-unsigned-ipa`** do Actions.
3. Conecte o iPhone no PC (Windows), abra o Sideloadly, selecione o `.ipa` e entre com a
   sua **Apple ID** (dados vão direto pra Apple; recomendo criar uma apple ID de uso apenas
   para isso se preferir).
4. Instala/copy assinando como **desenvolvedor pessoal**. Revalidar a cada **7 dias**
   (Sideloadly faz no ar/na próxima conexão; AltStore revalida no mesmo Wi-Fi).

Limite alternativo (se tiver Mac emprestado/outro): Xcode → account free → run no seu
aparelho (mesmo esquema de 7 dias).

## Notas

- O app é uma casca (WebView) apontando para a web (Vercel). Instalar a versão nova =
  baixar o APK/IPA novos quando quiser atualizar; o conteúdo/versão do sistema vem da web.
- Bump de versão do app é independente do `version.json` da web.
