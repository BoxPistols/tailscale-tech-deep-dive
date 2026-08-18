import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Implementation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-900">Tailscale 実装ガイド</h1>
              <p className="text-xs md:text-sm text-slate-600">技術から実装へ：段階的な設定手順</p>
            </div>
            <nav className="flex gap-3 md:gap-6">
              <a href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">技術解説</a>
              <a href="/implementation" className="text-sm font-medium text-blue-600 transition">実装ガイド</a>
              <a href="/comparison" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">比較分析</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">実装ガイドへようこそ</h2>
            <p className="mb-4 text-slate-700">
              このガイドでは、Tailscaleの技術的な概念を実際の環境に適用するための具体的な手順を解説します。Macのリモートデスクトップ環境構築から、高度な機能の設定まで、段階的に進めることができます。
            </p>
          </div>
        </section>

        {/* Mac Remote Desktop Setup */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Macリモートデスクトップ環境の構築</h2>
          
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">概要</TabsTrigger>
              <TabsTrigger value="host">ホスト側設定</TabsTrigger>
              <TabsTrigger value="client">クライアント側設定</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Macリモートデスクトップ環境とは</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    手元の軽量なMacから、遠隔地にある高性能なMacをフルコントロールする環境です。Tailscaleの安全な仮想ネットワークを利用することで、複雑なポート開放設定なしに、どこからでも安全にアクセスできます。
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-2 font-semibold text-slate-900">利点</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>複雑なネットワーク設定が不要</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>エンドツーエンド暗号化で安全</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>どこからでもアクセス可能</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>ファイル転送も容易</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-2 font-semibold text-slate-900">必要な環境</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• 手元のMac（クライアント）</li>
                        <li>• 遠隔地のMac（ホスト）</li>
                        <li>• インターネット接続</li>
                        <li>• Tailscaleアカウント（無料）</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="host" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>ホスト側（遠隔地のMac）の設定</CardTitle>
                  <CardDescription>24時間稼働させるMacの初期設定</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      ホスト側のMacは常に起動状態を保つ必要があります。以下の設定を行ってください。
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-3 font-semibold text-slate-900">ステップ 1: スリープ設定の無効化</h4>
                      <ol className="space-y-2 text-sm text-slate-700">
                        <li>1. 「システム設定」を開く</li>
                        <li>2. 「ロック画面」を選択</li>
                        <li>3. 「ディスプレイがオフのときに自動でスリープさせない」をオンにする</li>
                        <li>4. MacBookの場合：「バッテリー」→「電源アダプタ」でも同様に設定</li>
                      </ol>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-3 font-semibold text-slate-900">ステップ 2: 停電後の自動起動設定</h4>
                      <ol className="space-y-2 text-sm text-slate-700">
                        <li>1. 「システム設定」→「省エネルギー」を開く</li>
                        <li>2. 「停電後に自動的に起動」をオンにする</li>
                        <li>3. これにより、停電時でも自動で復帰します</li>
                      </ol>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-3 font-semibold text-slate-900">ステップ 3: バッテリー充電の最適化（MacBookの場合）</h4>
                      <ol className="space-y-2 text-sm text-slate-700">
                        <li>1. 「システム設定」→「バッテリー」→「バッテリーの状態」を開く</li>
                        <li>2. 「バッテリー充電の最適化」をオンにする</li>
                        <li>3. 「充電上限」を80%に設定（バッテリー劣化を防止）</li>
                      </ol>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-3 font-semibold text-slate-900">ステップ 4: 画面共有の有効化</h4>
                      <ol className="space-y-2 text-sm text-slate-700">
                        <li>1. 「システム設定」→「一般」→「共有」を開く</li>
                        <li>2. 「画面共有」のスイッチをオンにする</li>
                        <li>3. 「i」マークをクリックして、アクセスを許可するユーザーを確認</li>
                      </ol>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-3 font-semibold text-slate-900">ステップ 5: Tailscaleのインストール</h4>
                      <ol className="space-y-2 text-sm text-slate-700">
                        <li>1. <a href="https://tailscale.com/download" className="text-blue-600 hover:underline">Tailscale公式サイト</a>からMac版をダウンロード</li>
                        <li>2. インストール完了後、メニューバーのTailscaleアイコンをクリック</li>
                        <li>3. 「Log in」を選択し、Google/GitHub/Appleアカウントでログイン</li>
                        <li>4. ログイン後、割り当てられたIPアドレス（100.xxx.xxx.xxx）をメモ</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="client" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>クライアント側（手元のMac）の設定</CardTitle>
                  <CardDescription>毎回の接続手順</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-3 font-semibold text-slate-900">ステップ 1: Tailscaleのインストール</h4>
                      <ol className="space-y-2 text-sm text-slate-700">
                        <li>1. <a href="https://tailscale.com/download" className="text-blue-600 hover:underline">Tailscale公式サイト</a>からMac版をダウンロード</li>
                        <li>2. インストール完了後、メニューバーのTailscaleアイコンをクリック</li>
                        <li>3. 「Log in」を選択し、<strong>ホスト側と同じアカウント</strong>でログイン</li>
                        <li>4. これで両デバイスが同じTailnetに参加します</li>
                      </ol>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-3 font-semibold text-slate-900">ステップ 2: 画面共有アプリで接続</h4>
                      <ol className="space-y-2 text-sm text-slate-700">
                        <li>1. キーボードで「Cmd + Space」を押してSpotlight検索を開く</li>
                        <li>2. 「画面共有」と入力して標準アプリを起動</li>
                        <li>3. 接続先に「100.xxx.xxx.xxx」（ホストのTailscale IP）を入力</li>
                        <li>4. 「接続」をクリック</li>
                        <li>5. ホスト側のユーザー名とパスワードを入力</li>
                      </ol>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-blue-50 p-4">
                      <h4 className="mb-3 font-semibold text-slate-900">接続後のコツ</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li><strong>画面サイズ調整：</strong> 「表示」メニューから「拡大/縮小」で見やすいサイズに調整</li>
                        <li><strong>ラグ軽減：</strong> 「表示」→「表示品質を落とす」で画質を下げて遅延を減らす</li>
                        <li><strong>ファイル転送：</strong> ドラッグ＆ドロップでファイルを転送可能</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Tailscale Settings Detailed Guide */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Tailscale Settings（設定画面）の完全解説</h2>
          <Card className="mb-8 border-blue-200 bg-blue-50/40">
            <CardHeader>
              <CardTitle>macOS版Tailscale設定画面の見方と推奨設定</CardTitle>
              <CardDescription>メニューバーのTailscaleアイコン ＞ 歯車アイコン（Settings）を開いたときに表示される各項目の詳細です。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-slate-700">
              <figure className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950">
                <img src="/manus-storage/tailscale-macos-settings_5b62c2f9.png" alt="macOS版Tailscale Settings設定画面" className="mx-auto max-h-[620px] w-auto object-contain" />
                <figcaption className="border-t border-slate-700 px-4 py-3 text-xs text-slate-300">図：macOS版Tailscale Settings。画面の表示名や項目はTailscaleのバージョンによって異なる場合があります。</figcaption>
              </figure>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-slate-700">
                <strong>先に結論：</strong> Macリモートデスクトップのホストとして使う場合は、「Allow incoming connections」と「Launch Tailscale at login」をオンにし、「Run as exit node」「VPN On Demand」「Tailnet Lock」は用途がある場合だけ設定します。
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white p-5 border border-blue-100 shadow-xs space-y-3">
                  <h3 className="font-bold text-slate-900 text-base border-b pb-2">General（一般設定）</h3>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-blue-700">✓ Allow incoming connections（着信接続の許可）</strong>
                      <p className="text-xs text-slate-600 mt-1">他のデバイスからの接続を許可します。<strong>ホストMacでは必ずオン</strong>にする必要があります（オフにすると画面共有が繋がりません）。</p>
                    </div>
                    <div>
                      <strong className="text-blue-700">✓ Use Tailscale DNS settings（DNS設定の利用）</strong>
                      <p className="text-xs text-slate-600 mt-1">MagicDNSを有効にし、IPアドレスではなくデバイス名（例: <code className="bg-slate-100 px-1 py-0.5 rounded">host-mac.tailnet-xxx.ts.net</code>）で名前解決できるようにします。通常はオンを推奨。</p>
                    </div>
                    <div>
                      <strong className="text-blue-700">✓ Use Tailscale subnets（サブネットの利用）</strong>
                      <p className="text-xs text-slate-600 mt-1">ネットワークのルールに従ってトラフィックをルーティングします。100.x.x.x以外のローカルIPアドレス（192.168.x.x等）へのアクセスに必要です。通常はオン。</p>
                    </div>
                    <div>
                      <span className="text-slate-700 font-semibold">○ Launch Tailscale at login（ログイン時に起動）</span>
                      <p className="text-xs text-slate-600 mt-1">Macの起動時に自動でTailscaleをバックグラウンド起動します。オフィスに常時設置するホストMacでは<strong>必ずオン</strong>にしてください。</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-5 border border-blue-100 shadow-xs space-y-3">
                  <h3 className="font-bold text-slate-900 text-base border-b pb-2">Window / VPN On Demand / Exit Nodes</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-slate-700 font-semibold">○ Hide Dock Icon（Dockアイコンの非表示）</span>
                      <p className="text-xs text-slate-600 mt-1">すべてのウィンドウが閉じられたときにDockからアイコンを隠します。メニューバー常駐のためお好みで。</p>
                    </div>
                    <div>
                      <strong className="text-slate-900">VPN On Demand（オンデマンドVPN）</strong>
                      <p className="text-xs text-slate-600 mt-1">特定のネットワーク環境に接続した際、自動的にTailscaleを有効化する高度な設定です。通常は「Not Enabled（無効）」で問題ありません。</p>
                    </div>
                    <div>
                      <strong className="text-slate-900">Run as exit node（出口ノードとして実行）</strong>
                      <p className="text-xs text-slate-600 mt-1">このMacをインターネットの「出口」として機能させます。外出先から自宅Mac経由でネット閲覧したい場合にオンにします（Admin Consoleでの承認が必要）。</p>
                    </div>
                    <div>
                      <strong className="text-slate-900">Allow local network access（ローカルネットワークアクセスの許可）</strong>
                      <p className="text-xs text-slate-600 mt-1">出口ノード経由で通信している最中でも、現地の物理的なローカルネットワーク（プリンターや自宅の別の機械など）へのアクセスを許可します。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 border border-blue-100 shadow-xs space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Tailnet Lock / CLI integration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Tailnet Lock：</strong> ネットワークに参加する新しいデバイスを暗号署名で厳格に検証するセキュリティ機能です（通常運用ではNot Enabledで十分です）。<br />
                  <strong>CLI integration：</strong> ターミナルから <code className="bg-slate-100 px-1 py-0.5 rounded">tailscale status</code> などのコマンドを直接実行できるようにするための連携機能です。
                </p>
              </div>
            </CardContent>
          </Card>

          <h2 className="mb-6 text-2xl font-bold text-slate-900">高度な応用機能の設定</h2>

          <Tabs defaultValue="subnet" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="subnet">サブネットルーター</TabsTrigger>
              <TabsTrigger value="exit">出口ノード</TabsTrigger>
              <TabsTrigger value="acl">ACL設定</TabsTrigger>
            </TabsList>

            <TabsContent value="subnet" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>サブネットルーター（Subnet Router）の設定</CardTitle>
                  <CardDescription>ローカルネットワーク内のデバイスへのアクセス</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Subnet Routerを設定することで、Tailscaleがインストールされていないデバイス（プリンター、NAS、IoTデバイスなど）にもアクセスできるようになります。
                  </p>
                  <div className="rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-100">
                    <div className="mb-2 text-green-400">// ターミナルでコマンド実行</div>
                    <pre className="overflow-x-auto text-xs">sudo tailscale up --advertise-routes=192.168.1.0/24</pre>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h4 className="mb-2 font-semibold text-slate-900">その後、Admin Consoleで承認：</h4>
                    <ol className="space-y-2 text-sm text-slate-700">
                      <li>1. <a href="https://console.tailscale.com/admin" className="text-blue-600 hover:underline">Tailscale Admin Console</a>にアクセス</li>
                      <li>2. 「Machines」タブでルーターとして設定するデバイスを選択</li>
                      <li>3. 「Edit route settings」から「192.168.1.0/24」を承認</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exit" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>出口ノード（Exit Node）の設定</CardTitle>
                  <CardDescription>インターネット接続の一元管理</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    出口ノード（Exit Node）を設定することで、外出先からのすべてのインターネットトラフィックを自宅のMacを経由させることができます。これにより、セキュアで一貫したIPアドレスでのアクセスが可能になります。
                  </p>
                  <div className="rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-100">
                    <div className="mb-2 text-green-400">// ホスト側で実行</div>
                    <pre className="overflow-x-auto text-xs">sudo tailscale up --advertise-exit-node</pre>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h4 className="mb-2 font-semibold text-slate-900">クライアント側での設定：</h4>
                    <ol className="space-y-2 text-sm text-slate-700">
                      <li>1. メニューバーのTailscaleアイコンをクリック</li>
                      <li>2. 「Exit nodes」を選択</li>
                      <li>3. ホストMacを選択して有効化</li>
                      <li>4. これ以降、すべてのトラフィックがホストを経由します</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="acl" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>ACL（アクセス制御リスト）の設定</CardTitle>
                  <CardDescription>デバイス間のアクセス権限管理</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    ACLを使用することで、Tailnet内のデバイス間のアクセスを細かく制御できます。誰がどのデバイスに、どのプロトコルでアクセスできるかを定義します。
                  </p>
                  <div className="rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-100">
                    <div className="mb-2 text-green-400">// 基本的なACLポリシーの例</div>
                    <pre className="overflow-x-auto text-xs">{`{
  "acls": [
    {
      "action": "accept",
      "src": ["*"],
      "dst": ["*"],
      "ports": ["22"]
    },
    {
      "action": "deny",
      "src": ["*"],
      "dst": ["*"]
    }
  ]
}`}</pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">トラブルシューティング</h2>
          <Card>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">接続できない場合</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• ホスト側のMacが起動しているか確認</li>
                  <li>• 両デバイスで同じTailscaleアカウントでログインしているか確認</li>
                  <li>• ホスト側で画面共有が有効になっているか確認</li>
                  <li>• TailscaleのIPアドレスが正しいか再確認</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900">接続が遅い場合</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• インターネット接続速度を確認</li>
                  <li>• 画面共有アプリで「表示品質を落とす」を試す</li>
                  <li>• ホスト側の不要なアプリケーションを終了</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 公式出典 */}
        <section className="mb-12">
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle>設定手順の公式出典</CardTitle>
              <CardDescription>本ページの手順を確認するためのTailscale公式資料</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2 text-sm">
                <a href="https://tailscale.com/docs/features/subnet-routers" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 p-4 text-blue-700 hover:border-blue-400 hover:bg-blue-50 transition">
                  <strong>サブネットルーターの公式手順 ↗</strong>
                  <span className="mt-1 block text-slate-600">Tailscale非対応機器のネットワークへ接続する方法</span>
                </a>
                <a href="https://tailscale.com/docs/features/exit-nodes" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 p-4 text-blue-700 hover:border-blue-400 hover:bg-blue-50 transition">
                  <strong>出口ノードの公式手順 ↗</strong>
                  <span className="mt-1 block text-slate-600">すべての通信を特定の端末経由にする方法</span>
                </a>
                <a href="https://tailscale.com/docs/features/access-control/acls" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 p-4 text-blue-700 hover:border-blue-400 hover:bg-blue-50 transition">
                  <strong>ACLの公式ドキュメント ↗</strong>
                  <span className="mt-1 block text-slate-600">アクセス権限を最小権限で定義する方法</span>
                </a>
                <a href="https://tailscale.com/docs/features/tailscale-ssh" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 p-4 text-blue-700 hover:border-blue-400 hover:bg-blue-50 transition">
                  <strong>Tailscale SSHの公式ドキュメント ↗</strong>
                  <span className="mt-1 block text-slate-600">Tailscaleの認証とACLでSSH接続を管理する方法</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto max-w-6xl px-4 text-center text-sm">
          <p>&copy; 2026 Tailscale 実装ガイド。日本語技術資料。</p>
        </div>
      </footer>
    </div>
  );
}
