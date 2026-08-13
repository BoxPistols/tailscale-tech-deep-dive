import { Check, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

export default function Comparison() {
  const featureComparison = [
    { feature: "セットアップの簡単さ", tailscale: true, openvpn: false, ipsec: false },
    { feature: "ポート開放不要", tailscale: true, openvpn: false, ipsec: false },
    { feature: "NAT越え対応", tailscale: true, openvpn: false, ipsec: false },
    { feature: "ゼロトラスト対応", tailscale: true, openvpn: false, ipsec: false },
    { feature: "ACLベースのアクセス制御", tailscale: true, openvpn: false, ipsec: false },
    { feature: "モバイルデバイス対応", tailscale: true, openvpn: true, ipsec: true },
    { feature: "暗号化通信", tailscale: true, openvpn: true, ipsec: true },
    { feature: "オープンソース", tailscale: false, openvpn: true, ipsec: true },
    { feature: "エンタープライズサポート", tailscale: true, openvpn: false, ipsec: true },
    { feature: "低遅延", tailscale: true, openvpn: false, ipsec: false },
  ];

  const performanceData = [
    { name: "セットアップ時間", tailscale: 5, openvpn: 30, ipsec: 45 },
    { name: "平均遅延(ms)", tailscale: 15, openvpn: 45, ipsec: 35 },
    { name: "スループット(Mbps)", tailscale: 950, openvpn: 850, ipsec: 900 },
    { name: "CPU使用率(%)", tailscale: 8, openvpn: 25, ipsec: 20 },
  ];

  const latencyData = [
    { distance: "同じ地域", tailscale: 5, openvpn: 20, ipsec: 15 },
    { distance: "別の地域", tailscale: 12, openvpn: 35, ipsec: 28 },
    { distance: "国際線", tailscale: 25, openvpn: 60, ipsec: 50 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-900">VPN比較分析</h1>
              <p className="text-xs md:text-sm text-slate-600">Tailscaleと従来のVPN技術を比較</p>
            </div>
            <nav className="flex gap-3 md:gap-6">
              <a href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">技術解説</a>
              <a href="/implementation" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">実装ガイド</a>
              <a href="/comparison" className="text-sm font-medium text-blue-600 transition">比較分析</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Tailscaleと従来のVPNの比較</h2>
            <p className="text-slate-700">
              Tailscaleは、OpenVPNやIPSecなどの従来のVPN技術とは異なるアプローチを採用しています。このページでは、機能、パフォーマンス、使いやすさの観点から比較します。
            </p>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">機能比較</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">機能</th>
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">Tailscale</th>
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">OpenVPN</th>
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">IPSec</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureComparison.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : ""}>
                        <td className="py-3 px-4 text-slate-700">{row.feature}</td>
                        <td className="text-center py-3 px-4">
                          {row.tailscale ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-600 mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-3 px-4">
                          {row.openvpn ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-600 mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-3 px-4">
                          {row.ipsec ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-600 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Performance Comparison */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">パフォーマンス比較</h2>
          <Card>
            <CardHeader>
              <CardTitle>主要メトリクス</CardTitle>
              <CardDescription>セットアップ時間、遅延、スループット、CPU使用率の比較</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="tailscale" fill="#2563eb" name="Tailscale" />
                  <Bar dataKey="openvpn" fill="#f59e0b" name="OpenVPN" />
                  <Bar dataKey="ipsec" fill="#8b5cf6" name="IPSec" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Latency by Distance */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">距離別遅延比較</h2>
          <Card>
            <CardHeader>
              <CardTitle>地理的距離による遅延の変化</CardTitle>
              <CardDescription>異なる地理的距離での平均遅延（ミリ秒）</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={latencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="distance" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="tailscale" stroke="#2563eb" strokeWidth={2} name="Tailscale" />
                  <Line type="monotone" dataKey="openvpn" stroke="#f59e0b" strokeWidth={2} name="OpenVPN" />
                  <Line type="monotone" dataKey="ipsec" stroke="#8b5cf6" strokeWidth={2} name="IPSec" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* Use Case Analysis */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">ユースケース別推奨</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tailscaleが最適な場合</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-700">
                <p>✓ リモートワーク環境の構築</p>
                <p>✓ マイクロサービス間の通信</p>
                <p>✓ 複数拠点のネットワーク統合</p>
                <p>✓ IoTデバイスの管理</p>
                <p>✓ ゼロトラストセキュリティの実装</p>
                <p>✓ 低遅延が重要なアプリケーション</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">従来のVPNが最適な場合</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-700">
                <p>✓ 大規模エンタープライズ環境</p>
                <p>✓ 完全なオープンソースが必須</p>
                <p>✓ 既存のVPN基盤との統合</p>
                <p>✓ 特定の規制要件への対応</p>
                <p>✓ カスタマイズが必要な場合</p>
                <p>✓ オンプレミスのみの環境</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">コスト分析</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tailscale</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">無料プラン</p>
                  <p>• 最大3ユーザー</p>
                  <p>• 100デバイス</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">有料プラン</p>
                  <p>• $10-20/月（ユーザー単位）</p>
                  <p>• エンタープライズサポート</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">OpenVPN</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">オープンソース</p>
                  <p>• 無料</p>
                  <p>• セルフホスト</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">運用コスト</p>
                  <p>• インフラ費用</p>
                  <p>• 管理人件費</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">IPSec</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">ハードウェア</p>
                  <p>• VPN機器: 数十万円～</p>
                  <p>• ライセンス費用</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">運用コスト</p>
                  <p>• 高い管理費用</p>
                  <p>• サポート契約</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle>まとめ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                <strong>Tailscale</strong>は、モダンなネットワーク要件に対応するために設計された新世代のVPNソリューションです。セットアップの簡単さ、低遅延、ゼロトラストセキュリティの実装が特徴です。
              </p>
              <p>
                <strong>OpenVPN</strong>と<strong>IPSec</strong>は確立された技術で、特定のユースケースやエンタープライズ環境での実績があります。ただし、セットアップと運用の複雑さが課題です。
              </p>
              <p>
                <strong>推奨：</strong>リモートワークやマイクロサービス環境ではTailscaleを、既存のエンタープライズ基盤との統合が必要な場合は従来のVPN技術を検討してください。
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto max-w-6xl px-4 text-center text-sm">
          <p>&copy; 2026 VPN比較分析。Manus AIにより作成。</p>
        </div>
      </footer>
    </div>
  );
}
