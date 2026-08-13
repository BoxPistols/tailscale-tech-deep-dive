# 検証メモ

## 2026-08-13

公開ドメイン `https://tailscale-te-gaq2b3rh.manus.space/implementation` を確認したところ、実装ガイドURLでも技術解説トップページが表示された。原因は、ルーターの `/` ルートが `/implementation` と `/comparison` より先に評価され、すべてのパスをトップページとして受けている可能性が高い。公開版はチェックポイント反映前の内容も表示していたため、ルーター修正後に新しいチェックポイントを保存し、ユーザーが公開操作できる状態にする。

開発プレビュー `https://3000-ixfdz5aqkag3qwktk21cy-592a3636.sg1.manus.computer/implementation` では、初心者向けセクションと公式出典リンクは表示されたが、やはりトップページが表示された。ナビゲーション自体はDOM上に存在する。

公式出典として使用するURLは次のとおり。

| 内容 | 公式URL |
| --- | --- |
| Tailscaleの仕組み、データプレーン、コントロールプレーン | https://tailscale.com/blog/how-tailscale-works |
| NAT越え、UDP、STUN、DERP | https://tailscale.com/blog/how-nat-traversal-works |
| アクセス制御、ACL、deny-by-default | https://tailscale.com/docs/features/access-control/acls |
| サブネットルーター | https://tailscale.com/docs/features/subnet-routers |
| 出口ノード | https://tailscale.com/docs/features/exit-nodes |
| Funnel | https://tailscale.com/docs/features/tailscale-funnel |
| Tailscale SSH | https://tailscale.com/docs/features/tailscale-ssh |
| WireGuard | https://www.wireguard.com/ |

## 次の修正

1. App.tsxのルートを具体的なパス（implementation、comparison）を先に評価する順序へ修正する。
2. Home.tsxのアイデンティティ、応用機能、パフォーマンス・セキュリティの各セクションに公式出典リンクを追加する。
3. 比較分析・実装ガイドにも共通ナビゲーションと公式資料への導線があることを確認する。
4. TypeScriptチェック、本番ビルド、各URLの表示を再検証してチェックポイントを保存する。

> 比較表やグラフの数値は現時点で出典のある実測値ではないため、信頼性を損なわないよう「説明用の参考値」と明記するか、断定的な性能比較を避ける。
