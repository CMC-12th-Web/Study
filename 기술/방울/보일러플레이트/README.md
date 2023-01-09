### 보일러플레이트
---

보일러플레이트란 무엇일까요? 인터넷에 검색을 하면 "최소한의 변경으로 여러곳에서 재사용하며, 반복적인 형태를 띄는 코드" 라고 합니다.

반복적인 형태? 재사용? 우리는 이런 단어가 익숙한 사람도 있고 익숙하지 않은 사람도 있을거라 생각합니다.

하지만 웹 개발자인 우리는 보일러플레이트란 단어는 모르지만 실생활에서 많이들 사용하고 있습니다.

```bash
npx create-react-app myproject
```

우리가 프로젝트를 생성할때 사용하는 CRA(create-react-app) 이 바로 대표적은 리액트의 '`보일러플레이트`' 입니다. <br />
<br />

### 왜 필요할까?
___

보일러플레이트가 왜 필요할까요? 아니 애초에 왜 CRA라는 것이 생겨났을까요?

우리가 프로젝트를 하면서 create-react-app을 하면 리액트 프로젝트가 생성되고 그 프로젝트에 우리가 코드를 작성하며 개발을 해왔지만 많은 사람들이 CRA에 대해 궁금해하지 않습니다. 저 또한 그랬습니다.

만약 우리한테 CRA가 없어진다면 어떨까요? 우리의 머리는 터질 겁니다. webpack을 다루는게 익숙하지 않을 뿐더러 프로젝트가 어떻게 구성되어있는지도 모르니까요.

<div style="width: 100%; display: flex; flex-direction: column; align-items: center; gap: 12px">
    <img width="215" alt="스크린샷" src="https://user-images.githubusercontent.com/107019811/211318795-ec3c830c-5d02-482d-9d7a-4c1cbfe52b78.png">
    <span>(**궁금한 사람이 있다면 eject으로 숨겨진 웹팩을 꺼내보세요.**)</span>
</div>
<br />

```bash
npm run eject
```
CRA로 만든 프로젝트에서 eject을 한다면 우리는 프로젝트에 숨겨져있던 웹팩 설정을 볼 수 있습니다. CRA에서는 이렇게 복잡한 웹팩 설정을 전부 사용자에게 hide 시켜주고 사용하기 편하게 폴더구조까지 짜서 제공을 해줍니다. 일종의 템플릿인거죠

우리는 이것을 사용하면 웹팩의 설정을 최소화하며 시간절약도하고 개발에 좀 더 집중할 수 있었습니다. 이렇듯 사용자의 편의를 위해 **보일러플레이트**는 생겨납니다.
<br />
<br />

### 나만의 템플릿을 만들어보자
---

연차가 많이쌓여도, 프로젝트를 많이 진행해도 'CRA 없이 프로젝트를 만들어 본 적 있나요?' 라는 질문에 대답을 못하는 경우가 대부분입니다.

의외로 많은 회사에서는 본인팀만의 **보일러플레이트**를 가지고 있는 경우가 매우 많습니다. 팀만의 **보일러플레이트**는 프로젝트의 설정 시간의 단축은 물론, 초기 세팅과 생산성에서 압도적으로 유용하기 때문입니다. 

그렇기때문에 나만의 **보일러플레이트**의 생성 경험은 아주 좋은 소재가 되는 것이지요. 어렵지 않지만 나에게 쓸만하고, 복잡하지 않지만 반복적으로 사용할 나만의 **보일러플레이트**를 만들어 본다면 어떨까요?

전혀 어렵지 않습니다. 자주 사용하는 라이브러리의 초기 설치, 세팅, 나아가 eslint 설정 그 어떤걸 추가하더라도 **보일러플레이트**가 될 수 있는겁니다.

간단하게 react + typescript 의 **보일러플레이트** 예제를 하나 가져와보았습니다. (길수도 있습니다..)

```bash
# typescript-boilerplate 폴더 생성
mkdir typescript-boilerplate
```
typescript-boilerplate 라는 폴더를 생성해줍니다.

```bash
# 프로젝트 초기화
npm init
```
우리의 프로젝트를 초기화해줍니다.

```bash
# 리액트, 타입스크립트 설치
npm i react react-dom
npm i -D typescript @types/react @types/react-dom
```
프로젝트의 필수인 react와 react-dom, typescript를 설치해줍니다.

```bash
# tsconfig 생성
npx tsc --init

# OUTPUT
Created a new tsconfig.json with: TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```
우리가 사용할 typescript 의 tsconfig를 생성합니다.

tsconfig.json ->
```json
{
  "compilerOptions": {
    "target": "es5",
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```
위에서 생성한 tsconfig.json 의 내용을 수정하였습니다.

여기서  설정한 "jsx": "react-jsx"는 따로 설정한 옵션입니다. 해당 옵션은 import React 없이 JSX를 사용할 수 있습니다.

```bash
npm i -D webpack webpack-cli webpack-dev-server
```
```bash
npm i -D html-webpack-plugin copy-webpack-plugin webpack-bundle-analyzer mini-css-extract-plugin
```
```bash
npm i -D babel-loader ts-loader style-loader css-loader postcss-loader sass-loader sass
```
보기만 해도 복잡한 웹팩 설정을 위해 필요한 패키지를 전부 설치합니다.

설치할게 많죠..? 역시 CRA 최고..

```bash
npm i -D webpack-merge
```
```bash
npm i autoprefixer
```
웹팩 설정을 병합하는 패키지와 CSS 후처리 패키지를 설치해줍니다.

이제 대망의 웹팩을 설정할 일만 남았습니다.

webpack.common.js ->
```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    // build 파일 이름
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: path.resolve(__dirname, "./index.html"),
      favicon: "./static/logo.png",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "static" }],
    }),
    isProduction &&
      new MiniCSSExtractPlugin({
        filename: "[name].css",
      }),
  ].filter(Boolean),
  module: {
    rules: [
      // TSX
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      // SCSS
      {
        test: /\.s?css$/i,
        use: [
          isProduction ? MiniCSSExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        type: "asset/resource",
      },
    ],
  },
};
```
webpack.common.js 의 파일을 이렇게 설정해주었습니다. 많아보이지만 진짜 기본적인 것만 설정한 것입니다..

postcss.config.js ->
```javascript
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [autoprefixer],
};
```
CSS 후처리 패키지 설정을 진행합니다.

webpack.dev.js ->
```javascript
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 8000,
  },
});
```
웹팩 설정 병합...

webpack.prod.js ->
```javascript
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
  mode: "production",
  devServer: {
    static: "./dist",
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 9000,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: "bundleStats.json",
    }),
  ],
});
```

package.json ->
```json
"scripts": {
  "dev": "NODE_ENV=development webpack-dev-server --config webpack.dev.js",
  "start": "NODE_ENV=production webpack-dev-server --config webpack.prod.js",
  "build": "NODE_ENV=production webpack --config webpack.prod.js"
},
```
패키지....

jsconfig.json ->
```json
{
  "compilerOptions": {
    "checkJs": false,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "target": "es2020",
    "module": "es2015",
    "baseUrl": ".",
    "paths": {
      /* 경로 별칭을 사용하는 경우 아래 주석을 해제하여 적절히 사용한다 */
      // "@components/*": ["./src/components/*"]
    }
  },
  "exclude": [
    "dist",
    "node_modules",
    "build",
    ".vscode",
    ".nuxt",
    "coverage",
    "jspm_packages",
    "tmp",
    "temp",
    "bower_components",
    ".npm",
    ".yarn"
  ],
  "typeAcquisition": {
    "enable": true
  }
}
```

이렇게 하면 이제 CRA를 사용하지 않고 우리는 하나의 리액트 **보일러플레이트**를 만든것입니다..

설정할것도 많고, 웹팩 설정도 복잡하고.. 매번 프로젝트를 만들때마다 이렇게 할 수 없다보니 CRA라는 아주 좋은 **보일러플레이트**를 만들어 둔 것입니다.
<br />
<br />

### 보일러플레이트로 협업하기
---
이렇게 만든 보일러플레이트로 프로젝트를 세팅, 설정해준다면 협업할때 아주 유용합니다.

저도 이번 CMC를 통해 개발자와 코드의 스타일, 폴더 구조, eslint 등을 공유하며 완성도 있는 프로젝트를 만들어보고 싶습니다!