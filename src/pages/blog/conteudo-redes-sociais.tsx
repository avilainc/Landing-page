import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaCalendar, FaClock, FaHeart, FaComment, FaShare, FaImage, FaVideo, FaPoll, FaClock as FaTime, FaLightbulb, FaCheckCircle, FaShareAlt, FaLinkedin, FaFacebook, FaWhatsapp, FaInstagram, FaChartLine } from 'react-icons/fa';

export default function ArtigoConteudoRedesSociais() {
  const techniques = [
    {
      icon: <FaImage className="text-5xl" />,
      title: "Storytelling Visual",
      description: "Conte histórias através de imagens impactantes. Use carrosséis no Instagram para narrativas sequenciais e fotos autênticas que transmitam emoção.",
      emoji: "📸",
      color: "from-pink-500 to-red-500",
      tips: ["Use fotos de alta qualidade", "Mantenha identidade visual consistente", "Mostre os bastidores"]
    },
    {
      icon: <FaVideo className="text-5xl" />,
      title: "Vídeos Curtos e Dinâmicos",
      description: "Crie Reels, TikToks e Shorts com os primeiros 3 segundos impactantes. 85% dos usuários assistem vídeos sem som - use legendas!",
      emoji: "🎬",
      color: "from-purple-500 to-pink-500",
      tips: ["Primeiros 3s são cruciais", "Use legendas sempre", "Mantenha entre 15-60 segundos"]
    },
    {
      icon: <FaPoll className="text-5xl" />,
      title: "Conteúdo Interativo",
      description: "Enquetes, quizzes e caixas de perguntas geram 3x mais engajamento. As pessoas adoram dar opinião e serem ouvidas.",
      emoji: "📊",
      color: "from-blue-500 to-cyan-500",
      tips: ["Faça perguntas abertas", "Responda todos os comentários", "Crie enquetes semanais"]
    },
    {
      icon: <FaTime className="text-5xl" />,
      title: "Timing Estratégico",
      description: "Poste quando sua audiência está online. Use analytics para descobrir os melhores horários - geralmente 8-9h, 12-13h e 18-20h.",
      emoji: "⏰",
      color: "from-orange-500 to-red-500",
      tips: ["Analise seus insights", "Teste diferentes horários", "Mantenha consistência"]
    },
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: "Valor e Educação",
      description: "80% do seu conteúdo deve agregar valor: dicas, tutoriais, insights. Apenas 20% deve ser vendas diretas.",
      emoji: "💡",
      color: "from-yellow-500 to-orange-500",
      tips: ["Regra 80/20", "Ensine algo novo", "Resolva problemas reais"]
    },
    {
      icon: <FaChartLine className="text-5xl" />,
      title: "Análise e Otimização",
      description: "Monitore métricas: salvamentos, compartilhamentos e tempo de visualização são mais importantes que curtidas.",
      emoji: "📈",
      color: "from-green-500 to-emerald-500",
      tips: ["Foque em salvamentos", "Analise tempo de visualização", "Teste A/B regularmente"]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Como Criar Conteúdo que Engaja nas Redes Sociais - Blog Avila Ops</title>
        <meta name="description" content="Aprenda técnicas comprovadas para criar conteúdo viral e engajar sua audiência nas redes sociais em 2026." />
      </Head>

      <article className="py-20 bg-gradient-to-b from-pink-50 via-white to-purple-50">
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
                  className="bg-gradient-to-br from-blue-600 via-purple-700 to-pink-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, rgba(37, 99, 235, 0.95), rgba(126, 34, 206, 0.95), rgba(131, 24, 67, 0.95)), url(https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32"></div>
                  
                  <div className="relative z-10">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                      📱 Redes Sociais & Conteúdo
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      Como Criar Conteúdo que Realmente Engaja
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed">
                      Descubra as técnicas secretas que criadores de conteúdo viral usam para conquistar milhões 
                      de seguidores e transformar audiência em comunidade engajada.
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      A
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">AvilaOps Team</div>
                      <div className="text-sm">Social Media Experts</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-pink-600" />
                    <span>20 Janeiro 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-pink-600" />
                    <span>7 min de leitura</span>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-4xl font-bold mb-2">87%</div>
                  <div className="text-sm opacity-90">Priorizam vídeo curto</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-4xl font-bold mb-2">3x</div>
                  <div className="text-sm opacity-90">Mais engajamento interativo</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white text-center shadow-lg">
                  <div className="text-4xl font-bold mb-2">71%</div>
                  <div className="text-sm opacity-90">Compartilham conteúdo útil</div>
                </div>
              </div>

              {/* Introduction */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 border-l-4 border-pink-600 shadow-sm">
                <div className="flex items-start gap-4">
                  <FaLightbulb className="text-4xl text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">O Segredo do Engajamento</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Engajamento não é sobre quantos seguidores você tem, mas sobre a qualidade da conexão com eles. 
                      Uma comunidade de 1.000 seguidores engajados vale mais que 100.000 seguidores passivos. 
                      Vamos revelar as estratégias que realmente funcionam em 2026.
                    </p>
                  </div>
                </div>
              </div>

              {/* Techniques Grid */}
              <div className="space-y-8 mb-12">
                {techniques.map((technique, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                  >
                    <div className={`h-2 bg-gradient-to-r ${technique.color}`}></div>
                    <div className="p-8">
                      <div className="flex items-start gap-6 mb-6">
                        <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${technique.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform text-4xl`}>
                          {technique.emoji}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{technique.title}</h3>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {technique.description}
                          </p>
                        </div>
                      </div>
                      <div className={`bg-gradient-to-r ${technique.color} bg-opacity-10 rounded-xl p-6`}>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <FaCheckCircle className="text-green-600" />
                          Dicas Práticas:
                        </h4>
                        <ul className="space-y-2">
                          {technique.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <span className="text-green-600 mt-1">✓</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Engagement Formula */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-12 border-2 border-indigo-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  A Fórmula do Conteúdo Viral
                </h3>
                <div className="bg-white rounded-xl p-6 mb-6">
                  <div className="text-center text-2xl font-bold text-gray-900 mb-4">
                    Valor + Emoção + Timing + CTA = Conteúdo Viral
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/50 rounded-xl p-4">
                    <div className="font-bold text-gray-900 mb-2">❤️ Gatilhos Emocionais</div>
                    <p className="text-sm text-gray-600">Use emoções: surpresa, admiração, humor ou inspiração</p>
                  </div>
                  <div className="bg-white/50 rounded-xl p-4">
                    <div className="font-bold text-gray-900 mb-2">🎬 Hook nos 3 Primeiros Segundos</div>
                    <p className="text-sm text-gray-600">Capture atenção imediatamente ou perca o viewer</p>
                  </div>
                  <div className="bg-white/50 rounded-xl p-4">
                    <div className="font-bold text-gray-900 mb-2">💬 Call-to-Action Claro</div>
                    <p className="text-sm text-gray-600">Peça para salvar, compartilhar ou comentar</p>
                  </div>
                  <div className="bg-white/50 rounded-xl p-4">
                    <div className="font-bold text-gray-900 mb-2">📱 Mobile-First Sempre</div>
                    <p className="text-sm text-gray-600">90% do consumo é mobile - otimize para isso</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-pink-600 to-purple-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Pronto para Viralizar?</h3>
                  <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                    Nossa equipe de especialistas em social media pode criar uma estratégia de conteúdo personalizada 
                    que transforma seguidores em clientes e constrói uma comunidade engajada.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contatos"
                      className="inline-flex items-center gap-2 bg-white text-pink-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
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
                  <FaShareAlt className="text-2xl text-pink-600" />
                  <h3 className="text-xl font-bold text-gray-900">Compartilhe este artigo</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.avilaops.com/blog/conteudo-redes-sociais" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-md">
                    <FaFacebook /> Facebook
                  </a>
                  <a href="https://www.instagram.com/avilaopss" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-md">
                    <FaInstagram /> Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/avilaops" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-all font-semibold shadow-md">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href="https://wa.me/?text=Confira este artigo sobre redes sociais: https://www.avilaops.com/blog/conteudo-redes-sociais" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all font-semibold shadow-md">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-pink-600 to-purple-900 rounded-2xl p-6 text-white shadow-xl">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-xl font-bold mb-3">Precisa de Ajuda?</h4>
                  <p className="text-gray-100 mb-4 text-sm leading-relaxed">
                    Nossa equipe de social media pode acelerar seus resultados.
                  </p>
                  <Link
                    href="/contatos"
                    className="block w-full bg-white text-pink-700 text-center px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
                  >
                    Entrar em Contato
                  </Link>
                </div>

                {/* Quick Tips */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>💡</span> Dicas Rápidas
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📅</span>
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">Poste Consistentemente</div>
                        <div className="text-gray-600">3-5x por semana no mínimo</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💬</span>
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">Responda Rápido</div>
                        <div className="text-gray-600">Primeiras 2h são cruciais</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📊</span>
                      <div className="text-sm">
                        <div className="font-bold text-gray-900">Analise Sempre</div>
                        <div className="text-gray-600">Use insights semanalmente</div>
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
                            <p className="text-sm text-gray-600">Domine o Google em 2026</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/blog/marketing-influencia" className="block group">
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 group-hover:shadow-md transition-all border border-purple-100">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">⭐</span>
                          <div>
                            <h5 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">Marketing de Influência</h5>
                            <p className="text-sm text-gray-600">Amplifique sua marca</p>
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
                            <p className="text-sm text-gray-600">Campanhas lucrativas</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-6 text-white shadow-xl">
                  <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <span>📊</span> Estatísticas
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl font-bold text-pink-400 mb-2">4.2B</div>
                      <div className="text-sm text-gray-300">usuários ativos nas redes sociais</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl font-bold text-purple-400 mb-2">147min</div>
                      <div className="text-sm text-gray-300">tempo médio diário nas redes</div>
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
