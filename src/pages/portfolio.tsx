import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce de Moda Sustentável',
      category: 'E-commerce',
      description: 'Desenvolvimento completo de loja online com integração de pagamentos e gestão de estoque.',
      image: '🛍️',
      tags: ['Next.js', 'E-commerce', 'SEO', 'Design'],
      results: '+150% em conversões',
    },
    {
      title: 'Campanha de Marketing Digital',
      category: 'Marketing',
      description: 'Estratégia completa de marketing digital incluindo SEO, Google Ads e redes sociais.',
      image: '📱',
      tags: ['SEO', 'Google Ads', 'Redes Sociais'],
      results: '+200% em tráfego orgânico',
    },
    {
      title: 'Rebranding Completo',
      category: 'Branding',
      description: 'Renovação completa da identidade visual e posicionamento de marca.',
      image: '🎨',
      tags: ['Branding', 'Design', 'Estratégia'],
      results: '+80% em reconhecimento de marca',
    },
    {
      title: 'Plataforma SaaS',
      category: 'Desenvolvimento',
      description: 'Aplicação web complexa para gestão de projetos com dashboard administrativo.',
      image: '💻',
      tags: ['React', 'TypeScript', 'API', 'Dashboard'],
      results: '5.000+ usuários ativos',
    },
    {
      title: 'Campanha de Influenciadores',
      category: 'Marketing de Influência',
      description: 'Campanha com micro-influenciadores gerando alto engajamento e vendas.',
      image: '⭐',
      tags: ['Influencers', 'Instagram', 'TikTok'],
      results: '2M+ impressões',
    },
    {
      title: 'Website Institucional',
      category: 'Web Design',
      description: 'Site corporativo moderno com foco em conversão e experiência do usuário.',
      image: '🌐',
      tags: ['Web Design', 'SEO', 'Otimização'],
      results: '+120% em leads qualificados',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Portfólio - AvilaOps</title>
        <meta name="description" content="Conheça os projetos desenvolvidos pela AvilaOps e os resultados alcançados para nossos clientes." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nosso Portfólio
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Projetos que transformaram negócios e geraram resultados excepcionais
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Clientes Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">2M+</div>
              <div className="text-gray-600">Impressões Geradas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 h-48 flex items-center justify-center">
                  <span className="text-8xl">{project.image}</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-primary-600 font-semibold flex items-center">
                      <FaExternalLinkAlt className="mr-2" />
                      {project.results}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Quer ver seu projeto aqui?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco e vamos criar algo incrível juntos!
          </p>
          <Link
            href="/contatos"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Iniciar Projeto
          </Link>
        </div>
      </section>
    </Layout>
  );
}
