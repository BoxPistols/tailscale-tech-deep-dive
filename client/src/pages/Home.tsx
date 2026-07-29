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
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-2">
              <Network className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Tailscale Technical Deep Dive</h1>
              <p className="text-sm text-slate-600">Understanding the architecture behind zero-trust networking</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Welcome to Tailscale's Technical Architecture</h2>
            <p className="mb-4 text-lg text-slate-700">
              Tailscale is a modern VPN platform that simplifies secure network connectivity through innovative technology. This guide explores the sophisticated engineering that makes Tailscale secure, fast, and easy to use.
            </p>
            <p className="text-slate-600">
              From WireGuard's cryptographic foundations to DERP's relay mechanisms and ACL-based access control, we'll dive deep into each technical component that powers Tailscale's zero-trust networking platform.
            </p>
          </div>
        </section>

        {/* Core Technology Sections */}
        <div className="space-y-6">
          {/* WireGuard Section */}
          <Card className="border-slate-200">
            <CardHeader 
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => toggleSection("wireguard")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>WireGuard: The Data Plane Foundation</CardTitle>
                    <CardDescription>Modern cryptography for peer-to-peer encryption</CardDescription>
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
                  <h4 className="font-semibold text-slate-900">What is WireGuard?</h4>
                  <p className="text-slate-700">
                    WireGuard is a modern VPN protocol that serves as Tailscale's data plane. It's designed with simplicity and performance in mind, featuring only ~4,000 lines of code compared to OpenVPN's ~100,000 lines. This minimal codebase makes WireGuard easier to audit and understand.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Key Features</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>Noise Protocol Framework:</strong> Uses modern cryptography (ChaCha20-Poly1305, Curve25519) for authenticated encryption</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>Stateless Design:</strong> Doesn't maintain connection state, making it resilient to network changes</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>Key Rotation:</strong> Automatically rotates encryption keys every 2 minutes for forward secrecy</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>Low Latency:</strong> Minimal overhead results in near-native network performance</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <h4 className="mb-2 font-mono text-sm font-semibold text-slate-900">Cryptographic Stack</h4>
                  <pre className="overflow-x-auto text-xs text-slate-700">
{`Handshake: Noise_IKpsk2_25519_ChaChaPoly_BLAKE2s
Transport: ChaCha20-Poly1305
DH Function: Curve25519
Hash: BLAKE2s
Session Key: 32 bytes (256-bit)`}
                  </pre>
                </div>
              </CardContent>
            )}
          </Card>

          {/* NAT Traversal Section */}
          <Card className="border-slate-200">
            <CardHeader 
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => toggleSection("nat")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-amber-600" />
                  <div>
                    <CardTitle>NAT Traversal: Connecting Through Firewalls</CardTitle>
                    <CardDescription>STUN, ICE, and DERP relay mechanisms</CardDescription>
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
                  <h4 className="font-semibold text-slate-900">The NAT Problem</h4>
                  <p className="text-slate-700">
                    Network Address Translation (NAT) is used by routers to allow multiple devices to share a single public IP address. However, NAT makes it difficult for devices behind different NAT layers to communicate directly with each other.
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
                      STUN is a protocol that helps devices discover their external IP address and port number as seen from the public internet. This information is crucial for establishing direct peer-to-peer connections.
                    </p>
                    <div className="rounded-lg bg-blue-50 p-3 text-sm text-slate-700">
                      <strong>How it works:</strong> A device sends a request to a STUN server, which responds with the device's public IP and port. The device can then share this information with peers for direct connection attempts.
                    </div>
                  </TabsContent>

                  <TabsContent value="ice" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">ICE (Interactive Connectivity Establishment)</h4>
                    <p className="text-slate-700">
                      ICE is a framework that combines multiple techniques to establish the best possible connection between two peers. It tries multiple connection candidates in order of preference.
                    </p>
                    <div className="rounded-lg bg-blue-50 p-3 text-sm text-slate-700">
                      <strong>Candidate types:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Host: Direct connection using local IP</li>
                        <li>• Server Reflexive: Connection via discovered public IP</li>
                        <li>• Peer Reflexive: Connection discovered during connectivity checks</li>
                        <li>• Relay: Connection through a relay server (DERP)</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="derp" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">DERP (Designated Encrypted Relay for Packets)</h4>
                    <p className="text-slate-700">
                      DERP is Tailscale's proprietary relay protocol used when direct peer-to-peer connections cannot be established. It provides a fallback mechanism to ensure connectivity even in restrictive network environments.
                    </p>
                    <div className="rounded-lg bg-blue-50 p-3 text-sm text-slate-700">
                      <strong>Key characteristics:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• TLS-encrypted TCP relay for WireGuard packets</li>
                        <li>• Globally distributed servers for low latency</li>
                        <li>• Automatic failover between DERP regions</li>
                        <li>• Stateless design for high availability</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-900">Connection Establishment Flow</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div className="flex gap-2">
                      <span className="font-mono text-blue-600">1.</span>
                      <span>Device A discovers its public IP via STUN</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-mono text-blue-600">2.</span>
                      <span>ICE attempts direct connection to Device B</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-mono text-blue-600">3.</span>
                      <span>If direct connection fails, fall back to DERP relay</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-mono text-blue-600">4.</span>
                      <span>All traffic remains encrypted end-to-end</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Control Plane Section */}
          <Card className="border-slate-200">
            <CardHeader 
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => toggleSection("control")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GitBranch className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Control Plane: Orchestration & Coordination</CardTitle>
                    <CardDescription>How Tailscale manages network configuration</CardDescription>
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
                  <h4 className="font-semibold text-slate-900">Separation of Concerns</h4>
                  <p className="text-slate-700">
                    Tailscale separates network management into two distinct planes: the control plane (management) and the data plane (actual traffic). This separation provides security, scalability, and performance benefits.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h4 className="mb-2 font-semibold text-slate-900">Control Plane Functions</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Device authentication & registration</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Public key distribution</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Network configuration updates</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>ACL policy enforcement</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Audit logging</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h4 className="mb-2 font-semibold text-slate-900">Data Plane Functions</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Encrypted packet transmission</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Direct peer-to-peer routing</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>DERP relay fallback</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Low-latency communication</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>No server involvement</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-green-50 p-4">
                  <h4 className="mb-2 font-semibold text-slate-900">Key Benefit: Privacy</h4>
                  <p className="text-sm text-slate-700">
                    Because the control plane and data plane are separated, Tailscale's coordination servers never see the actual traffic between devices. All data remains encrypted end-to-end, and the control plane only handles metadata and configuration.
                  </p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Identity-Based Networking Section */}
          <Card className="border-slate-200">
            <CardHeader 
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => toggleSection("identity")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>Identity-Based Networking & ACLs</CardTitle>
                    <CardDescription>Zero-trust access control policies</CardDescription>
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
                  <h4 className="font-semibold text-slate-900">Beyond IP-Based Access Control</h4>
                  <p className="text-slate-700">
                    Traditional network security relies on IP addresses and network segments. Tailscale introduces identity-based access control, where permissions are tied to who the user is, not where they are.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Access Control Lists (ACLs)</h4>
                  <p className="text-slate-700">
                    Tailscale's ACL system uses a policy-as-code approach, allowing administrators to define precise access rules in JSON format. Rules specify which users/devices can access which resources and over which protocols.
                  </p>
                </div>

                <div className="rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-100">
                  <div className="mb-2 text-purple-400">// Example ACL Policy</div>
                  <pre className="overflow-x-auto text-xs">{`{
  "acls": [
    // Allow engineering team SSH access to all servers
    {
      "action": "accept",
      "src": ["group:engineering"],
      "dst": ["tag:server"],
      "ports": ["22"]
    },
    // Allow marketing team HTTP/HTTPS to web services
    {
      "action": "accept",
      "src": ["group:marketing"],
      "dst": ["tag:web"],
      "ports": ["80", "443"]
    },
    // Deny all other traffic
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
                    <h4 className="mb-2 font-semibold text-slate-900">Traditional IP-Based</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Rules tied to IP addresses</li>
                      <li>• Breaks when IPs change</li>
                      <li>• Difficult to manage at scale</li>
                      <li>• No user context</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-purple-50 p-4">
                    <h4 className="mb-2 font-semibold text-slate-900">Tailscale Identity-Based</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Rules tied to user identity</li>
                      <li>• Works regardless of location</li>
                      <li>• Scales with organization</li>
                      <li>• Rich contextual information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Advanced Features Section */}
          <Card className="border-slate-200">
            <CardHeader 
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => toggleSection("advanced")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code2 className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle>Advanced Features & Applications</CardTitle>
                    <CardDescription>Subnet routing, exit nodes, and more</CardDescription>
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
                    <TabsTrigger value="subnet">Subnet Router</TabsTrigger>
                    <TabsTrigger value="exit">Exit Node</TabsTrigger>
                    <TabsTrigger value="funnel">Funnel</TabsTrigger>
                    <TabsTrigger value="ssh">SSH</TabsTrigger>
                  </TabsList>

                  <TabsContent value="subnet" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Subnet Router</h4>
                    <p className="text-slate-700">
                      A subnet router allows Tailscale to extend network access to devices that don't have Tailscale installed. By designating one device as a subnet router, all devices on that local network become accessible from the Tailnet.
                    </p>
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-slate-700">
                      <strong>Use cases:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Access network printers and scanners</li>
                        <li>• Connect to NAS and storage devices</li>
                        <li>• Reach IoT devices on local networks</li>
                        <li>• Access legacy systems without Tailscale</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="exit" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Exit Node</h4>
                    <p className="text-slate-700">
                      An exit node allows Tailnet devices to route all their internet traffic through a specific node. This is useful for accessing geo-restricted content or ensuring all traffic appears to come from a trusted location.
                    </p>
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-slate-700">
                      <strong>Use cases:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Secure browsing on public Wi-Fi</li>
                        <li>• Access services restricted by geography</li>
                        <li>• Centralized egress point for compliance</li>
                        <li>• Consistent public IP for all traffic</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="funnel" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Tailscale Funnel</h4>
                    <p className="text-slate-700">
                      Funnel enables temporary, secure public access to services running on Tailnet devices. It's perfect for sharing local development servers or temporary services without complex port forwarding.
                    </p>
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-slate-700">
                      <strong>Use cases:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Share development servers for testing</li>
                        <li>• Public webhooks for integrations</li>
                        <li>• Temporary API endpoints</li>
                        <li>• Demo applications without deployment</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="ssh" className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Tailscale SSH</h4>
                    <p className="text-slate-700">
                      Tailscale SSH eliminates the need for SSH key management by leveraging Tailscale's identity and ACL system. Users authenticate using their Tailscale identity, and all SSH sessions are automatically logged.
                    </p>
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-slate-700">
                      <strong>Benefits:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• No SSH key distribution needed</li>
                        <li>• Automatic session logging and auditing</li>
                        <li>• Identity-based access control</li>
                        <li>• Works with existing SSH tools</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            )}
          </Card>
        </div>

        {/* Performance & Security Section */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Performance & Security Characteristics</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-600" />
                  Performance Optimizations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-900">Direct Connections</h4>
                  <p className="text-sm text-slate-700">Tailscale prioritizes direct peer-to-peer connections, minimizing latency and maximizing throughput.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Adaptive Routing</h4>
                  <p className="text-sm text-slate-700">Automatically selects the best available path (direct, relay, or hybrid) based on network conditions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">UDP-First Protocol</h4>
                  <p className="text-sm text-slate-700">Uses UDP for low-latency communication with TCP fallback for reliability.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Minimal Overhead</h4>
                  <p className="text-sm text-slate-700">WireGuard's lean design means less CPU usage and faster packet processing.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Security Properties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-900">End-to-End Encryption</h4>
                  <p className="text-sm text-slate-700">All traffic encrypted with modern cryptography; even relay servers cannot read content.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Zero-Trust Model</h4>
                  <p className="text-sm text-slate-700">Every device and user authenticated; no implicit trust based on network location.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Perfect Forward Secrecy</h4>
                  <p className="text-sm text-slate-700">Session keys rotated frequently; compromise of long-term keys doesn't expose past traffic.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Audit Logging</h4>
                  <p className="text-sm text-slate-700">Comprehensive logging of authentication, authorization, and configuration changes.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Ready to Deploy Tailscale?</h2>
          <p className="mb-6 text-slate-700">
            Now that you understand Tailscale's technical architecture, explore how to implement it in your infrastructure.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started with Tailscale
            </Button>
            <Button variant="outline">
              View Documentation
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 font-semibold text-white">About This Guide</h3>
              <p className="text-sm">
                A comprehensive technical deep dive into Tailscale's architecture, designed for engineers and technical decision-makers.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Official Documentation</a></li>
                <li><a href="#" className="hover:text-white">Blog & Articles</a></li>
                <li><a href="#" className="hover:text-white">GitHub Repository</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-white">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Discord Community</a></li>
                <li><a href="#" className="hover:text-white">Reddit Discussion</a></li>
                <li><a href="#" className="hover:text-white">GitHub Issues</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2026 Tailscale Technical Deep Dive. Created with Manus AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
