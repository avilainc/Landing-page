import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaCalendar, FaClock, FaStar, FaUsers, FaHandshake, FaChartLine, FaInstagram, FaTiktok, FaYoutube, FaLightbulb, FaCheckCircle, FaShareAlt, FaLinkedin, FaFacebook, FaWhatsapp, FaHeart, FaBullhorn, FaMoneyBillWave } from 'react-icons/fa';

export default function ArtigoMarketingInfluencia() {
  const strategies = [
    {
      icon: <FaUsers className="text-5xl" />,
      title: "Micro-influenciadores São a Chave",
      description: "Influenciadores com 10k-100k seguidores têm 60% mais engajamento que mega-influenciadores. São mais autênticos e têm audiências ultra-engajadas.",
      emoji: "👥",
      color: "from-blue-500 to-cyan-500",
      stat: "60%",
      statLabel: "mais engajamento"
    },
    {
      icon: <FaHandshake className="text-5xl" />,
      title: "Parcerias de Longo Prazo",
      description: "Colaborações contínuas criam autenticidade. Seguidores percebem quando é genuíno vs. propaganda única.",
      emoji: "🤝",
      color: "from-purple-500 to-pink-500",
      stat: "3-6",
      statLabel: "meses ideal"
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: "ROI Mensurável",
      description: "Use códigos exclusivos, links rastreáveis e UTM parameters. O marketing de influência deve ser data-driven, não apenas 'brand awareness'.",
      emoji: "📊",
      color: "from-green-500 to-emerald-500",
      stat: "6.5x",
      statLabel: "ROI médio"
    },
    {
      icon: <FaInstagram className="text-5xl" />,
      title: "Escolha a Plataforma Certa",
      description: "Instagram para lifestyle, TikTok para Gen Z, YouTube para conteúdo longo, LinkedIn para B2B. Cada plataforma tem seu público.",
      emoji: "📱",
      color: "from-pink-500 to-red-500",
      stat: "4",
      statLabel: "plataformas principais"
    },
    {
      icon: <FaHeart className="text-5xl" />,
      title: "Autenticidade Acima de Tudo",
      description: "89% dos consumidores valor am autenticidade. Deixe o influenciador criar conteúdo no estilo dele - funciona melhor que scripts engessados.",
      emoji: "💖",
      color: "from-red-500 to-orange-500",
      stat: "89%",
      statLabel: "valorizam autenticidade"
    },
    {
      icon: <FaBullhorn className="text-5xl" />,
      title: "Negociação Inteligente",
      description: "Não pague apenas por post. Negocie pacotes: stories, posts, reels, salva permanente. Peça direito de uso para seus canais.",
      emoji: "📣",
      color: "from-yellow-500 to-orange-500",
      stat: "30%",
      statLabel: "economia em pacotes"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>O Poder do Marketing de Influência em 2026 - Blog AvilaOps</title>
        <meta name="description" content="Descubra como parcerias estratégicas com influenciadores podem multiplicar seu alcance e conversões em 2026." />
      </Head>

      <article className="py-20 bg-gradient-to-b from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-semibold group">
                <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Voltar para o Blog
              </Link>

              {/* Hero Section */}
              <div className="mb-12">
                <div 
                  className="bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, rgba(219, 39, 119, 0.95), rgba(126, 34, 206, 0.95), rgba(49, 46, 129, 0.95)), url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32"></div>
                  
                  <div className="relative z-10">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                      ⭐ Marketing de Influência
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      O Poder do Marketing de Influência em 2026
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed">
                      Parcerias estratégicas com influenciadores podem multiplicar seu alcance por 10x e 
                      gerar ROI de até 650%. Descubra como fazer do jeito certo.
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      A
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">AvilaOps Team</div>
                      <div className="text-sm">Especialistas em Influencer Marketing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-purple-600" />
                    <span>25 Janeiro 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-purple-600" />
                    <span>6 min de leitura</span>
                  </div>
                </div>
              </div>

              {/* Market Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-3xl font-bold mb-2">$21B</div>
                  <div className="text-xs opacity-90">Mercado global 2026</div>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-3xl font-bold mb-2">93%</div>
                  <div className="text-xs opacity-90">Marcas usam influencers</div>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-3xl font-bold mb-2">$6.50</div>
                  <div className="text-xs opacity-90">ROI por $1 investido</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-3xl font-bold mb-2">89%</div>
                  <div className="text-xs opacity-90">Confiam em recomendações</div>
                </div>
              </div>

              {/* Introduction */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 border-l-4 border-purple-600 shadow-sm">
                <div className="flex items-start gap-4">
                  <FaLightbulb className="text-4xl text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Por que Influencer Marketing Funciona?</h3>
                    <p className="text-gray-700 leading-relaxed">
                      As pessoas confiam em pessoas, não em marcas. Um influenciador é como um amigo recomendando um produto. 
                      71% dos consumidores têm mais probabilidade de comprar baseado em referências de redes sociais. 
                      É o boca-a-boca digital amplificado.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategies Grid */}
              <div className="space-y-8 mb-12">
                {strategies.map((strategy, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                  >
                    <div className={`h-2 bg-gradient-to-r ${strategy.color}`}></div>
                    <div className="p-8">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="md:col-span-3">
                          <div className="flex items-start gap-6 mb-4">
                            <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${strategy.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform text-4xl`}>
                              {strategy.emoji}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">{strategy.title}</h3>
                              <p className="text-gray-700 leading-relaxed text-lg">
                                {strategy.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="md:col-span-1 flex items-center justify-center">
                          <div className={`bg-gradient-to-br ${strategy.color} rounded-2xl p-6 text-white text-center shadow-lg w-full`}>
                            <div className="text-4xl font-bold mb-2">{strategy.stat}</div>
                            <div className="text-xs opacity-90">{strategy.statLabel}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* How to Choose */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12 border-2 border-blue-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Como Escolher o Influenciador Certo
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FaCheckCircle className="text-green-600 text-2xl" />
                      <h4 className="font-bold text-gray-900">O Que Procurar</h4>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Taxa de engajamento {'>'}3% (muito importante!)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Audiência alinhada com seu público-alvo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Valores e estética compatíveis com sua marca</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Histórico de parcerias anteriores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Comentários autênticos nos posts</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-red-600 text-2xl">⚠️</div>
                      <h4 className="font-bold text-gray-900">Red Flags</h4>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Engajamento muito baixo vs seguidores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Comentários genéricos ou spam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Picos súbitos de seguidores (bots)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Faz propaganda de concorrentes diretos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span>Não é transparente com #ad ou #publi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing Guide */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FaMoneyBillWave className="text-3xl text-green-600" />
                  Guia de Precificação Médio (Brasil 2026)
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Nano (1k-10k)</div>
                      <div className="text-sm text-gray-600">Stories, produtos ou permuta</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">R$ 100-500</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Micro (10k-100k)</div>
                      <div className="text-sm text-gray-600">Feed post + Stories</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">R$ 500-5k</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Mid-tier (100k-500k)</div>
                      <div className="text-sm text-gray-600">Pacote completo</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">R$ 5k-25k</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Macro (500k-1M)</div>
                      <div className="text-sm text-gray-600">Campanha estruturada</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">R$ 25k-100k</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 flex justify-between items-center text-white">
                    <div>
                      <div className="font-bold text-lg">Celebridades (1M+)</div>
                      <div className="text-sm opacity-90">Mega campanhas</div>
                    </div>
                    <div className="text-2xl font-bold">R$ 100k+</div>
                  </div>
                </div>
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Dica Pro:</strong> Micro-influenciadores (10k-100k) geralmente oferecem o melhor custo-benefício 
                    com engajamento autêntico e audiências nicho.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Vamos Encontrar os Influenciadores Perfeitos?</h3>
                  <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                    Nossa equipe especializada em influencer marketing pode identificar, negociar e gerenciar 
                    parcerias estratégicas que multiplicam seus resultados.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contatos"
                      className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
                    >
                      Falar com Especialista
                      <FaArrowLeft className="rotate-180" />
                    </Link>
                    <Link
                      href="/servicos"
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors border-2 border-white/30"
                    >
                      Ver Serviços
                    </Link>
                  </div>
                </div>
              </div>

              {/* Share Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <FaShareAlt className="text-2xl text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Compartilhe este artigo</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.avilaops.com/blog/marketing-influencia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-md">
                    <FaFacebook /> Facebook
                  </a>
                  <a href="https://www.linkedin.com/company/avilaops" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-all font-semibold shadow-md">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href="https://wa.me/?text=Confira este artigo sobre marketing de influência: https://www.avilaops.com/blog/marketing-influencia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all font-semibold shadow-md">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-900 rounded-2xl p-6 text-white shadow-xl">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="text-xl font-bold mb-3">Precisa de Ajuda?</h4>
                  <p className="text-gray-100 mb-4 text-sm leading-relaxed">
                    Conectamos sua marca com os influenciadores ideais.
                  </p>
                  <Link
                    href="/contatos"
                    className="block w-full bg-white text-purple-700 text-center px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
                  >
                    Entrar em Contato
                  </Link>
                </div>

                {/* Platforms */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">🎯 Plataformas Principais</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                      <FaInstagram className="text-2xl text-pink-600" />
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">Instagram</div>
                        <div className="text-gray-600">Lifestyle & Fashion</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <FaTiktok className="text-2xl text-gray-900" />
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">TikTok</div>
                        <div className="text-gray-600">Gen Z & Viral</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                      <FaYoutube className="text-2xl text-red-600" />
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">YouTube</div>
                        <div className="text-gray-600">Conteúdo Longo</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>📚</span> Artigos Relacionados
                  </h4>
                  <div className="space-y-4">
                    <Link href="/blog/conteudo-redes-sociais" className="block group">
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 group-hover:shadow-md transition-all border border-pink-100">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">📱</span>
                          <div>
                            <h5 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">Conteúdo que Engaja</h5>
                            <p className="text-sm text-gray-600">Nas redes sociais</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/blog/10-estrategias-seo-2026" className="block group">
                      <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-xl p-4 group-hover:shadow-md transition-all border border-blue-100">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">🔍</span>
                          <div>
                            <h5 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">10 Estratégias SEO</h5>
                            <p className="text-sm text-gray-600">Domine o Google</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/blog/google-ads-guia-completo" className="block group">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 group-hover:shadow-md transition-all border border-green-100">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">💰</span>
                          <div>
                            <h5 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">Guia Google Ads</h5>
                            <p className="text-sm text-gray-600">Campanhas rentáveis</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-6 text-white shadow-xl">
                  <h4 className="text-lg font-bold mb-6">💎 Dados do Mercado</h4>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl font-bold text-pink-300 mb-2">$21B</div>
                      <div className="text-sm text-gray-200">tamanho do mercado 2026</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl font-bold text-purple-300 mb-2">71%</div>
                      <div className="text-sm text-gray-200">confiam em recomendações</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
