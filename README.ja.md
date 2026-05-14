# Lodash

[Lodash](https://lodash.com/) ライブラリを [UMD](https://github.com/umdjs/umd) モジュールとしてエクスポートしたものです。

Lodashは、配列、数値、オブジェクト、文字列などの操作に伴う面倒な作業を省き、JavaScriptをより簡単に扱えるようにします。Lodashのモジュール化されたメソッドは、以下の用途に最適です:

*   配列、オブジェクト、文字列の反復処理
*   値の操作とテスト
*   合成関数の作成

## インストール

### ブラウザ

HTMLに直接スクリプトを読み込みます:

```html
<script src="lodash.js"></script>
```

CDNを利用するか、特定のビルドをダウンロードすることもできます:

*   **CDN:** [jsDelivr](https://www.jsdelivr.com/projects/lodash) [
![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/lodash/badge)
](https://www.jsdelivr.com/package/npm/lodash)
*   **コアビルド:** [core.js](https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/core.js) (~4 kB gzipped)
*   **フルビルド:** [lodash.js](https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/lodash.js) (~24 kB gzipped)

[ビルドの違い](https://github.com/lodash/lodash/wiki/build-differences)を確認し、用途に合ったものを選択してください。

### Node.js

npmを使用してLodashをインストールします:

```shell
npm install lodash
```

その後、プロジェクトに読み込みます:

```js
// フルビルドを読み込みます。
const _ = require('lodash');

// フットプリントを小さくするためにコアビルドを読み込みます。
const _ = require('lodash/core');

// イミュータブル、自動カリー化、イテラティーファーストのメソッドを提供するFPビルドを読み込みます。
const fp = require('lodash/fp');

// メソッドのカテゴリを読み込みます。
const array = require('lodash/array');
const object = require('lodash/fp/object');

// browserify/rollup/webpackのバンドルサイズを小さくするために、個別のメソッドをチェリーピックします。
const at = require('lodash/at');
const curryN = require('lodash/fp/curryN');
```

ネイティブのESモジュールサポートについては、[lodash-es](https://www.npmjs.com/package/lodash-es)をご覧ください。

## モジュール形式

Lodashは、用途に合わせて[様々なビルド](https://lodash.com/custom-builds)やモジュール形式で利用できます:

*   [lodash](https://www.npmjs.com/package/lodash) および [メソッドごとのパッケージ](https://www.npmjs.com/search?q=keywords:lodash-modularized)
*   [lodash-es](https://www.npmjs.com/package/lodash-es)、[babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash)、および [lodash-webpack-plugin](https://www.npmjs.com/package/lodash-webpack-plugin)
*   [lodash/fp](https://github.com/lodash/lodash/tree/npm/fp)
*   [lodash-amd](https://www.npmjs.com/package/lodash-amd)

## ドキュメント

メソッドの網羅的な一覧と例については、[公式ドキュメント](https://lodash.com/docs)をご覧ください。

## ライセンス

[MIT license](LICENSE) のもとでリリースされています。
