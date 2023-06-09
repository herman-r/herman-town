---
emoji: ♾️
title: 購入体験における無限スクロールUIの問題点
date: 2022/12/16
author: herman
contentType: article
---

最近この辺のことを考えていたので、ページネーションと無限スクロールのUIを、購入体験（ユーザビリティ）の観点から掘り下げてみます。

## 【前提】周りを見渡してみます

まず、どんなWebサービスがどちらの表現を採用しているのか現状を整理してみます。

[ image ]

適当に挙げたサービスなので偏りがあるかもしれませんが、なんとなく雰囲気が分かりますでしょうか。それぞれの間にある境界線の基準となる考え方はなんでしょう？

### 取り扱うコンテンツによって適切なUIは異なる

無限スクロールを採用しているサービスは基本的に閲覧のみで完結するコンテンツですが、ページネーションが使用されているサービスは”購入”が紐づいています。もっと言うと、ユーザー側に「コストが発生」します。

個人的な答えは「コストが発生しないコンテンツ」に適しているのが無限スクロールであり、「コストが発生するコンテンツ」を取り扱うサービスにはページネーションであることが必須であると考えています。

## 無限スクロールをECで実装する問題点

なぜ、コストが発生するコンテンツを取り扱うサービス（= ECサイト）では無限スクロールUIが適していないのでしょうか。一見、没入感を得られる/ユーザーの離脱を防げる/一気に多くのコンテンツを見られるなど、メリットが多く感じられるかもしれません。しかし、これは罠である可能性が高いです。改めてユーザーがどのような思考のもと行動をするのか考えてみます。

### 情報の比較の問題

コストが発生するということは、ユーザーは失敗を恐れると表現しても良いでしょう。ECにおいては自分のお財布からお金が出ていくのであれば、「買ってよかったな」を思えるであろう商品をカートに入れるに越したことはありません。

そのためには比較をする必要があります。その上で自分の求めているカテゴリーの中から一つを選択するのです。

無限スクロールUIである場合、「1:∞」の構造になります。これではあまりにも比較対象が多すぎて選択をすることを諦めてしまうでしょう。

ユーザーは「1:24」「1:48」など、グルーピングされた中で比較する方がよっぽど簡単かつ早いため、与えられた選択肢を評価しやすいです。それはコストを支払うことに納得感を与えるはずです。

### 情報の再帰性の問題

Webサービスはユーザーの生活の一部になるのが理想と言えるかもしれません。それを踏まえると、”一度サイトに訪れたユーザーがサービスから離れることなくそのまま購入してくれる”という前提に立つと厄介です。

もしかすると、目的の商品を探している途中でLINEが来てブラウザを閉じる可能性は大いにあります。そして再びサイトに戻ってきたユーザーが「あのデザインの服が気になったけど、どこだっけ？」となった場合、辿り着くためにどちらのサイト設計が手助けとなるでしょうか。

無限スクロールでは自分の位置情報を把握することが困難です。対してページネーションは「確か3, 4ページ目ぐらいだったような」とあたりを付けることが簡単です。また特定のページを開いたままであれば、すぐに前回の続きから探索行為を再開することができます。

### 情報の発見性の問題

ユーザーは目的の情報を発見するまで探索行動を行います。しかし、自分が本当に求めている情報はユーザー自身が認識していない可能性があります。ベリーピッキングモデルに準えると無限スクロールUIの問題が分かりやすくなります。

[ image ]

無限スクロールUIは情報がひたすら下に表示され続けるため、セレンディピティの提供には適していません。

またページ上部に戻ることもないため、ヘッダーのナビゲーションから別のカテゴリーを参照したり、検索窓から別のクエリを試してみるなど、ユーザーから次のアクションを取り得る手段を奪う形にもなってしまいます。

## アプリではどうか

冒頭でも整理したWebサービスにおいて、ページネーションに分類されているサービスが「アプリでは無限スクロールを採用している」ことに気付くかと思います。なぜWebではページネーションで、アプリでは無限スクロールなのでしょうか。

### SEOの観点

Webサービスである以上はGoogleからの評価を無視することはできません。ECサイトに掲載されている商品をクロールしやすくするためにはページネーションが最適です。

さらに無限スクロールUIはCLSにも悪影響を与えるので、SEOの観点からWebではページネーションが適していると言えます。

### 設計の観点

アプリではURLの概念がなかったり、ブラウザバックのような機能もないため階層を深く潜っていくような体験は避けるべきです。

そのため、ページネーションのような奥に進んでいく設計はアプリ上では適していないと言えます。無限スクロールで商品一覧を表示することが最適でしょう。

### ユーザー属性の観点

Webに訪れるユーザーとアプリを利用しているユーザーでは属性が大きく異なります。想像しやすいのは「ゲスト：会員」の比率です。アプリの方が会員ユーザーの比率が高いものになるでしょう。

会員ユーザーであればデータを紐づけることが可能であるため、「いいね」「ブックマーク」などの機能を使用することができます。この場合、無限スクロールで失ってしまう情報の再帰性をカバーしたり、このデータを元にレコメンドを行うことで発見性を上げることも可能です。

## その他のUIにも影響を与える

無限スクロールかページネーションを採用するかで他の部分的なUIにも影響を与えるでしょう。

例えば、先述した

> またページ上部に戻ることもないため、ヘッダーのナビゲーションから別のカテゴリーを参照したり、検索窓から別のクエリを試してみるなど、ユーザーから次のアクションを取り得る手段を奪う形にもなってしまいます。
を解決するために、ヘッダーを追従させる表現を試みるのも選択肢として考えられるかもしれません。しかし、ページネーションを前提としたサイト設計であるならば、そのような見せ方は選択肢から外れるでしょう。

## 終わりに

「地平線が見えるほど無限の彼方へ続く通路。その両脇に商品の棚が並べられている架空のアパレル店。」を想像してみてください。

果たしてここから自分の目的の商品を見つけられるでしょうか？あるいはそれを購入すると選択することは簡単でしょうか？

同じようなことが「無限スクロール vs ページネーション」でも当てはまると考えており、改めて言語化して整理しようと試みたのがこの記事の内容でした！

### 参考
- Infinite Scrolling Is Not for Every Website
- Why did infinite scroll fail at Etsy?
- ベリーピッキングモデルで考える探索と検索 - ÉKRITS / エクリ
- 検索と発見のためのデザイン
