import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      title: '10 Estratégias de SEO para 2026',
      excerpt: 'Descubra as melhores práticas de SEO que vão dominar o mercado em 2026 e como aplicá-las no seu negócio.',
      category: 'SEO',
      date: '15 Jan 2026',
      readTime: '5 min',
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=SEO',
      slug: '10-estrategias-seo-2026',
    },
    {
      title: 'Como Criar Conteúdo que Engaja nas Redes Sociais',
      excerpt: 'Aprenda técnicas comprovadas para criar conteúdo que realmente conecta com seu público e gera engajamento.',
      category: 'Social Media',
      date: '10 Jan 2026',
      readTime: '7 min',
      image: 'https://via.placeholder.com/600x400/a855f7/ffffff?text=Social+Media',
      slug: 'conteudo-redes-sociais',
    },
    {
      title: 'O Poder do Marketing de Influência',
      excerpt: 'Entenda como parcerias estratégicas com influenciadores podem amplificar o alcance da sua marca.',
      category: 'Marketing',
      date: '5 Jan 2026',
      readTime: '6 min',
      image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Influencers',
      slug: 'marketing-influencia',
    },
    {
      title: 'Design de Sites: Tendências para 2026',
      excerpt: 'As principais tendências de design web que vão marcar o ano e como implementá-las no seu projeto.',
      category: 'Design',
      date: '28 Dez 2025',
      readTime: '8 min',
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Design',
    },
    {
      title: 'Google Ads: Guia Completo para Iniciantes',
      excerpt: 'Tudo que você precisa saber para começar suas campanhas de Google Ads com o pé direito.',
      category: 'Publicidade',
      date: '20 Dez 2025',
      readTime: '10 min',
      image: 'https://via.placeholder.com/600x400/ef4444/ffffff?text=Google+Ads',
      slug: 'google-ads-guia-completo',
    },
    {
      title: 'Branding: Construindo uma Marca Forte',
      excerpt: 'Os elementos essenciais para construir uma identidade de marca que se destaca no mercado.',
      category: 'Branding',
      date: '15 Dez 2025',
      readTime: '6 min',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Branding',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Blog - AvilaOps</title>
        <meta name="description" content="Artigos, dicas e insights sobre marketing digital, SEO, redes sociais e muito mais no blog da AvilaOps." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Blog AvilaOps
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Insights, dicas e estratégias de marketing digital para impulsionar seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-white flex flex-col justify-center">
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block w-fit mb-4">
                  Artigo em Destaque
                </span>
                <h2 className="text-4xl font-bold mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-primary-100 mb-6 text-lg">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-primary-100">{posts[0].date}</span>
                  <span className="text-primary-100">•</span>
                  <span className="text-primary-100">{posts[0].readTime} de leitura</span>
                </div>
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block w-fit"
                >
                  Ler Artigo Completo
                </Link>
              </div>
              <div className="h-96 lg:h-auto">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Artigos Recentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-semibold text-primary-600">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${post.slug || '#'}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Carregar Mais Artigos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Receba nossas novidades
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Inscreva-se em nossa newsletter e receba conteúdos exclusivos sobre marketing digital.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            <button
              type="submit"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Inscrever
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
