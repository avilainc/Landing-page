import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaCalendar, FaClock, FaGoogle, FaSearch, FaChartLine, FaDollarSign, FaMousePointer, FaLightbulb, FaCheckCircle, FaShareAlt, FaLinkedin, FaFacebook, FaWhatsapp, FaBullseye, FaCog, FaRocket } from 'react-icons/fa';

export default function ArtigoGoogleAdsCompleto() {
  const steps = [
    {
      icon: <FaBullseye className="text-5xl" />,
      title: "Defina Objetivos Claros",
      description: "Vendas, leads, tráfego ou awareness? Cada objetivo requer uma estratégia diferente. Seja específico: 'Gerar 50 leads qualificados/mês com CPA máximo de R$ 80'.",
      emoji: "🎯",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaSearch className="text-5xl" />,
      title: "Pesquisa de Palavras-Chave",
      description: "Use o Planejador de Palavras-Chave do Google. Foque em intenção de compra: palavras como 'comprar', 'preço', 'melhor' têm alta conversão.",
      emoji: "🔍",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaMousePointer className="text-5xl" />,
      title: "Crie Anúncios Irresistíveis",
      description: "Título com palavra-chave + benefício. Descrição com CTA forte. Use extensões de anúncio: sitelinks, chamadas, snippets estruturados.",
      emoji: "✍️",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaBullseye className="text-5xl" />,
      title: "Landing Pages Otimizadas",
      description: "Página de destino deve corresponder ao anúncio. Carregamento {' <'} 3s, CTA claro, mobile-optimized. 70% do sucesso está aqui!",
      emoji: "📄",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaDollarSign className="text-5xl" />,
      title: "Estratégias de Lance",
      description: "CPC manual para controle total inicial. Maximize conversões após 30+ conversões/mês. Use ROAS-alvo para eCommerce.",
      emoji: "💰",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaCog className="text-5xl" />,
      title: "Remarketing Inteligente",
      description: "80% dos visitantes não convertem na 1ª visita. Crie listas personalizadas: carrinho abandonado, páginas visitadas, tempo no site.",
      emoji: "🔄",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: "Monitore Métricas Certas",
      description: "Impressões, CTR, CPC, Taxa de Conversão, CPA, ROAS, Quality Score. Otimize semanalmente baseado em dados reais.",
      emoji: "📊",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <FaRocket className="text-5xl" />,
      title: "Teste e Otimize Sempre",
      description: "Teste A/B de anúncios, páginas, lances. Pause o que not funciona. Dobre investimento no que converte. Melhoria contínua é a chave.",
      emoji: "🚀",
      color: "from-orange-500 to-red-500"
    }
  ];

  const campaignTypes = [
    { name: "Rede de Pesquisa", best: "Capturar demanda existente", emoji: "🔍" },
    { name: "Rede de Display", best: "Awareness e remarketing", emoji: "🖼️" },
    { name: "Shopping", best: "eCommerce com catálogo", emoji: "🛒" },
    { name: "Vídeo (YouTube)", best: "Storytelling e branding", emoji: "📹" },
    { name: "Performance Max", best: "Automatização com IA", emoji: "🤖" },
    { name: "App", best: "Downloads e engajamento", emoji: "📱" }
  ];

  return (
    <Layout>
      <Head>
        <title>Google Ads: Guia Completo para Campanhas de Sucesso - Blog AvilaOps</title>
        <meta name="description" content="Aprenda a criar, otimizar e escalar campanhas Google Ads que realmente geram resultados e ROI positivo." />
      </Head>

      <article className="py-20 bg-gradient-to-b from-blue-50 via-white to-green-50">
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
                <div className="bg-gradient-to-br from-blue-600 via-green-600 to-teal-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32"></div>
                  
                  <div className="relative z-10">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                      💰 Google Ads & PPC
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      Google Ads: Guia Completo para Resultados Reais
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed">
                      Domine a plataforma de anúncios mais poderosa do mundo. Aprenda a criar campanhas 
                      que geram ROI de 300%+ e transformam cliques em clientes pagantes.
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      A
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">AvilaOps Team</div>
                      <div className="text-sm">Google Ads Certified Specialists</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-blue-600" />
                    <span>1 Fevereiro 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-600" />
                    <span>10 min de leitura</span>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-3xl font-bold mb-2">$284B</div>
                  <div className="text-xs opacity-90">Receita Google Ads 2023</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-3xl font-bold mb-2">800%</div>
                  <div className="text-xs opacity-90">ROI médio possível</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-3xl font-bold mb-2">65%</div>
                  <div className="text-xs opacity-90">clicam em ads de compra</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-3xl font-bold mb-2">$8</div>
                  <div className="text-xs opacity-90">ganho por $1 investido</div>
                </div>
              </div>

              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-12 border-l-4 border-blue-600 shadow-sm">
                <div className="flex items-start gap-4">
                  <FaLightbulb className="text-4xl text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Por que Google Ads?</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Enquanto SEO leva meses, Google Ads entrega resultados em horas. Você paga apenas quando alguém clica (PPC). 
                      Com segmentação precisa, alcança pessoas procurando ativamente pelo que você oferece. 
                      É o canal com maior intenção de compra do marketing digital.
                    </p>
                  </div>
                </div>
              </div>

              {/* Campaign Types */}
              <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">📌</span>
                  Tipos de Campanhas Google Ads
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {campaignTypes.map((type, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 hover:shadow-md transition-all">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">{type.emoji}</span>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">{type.name}</h4>
                          <p className="text-sm text-gray-600">
                            <strong>Melhor para:</strong> {type.best}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps Grid */}
              <div className="space-y-8 mb-12">
                <h3 className="text-3xl font-bold text-gray-900">8 Passos para Campanhas de Sucesso</h3>
                
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                  >
                    <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
                    <div className="p-8">
                      <div className="flex items-start gap-6">
                        <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform text-4xl`}>
                          {step.emoji}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-4xl font-bold text-gray-200">{String(index + 1).padStart(2, '0')}</span>
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 mb-12 border-2 border-indigo-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">📊</span>
                  Métricas Essenciais Para Acompanhar
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Métricas de Performance</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700"><strong>Impressões:</strong> Quantas vezes mostrado</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700"><strong>CTR:</strong> % cliques/impressão</span>
                        <span className="text-green-600 font-bold">{'>'}3%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700"><strong>CPC:</strong> Custo por clique</span>
                        <span className="text-blue-600 font-bold">Varia</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700"><strong>Quality Score:</strong> Nota 1-10</span>
                        <span className="text-green-600 font-bold">{'>'}7</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Métricas de Negócio</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700"><strong>Taxa Conversão:</strong> % cliques que convertem</span>
                        <span className="text-green-600 font-bold">{'>'}2.5%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700"><strong>CPA:</strong> Custo por aquisição</span>
                        <span className="text-blue-600 font-bold">Meta</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700"><strong>ROAS:</strong> Retorno sobre gasto</span>
                        <span className="text-green-600 font-bold">{'>'}400%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-gray-700"><strong>LTV:</strong> Valor tempo de vida</span>
                        <span className="text-purple-600 font-bold">{'>'}3x CPA</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Dica Pro:</strong> Foque em ROAS e CPA, não apenas CPC. Um CPC mais alto pode gerar CPA menor se a conversão for melhor!
                  </p>
                </div>
              </div>

              {/* Optimization Tips */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border-2 border-green-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FaCheckCircle className="text-3xl text-green-600" />
                  Dicas de Otimização Avançadas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Use Palavras Negativas</h4>
                      <p className="text-gray-700">Exclua termos que atraem cliques errados. Ex: "grátis", "barato" se vende premium</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Segmente por Dispositivo</h4>
                      <p className="text-gray-700">Mobile converte diferente de desktop. Ajuste lances por dispositivo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Horários e Locais</h4>
                      <p className="text-gray-700">Analise quando/onde converte mais. Aumente lances nos melhores momentos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Teste 3+ Anúncios</h4>
                      <p className="text-gray-700">O Google otimiza automaticamente. Sempre tenha variações rodando</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Estrutura de Campanha SKAG</h4>
                      <p className="text-gray-700">Single Keyword Ad Groups = mais controle e Quality Score melhor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-blue-600 to-green-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Pronto para Escalar suas Vendas?</h3>
                  <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                    Nossa equipe de especialistas certificados Google Ads pode criar e gerenciar campanhas 
                    otimizadas que entregam ROI positivo desde o primeiro mês.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contatos"
                      className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
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
                  <FaShareAlt className="text-2xl text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Compartilhe este artigo</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.avilaops.com/blog/google-ads-guia-completo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-md">
                    <FaFacebook /> Facebook
                  </a>
                  <a href="https://www.linkedin.com/company/avilaops" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-all font-semibold shadow-md">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href="https://wa.me/?text=Confira este guia completo de Google Ads: https://www.avilaops.com/blog/google-ads-guia-completo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all font-semibold shadow-md">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-blue-600 to-green-900 rounded-2xl p-6 text-white shadow-xl">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="text-xl font-bold mb-3">Precisa de Ajuda?</h4>
                  <p className="text-gray-100 mb-4 text-sm leading-relaxed">
                    Gestão profissional de Google Ads com foco em ROI.
                  </p>
                  <Link
                    href="/contatos"
                    className="block w-full bg-white text-blue-700 text-center px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
                  >
                    Entrar em Contato
                  </Link>
                </div>

                {/* Quick Wins */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>⚡</span> Quick Wins
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">1️⃣</span>
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">Comece Pequeno</div>
                        <div className="text-gray-600">R$ 20-50/dia é suficiente para testar</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">2️⃣</span>
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">Tracking Correto</div>
                        <div className="text-gray-600">Configure conversão desde o dia 1</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">3️⃣</span>
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">Paciência</div>
                        <div className="text-gray-600">Dê 2-4 semanas para otimizar</div>
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
                    <Link href="/blog/10-estrategias-seo-2026" className="block group">
                      <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-xl p-4 group-hover:shadow-md transition-all border border-blue-100">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">🔍</span>
                          <div>
                            <h5 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">10 Estratégias SEO</h5>
                            <p className="text-sm text-gray-600">Tráfego orgânico</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/blog/conteudo-redes-sociais" className="block group">
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 group-hover:shadow-md transition-all border border-pink-100">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">📱</span>
                          <div>
                            <h5 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">Conteúdo Engajador</h5>
                            <p className="text-sm text-gray-600">Para redes sociais</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/blog/marketing-influencia" className="block group">
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 group-hover:shadow-md transition-all border border-purple-100">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">⭐</span>
                          <div>
                            <h5 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">Marketing Influência</h5>
                            <p className="text-sm text-gray-600">Amplifique sua marca</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-6 text-white shadow-xl">
                  <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <span>📊</span> Estatísticas
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl font-bold text-blue-300 mb-2">$2</div>
                      <div className="text-sm text-gray-200">CPC médio no Brasil</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl font-bold text-green-300 mb-2">3.75%</div>
                      <div className="text-sm text-gray-200">taxa conversão média</div>
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
