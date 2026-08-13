import { useState } from "react";
import { ChevronDown, Network, Lock, Zap, Shield, Code2, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>("wireguard");

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-2">
                <Network className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-900">Tailscale 技術深掘りガイド</h1>
                <p className="text-xs md:text-sm text-slate-600">ゼロトラストネットワーキングを支えるアーキテクチャの解説</p>
              </div>
            </div>
            <nav className="flex gap-3 md:gap-6">
              <a href="/" className="text-sm font-medium text-blue-600 transition">技術解説</a>
              <a href="/implementation" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">実装ガイド</a>
              <a href="/comparison" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">比較分析</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-12">
        {/* 初心者向け基礎解説 */}
        <section className="mb-12">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 p-8 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">【初心者向け】VPNとTailscaleの基本をゼロから学ぶ</h2>
            <p className="mb-4 text-slate-700">
              「そもそもVPNや仮想ネットワークとは何？」という方のために、難しい技術用語を使わずにその基本を解説します。
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-6">
              <div className="rounded-xl bg-white p-5 border border-blue-100 shadow-xs">
                <h3 className="font-bold text-slate-900 mb-2">1. 従来のVPNの悩み</h3>
                <p className="text-sm text-slate-600">
                  従来のVPNは専用の「VPNルーター」や難しい設定（ポート開放など）が必要で、専門知識がないと構築できませんでした。また接続が遅く不安定になりがちです。
                </p>
              </div>
              <div className="rounded-xl bg-white p-5 border border-blue-100 shadow-xs">
                <h3 className="font-bold text-slate-900 mb-2">2. Tailscaleの発想</h3>
                <p className="text-sm text-slate-600">
                  Tailscaleは、面倒なルーター設定を一切不要にし、GoogleやGitHubなどの既存アカウントでログインするだけで、世界中の自分のデバイス同士を直接安全につなぎます。
                </p>
              </div>
              <div className="rounded-xl bg-white p-5 border border-blue-100 shadow-xs">
                <h3 className="font-bold text-slate-900 mb-2">3. なぜ安全で速いのか？</h3>
                <p className="text-sm text-slate-600">
                  超軽量かつ強固な暗号化プロトコル「WireGuard」を採用しているため、CPUに負担をかけず、自宅やオフィスのMacと外出先のMacが直接通信（ピアツーピア）できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* イントロダクション */}
        <section className="mb-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Tailscale の技術アーキテクチャへようこそ</h2>
            <p className="mb-4 text-lg text-slate-700">
              Tailscaleは、革新的なテクノロジーを通じてセキュアなネットワーク接続をシンプルにする現代的なVPNプラットフォームです。このガイドでは、Tailscaleを安全・高速・容易にしている高度なエンジニアリングを深く掘り下げます。
            </p>
            <p className="text-slate-600">
              WireGuardの暗号化基盤から、DERPのリレーメカニズム、そしてACLベースのアクセスコントロールまで、Tailscaleのゼロトラストネットワークを支える各コンポーネントを詳細に解説します。
            </p>
          </div>
        </section>

        {/* コア技術セクション */}
        <div className="space-y-6">
          {/* WireGuard セクション */}
          <Card className="border-slate-200">
            <CardHeader 
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => toggleSection("wireguard")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>WireGuard：データプレーンの基盤</CardTitle>
                    <CardDescription>ピアツーピア暗号化のためのモダンな暗号技術</CardDescription>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${expandedSection === "wireguard" ? "rotate-180" : ""}`}
                />
              </div>
            </CardHeader>
            {expandedSection === "wireguard" && (
              <CardContent className="space-y-4 border-t border-slate-200 pt-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">WireGuardとは何か？</h4>
                  <p className="text-slate-700">
                    WireGuardは、Tailscaleのデータプレーンとして機能するモダンなVPNプロトコルです。シンプルさとパフォーマンスを追求して設計されており、OpenVPNの約100,000行に対してわずか約4,000行のコードベースで構成されています。この極小のコードベースにより、監査が容易で高い信頼性を誇ります。
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">主な特徴</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>Noiseプロトコルフレームワーク：</strong>認証付き暗号化に最新の暗号方式（ChaCha20-Poly1305、Curve25519）を採用</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>ステートレス設計：</strong>接続状態を保持しないため、ネットワークの切り替えに対して極めて高い耐性を持つ</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>鍵の自動ローテーション：</strong>前方秘匿性を確保するため、暗号化キーを2分ごとに自動ローテーション</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>低遅延：</strong>オーバーヘッドが極めて少なく、ネイティブに近いネットワークパフォーマンスを実現</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <h4 className="mb-2 font-mono text-sm font-semibold text-slate-900">暗号化スタック構成</h4>
                  <pre className="overflow-x-auto text-xs text-slate-700">
{`ハンドシェイク: Noise_IKpsk2_25519_ChaChaPoly_BLAKE2s
トランスポート: ChaCha20-Poly1305
DH関数: Curve25519
ハッシュ関数: BLAKE2s
セッションキー: 32バイト (256ビット)`}
                  </pre>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500 flex items-center justify-between">
                  <span>出典: WireGuard 公式ホワイトペーパー / Tailscale 公式ドキュメント</span>
                  <a href="https://www.wireguard.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">WireGuard公式サイト ↗</a>
                </div>
              </CardContent>
            )}
          </Card>

          {/* NAT越え セクション */}
          <Card className="border-slate-200">
            <CardHeader 
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => toggleSection("nat")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-amber-600" />
                  <div>
                    <CardTitle>NAT越え（NAT Traversal）：ファイアウォールを突破する仕組み</CardTitle>
                    <CardDescription>STUN、ICE、およびDERPリレー機構</CardDescription>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${expandedSection === "nat" ? "rotate-180" : ""}`}
                />
              </div>
            </CardHeader>
            {expandedSection === "nat" && (
              <CardContent className="space-y-4 border-t border-slate-200 pt-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">NATの課題</h4>
                  <p className="text-slate-700">
                    ネットワークアドレス変換（NAT）は、複数のデバイスが1つのパブリックIPアドレスを共有するためにルーターで使用されます。しかしNATは、異なるNAT環境下のデバイス同士が直接通信することを困難にします。
                  </p>
                </div>

                <Tabs defaultValue="stun" className="mt-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="stun">STUN</TabsTrigger>
                    <TabsTrigger value="ice">ICE</TabsTrigger>
                    <TabsTrigger value="derp">DERP</TabsTrigger>
                  </TabsList>

                  <TabsContent value="stun" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">STUN (Session Traversal Utilities for NAT)</h4>
                    <p className="text-slate-700">
                      STUNは、パブリックインターネット側から見たデバイス自身のグローバルIPアドレスとポート番号を発見するためのプロトコルです。この情報は直接的なピアツーピア接続の確立に不可欠です。
                    </p>
                    <div className="rounded-lg bg-blue-50 p-3 text-sm text-slate-700">
                      <strong>仕組み：</strong>デバイスがSTUNサーバーにリクエストを送信し、サーバーがパブリックIPとポートを返却します。デバイスはこの情報をピアと共有し、直接接続を試みます。
                    </div>
                  </TabsContent>

                  <TabsContent value="ice" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">ICE (Interactive Connectivity Establishment)</h4>
                    <p className="text-slate-700">
                      ICEは、2つのピア間で可能な限り最適な接続を確立するために複数の技術を組み合わせるフレームワークです。優先度の高い順に複数の接続候補を試行します。
                    </p>
                    <div className="rounded-lg bg-blue-50 p-3 text-sm text-slate-700">
                      <strong>候補の種類：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• ホスト候補：ローカルIPを使用した直接接続</li>
                        <li>• サーバー反射候補：発見されたパブリックIPを介した接続</li>
                        <li>• ピア反射候補：接続確認中に発見された経路</li>
                        <li>• リレー候補：中継サーバー（DERP）を介した接続</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="derp" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">DERP (Designated Encrypted Relay for Packets)</h4>
                    <p className="text-slate-700">
                      DERPは、直接的なピアツーピア接続が確立できない場合に備えたTailscale独自のフォールバックリレープロトコルです。制限の厳しいネットワーク環境でも確実な接続を保証します。
                    </p>
                    <div className="rounded-lg bg-blue-50 p-3 text-sm text-slate-700">
                      <strong>主な特徴：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• WireGuardパケットをTLS暗号化されたTCPストリームで中継</li>
                        <li>• 低遅延を実現するためのグローバル分散サーバー配置</li>
                        <li>• DERPリージョン間の自動フェイルオーバー</li>
                        <li>• 高可用性のためのステートレス設計</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">接続確立のフロー</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div className="flex gap-2">
                      <span className="font-mono text-blue-600">1.</span>
                      <span>デバイスAがSTUNを介して自身のパブリックIPを発見</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-mono text-blue-600">2.</span>
                      <span>ICEがデバイスBへの直接接続を試行</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-mono text-blue-600">3.</span>
                      <span>直接接続が失敗した場合、DERPリレーにフォールバック</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-mono text-blue-600">4.</span>
                      <span>すべてのトラフィックはエンドツーエンドで完全暗号化</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500 flex items-center justify-between">
                  <span>出典: Tailscale Blog "How NAT traversal works"</span>
                  <a href="https://tailscale.com/blog/how-nat-traversal-works" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">公式解説記事 ↗</a>
                </div>
              </CardContent>
            )}
          </Card>

          {/* コントロールプレーン セクション */}
          <Card className="border-slate-200">
            <CardHeader 
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => toggleSection("control")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GitBranch className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>コントロールプレーン：オーケストレーションと調整</CardTitle>
                    <CardDescription>Tailscaleがネットワーク構成を管理する仕組み</CardDescription>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${expandedSection === "control" ? "rotate-180" : ""}`}
                />
              </div>
            </CardHeader>
            {expandedSection === "control" && (
              <CardContent className="space-y-4 border-t border-slate-200 pt-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">関心の分離</h4>
                  <p className="text-slate-700">
                    Tailscaleは、ネットワーク管理を「コントロールプレーン（管理）」と「データプレーン（実際のデータ転送）」の2つに明確に分離しています。この分離により、優れたセキュリティ、スケーラビリティ、パフォーマンスが実現されています。
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h4 className="mb-2 font-semibold text-slate-900">コントロールプレーンの機能</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>デバイスの認証と登録</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>公開鍵の配布</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>ネットワーク構成の更新</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>ACLポリシーの強制適用</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>監査ログの収集</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h4 className="mb-2 font-semibold text-slate-900">データプレーンの機能</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>暗号化されたパケットの送受信</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>直接ピアツーピアによるルーティング</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>DERPリレーによるフォールバック</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>低遅延な通信の維持</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>サーバーを介さない直接通信</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-green-50 p-4">
                  <h4 className="mb-2 font-semibold text-slate-900">プライバシーの利点</h4>
                  <p className="text-sm text-slate-700">
                    コントロールプレーンとデータプレーンが分離されているため、Tailscaleの調整サーバーがデバイス間の実際のトラフィックを閲覧することは一切できません。すべてのデータはエンドツーエンドで暗号化され、コントロールプレーンはメタデータと構成のみを処理します。
                  </p>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500 flex items-center justify-between">
                  <span>出典: Tailscale Architecture Whitepaper</span>
                  <a href="https://tailscale.com/blog/how-tailscale-works" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Tailscaleアーキテクチャ解説 ↗</a>
                </div>
              </CardContent>
            )}
          </Card>

          {/* アイデンティティベースネットワーキング セクション */}
          <Card className="border-slate-200">
            <CardHeader 
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => toggleSection("identity")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>アイデンティティベースのネットワーキングとACL</CardTitle>
                    <CardDescription>ゼロトラストアクセスコントロールポリシー</CardDescription>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${expandedSection === "identity" ? "rotate-180" : ""}`}
                />
              </div>
            </CardHeader>
            {expandedSection === "identity" && (
              <CardContent className="space-y-4 border-t border-slate-200 pt-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">IPアドレスを超えたアクセスコントロール</h4>
                  <p className="text-slate-700">
                    従来のネットワークセキュリティはIPアドレスやネットワークセグメントに依存していました。Tailscaleはアイデンティティベースのアクセスコントロールを導入し、権限を「どこにいるか」ではなく「誰であるか」に紐付けます。
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">アクセスコントロールリスト（ACL）</h4>
                  <p className="text-slate-700">
                    TailscaleのACLシステムはポリシー・アイズ・コードのアプローチを採用しており、管理者がJSON形式で正確なアクセスルールを定義できます。どのユーザーやデバイスがどのリソースに、どのプロトコルでアクセスできるかを指定します。
                  </p>
                </div>

                <div className="rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-100">
                  <div className="mb-2 text-purple-400">// ACLポリシーの記述例</div>
                  <pre className="overflow-x-auto text-xs">{`{
  "acls": [
    // エンジニアリングチームによる全サーバーへのSSHアクセスを許可
    {
      "action": "accept",
      "src": ["group:engineering"],
      "dst": ["tag:server"],
      "ports": ["22"]
    },
    // マーケティングチームによるWebサービスへのHTTP/HTTPSアクセスを許可
    {
      "action": "accept",
      "src": ["group:marketing"],
      "dst": ["tag:web"],
      "ports": ["80", "443"]
    },
    // その他のトラフィックはすべて拒否
    {
      "action": "deny",
      "src": ["*"],
      "dst": ["*"]
    }
  ]
}`}</pre>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h4 className="mb-2 font-semibold text-slate-900">従来のIPベース</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• ルールがIPアドレスに依存</li>
                      <li>• IP変更時に設定破綻</li>
                      <li>• 大規模運用が困難</li>
                      <li>• ユーザーコンテキストの欠如</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-purple-50 p-4">
                    <h4 className="mb-2 font-semibold text-slate-900">Tailscale アイデンティティベース</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• ルールがユーザーIDに紐付け</li>
                      <li>• 場所を問わず一貫した動作</li>
                      <li>• 組織の成長に合わせて容易に拡張</li>
                      <li>• 豊富なコンテキスト情報</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500 flex items-center justify-between">
                  <span>出典: Tailscale アクセス制御公式ドキュメント</span>
                  <a href="https://tailscale.com/docs/features/access-control/acls" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">ACLの公式解説 ↗</a>
                </div>
              </CardContent>
            )}
          </Card>

          {/* 高度な応用機能 セクション */}
          <Card className="border-slate-200">
            <CardHeader 
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => toggleSection("advanced")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code2 className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle>高度な応用機能</CardTitle>
                    <CardDescription>サブネットルーター、出口ノード、Funnel、SSH</CardDescription>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${expandedSection === "advanced" ? "rotate-180" : ""}`}
                />
              </div>
            </CardHeader>
            {expandedSection === "advanced" && (
              <CardContent className="space-y-4 border-t border-slate-200 pt-6">
                <Tabs defaultValue="subnet" className="mt-4">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="subnet">サブネットルーター</TabsTrigger>
                    <TabsTrigger value="exit">出口ノード</TabsTrigger>
                    <TabsTrigger value="funnel">Funnel</TabsTrigger>
                    <TabsTrigger value="ssh">Tailscale SSH</TabsTrigger>
                  </TabsList>

                  <TabsContent value="subnet" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">サブネットルーター</h4>
                    <p className="text-slate-700">
                      サブネットルーターを使用することで、Tailscaleをインストールできないデバイス（ネットワークプリンター、NAS、IoTデバイスなど）が存在するローカルネットワーク全体にTailnetからアクセスできるようになります。
                    </p>
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-slate-700">
                      <strong>主なユースケース：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• ネットワークプリンターやスキャナーへのアクセス</li>
                        <li>• NASやストレージデバイスへの接続</li>
                        <li>• ローカルネットワーク上のIoTデバイス管理</li>
                        <li>• Tailscale非対応のレガシーシステムへの接続</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="exit" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">出口ノード</h4>
                    <p className="text-slate-700">
                      出口ノードを設定することで、Tailnet内のデバイスのすべてのインターネットトラフィックを特定のノード経由でルーティングできます。公共Wi-Fi等の安全でない環境からの保護や、地理的制限の回避に役立ちます。
                    </p>
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-slate-700">
                      <strong>主なユースケース：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• 公衆Wi-Fi利用時の安全なブラウジング</li>
                        <li>• 地理的制限のあるサービスへのアクセス</li>
                        <li>• コンプライアンス遵守のための集中型トラフィック経由</li>
                        <li>• すべての通信で一貫したパブリックIPの維持</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="funnel" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Tailscale Funnel</h4>
                    <p className="text-slate-700">
                      Funnel機能は、Tailnet内のデバイスで稼働しているローカルなWebサービスを、一時的かつ安全にインターネットへ公開します。複雑なポートフォワーディング設定やDDNSは不要です。
                    </p>
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-slate-700">
                      <strong>主なユースケース：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• テスト用のローカル開発サーバーの共有</li>
                        <li>• 外部インテグレーション用のWebフックエンドポイント</li>
                        <li>• 一時的なAPIエンドポイントの公開</li>
                        <li>• デプロイ前のアプリケーションのデモ</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="ssh" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Tailscale SSH</h4>
                    <p className="text-slate-700">
                      Tailscale SSHは、TailscaleのアイデンティティとACLシステムを活用することで、手動でのSSH鍵管理を不要にします。ユーザーはTailscaleの認証情報でログインし、すべてのセッションが自動記録されます。
                    </p>
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-slate-700">
                      <strong>主なメリット：</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• 面倒なSSH鍵の配布と管理が不要</li>
                        <li>• 自動的なセッションログ記録と監査証跡</li>
                        <li>• アイデンティティに基づく厳格なアクセス制御</li>
                        <li>• 既存のSSHツールとの完全な互換性</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500 flex items-center justify-between">
                  <span>出典: Tailscale公式ドキュメント（サブネットルーター、出口ノード、Funnel、SSH）</span>
                  <a href="https://tailscale.com/docs/features/subnet-routers" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">応用機能の公式一覧 ↗</a>
                </div>
              </CardContent>
            )}
          </Card>
        </div>

        {/* パフォーマンスとセキュリティの特性 */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">パフォーマンスとセキュリティの特性</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-600" />
                  パフォーマンス最適化
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-900">直接接続（Direct Connections）</h4>
                  <p className="text-sm text-slate-700">可能な限りピア同士の直接接続を優先し、遅延を最小限に抑えてスループットを最大化。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">適応型ルーティング</h4>
                  <p className="text-sm text-slate-700">ネットワーク状況に応じて、直接接続、リレー、ハイブリッドの中から最適な経路を自動選択。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">UDP優先プロトコル</h4>
                  <p className="text-sm text-slate-700">低遅延な通信のためにUDPを使用しつつ、信頼性のためにTCPフォールバックを完備。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">最小限のオーバーヘッド</h4>
                  <p className="text-sm text-slate-700">WireGuardの無駄のない設計により、CPU負荷が低く高速なパケット処理を実現。</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  セキュリティ特性
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-900">エンドツーエンド暗号化</h4>
                  <p className="text-sm text-slate-700">すべての通信が最新の暗号方式で保護され、リレーサーバーであっても内容の閲覧は不可能。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">ゼロトラストモデル</h4>
                  <p className="text-sm text-slate-700">すべてのデバイスとユーザーを厳格に認証。ネットワーク上の位置に基づく暗黙の信頼を排除。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">前方秘匿性（Forward Secrecy）</h4>
                  <p className="text-sm text-slate-700">セッションキーが頻繁にローテーションされるため、長期鍵が万一漏洩しても過去の通信は安全。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">監査ログ</h4>
                  <p className="text-sm text-slate-700">認証、認可、および構成変更の包括的なログ記録機能を提供。</p>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500 flex items-center justify-between">
                  <span>出典: Tailscaleの仕組みと接続方式に関する公式解説</span>
                  <a href="https://tailscale.com/blog/how-tailscale-works" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">公式技術解説 ↗</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* コール・トゥ・アクション */}
        <section className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">次のステップへ進みましょう</h2>
          <p className="mb-6 text-slate-700">
            Tailscaleの技術的なアーキテクチャを理解したら、実装ガイドで具体的な設定手順を確認し、従来のVPNとの比較分析を参考にしてください。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="/implementation">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                実装ガイドを見る
              </Button>
            </a>
            <a href="/comparison">
              <Button variant="outline" className="w-full sm:w-auto">
                比較分析を見る
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 font-semibold text-white">このガイドについて</h3>
              <p className="text-sm text-slate-400">
                エンジニアおよび技術意思決定者向けに、Tailscaleのアーキテクチャを詳細に解説した包括的な技術資料です。
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-white">リンク</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://tailscale.com" target="_blank" rel="noreferrer" className="hover:text-white transition">Tailscale 公式サイト</a></li>
                <li><a href="https://tailscale.com/kb" target="_blank" rel="noreferrer" className="hover:text-white transition">公式ドキュメント</a></li>
                <li><a href="https://github.com/tailscale/tailscale" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub リポジトリ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-white">公式リソース・出典</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://tailscale.com/blog/how-tailscale-works" target="_blank" rel="noreferrer" className="hover:text-white transition">Tailscale 公式ブログ（仕組み解説）</a></li>
                <li><a href="https://www.wireguard.com/" target="_blank" rel="noreferrer" className="hover:text-white transition">WireGuard 公式サイト</a></li>
                <li><a href="https://tailscale.com/kb/1132/acl-syntax" target="_blank" rel="noreferrer" className="hover:text-white transition">Tailscale ACL公式ドキュメント</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2026 Tailscale 技術深掘りガイド。日本語技術資料。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
