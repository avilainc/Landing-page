import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { 
  FaSearch, 
  FaUsers, 
  FaBullhorn, 
  FaLaptopCode, 
  FaPalette, 
  FaStar, 
  FaChartLine 
} from 'react-icons/fa';

export default function Servicos() {
  const services = [
    {
      title: 'SEO',
      icon: <FaSearch className="text-5xl text-primary-600" />,
      description: 'Otimização para motores de busca que coloca seu site no topo dos resultados do Google.',
      features: [
        'Análise e auditoria completa do site',
        'Pesquisa de palavras-chave estratégicas',
        'Otimização on-page e off-page',
        'Link building de qualidade',
        'Relatórios mensais de desempenho',
        'SEO local para negócios regionais',
      ],
    },
    {
      title: 'Gestão de Redes Sociais',
      icon: <FaUsers className="text-5xl text-primary-600" />,
      description: 'Gestão profissional das suas redes sociais com conteúdo engajador e estratégias eficazes.',
      features: [
        'Planejamento de conteúdo estratégico',
        'Criação de posts e stories atrativos',
        'Gerenciamento de comunidade',
        'Análise de métricas e engajamento',
        'Calendário editorial personalizado',
        'Resposta a comentários e mensagens',
      ],
    },
    {
      title: 'Publicidade Online',
      icon: <FaBullhorn className="text-5xl text-primary-600" />,
      description: 'Campanhas publicitárias assertivas que geram resultados reais e conversões efetivas.',
      features: [
        'Google Ads e campanhas de busca',
        'Facebook e Instagram Ads',
        'LinkedIn Ads para B2B',
        'Remarketing e retargeting',
        'Otimização contínua de campanhas',
        'ROI comprovado e mensurável',
      ],
    },
    {
      title: 'Criação de Websites e Lojas Online',
      icon: <FaLaptopCode className="text-5xl text-primary-600" />,
      description: 'Desenvolvimento de sites modernos, responsivos e otimizados para conversão.',
      features: [
        'Design moderno e responsivo',
        'Desenvolvimento com as melhores tecnologias',
        'E-commerce com sistemas de pagamento',
        'Otimização de velocidade e performance',
        'SEO built-in desde o início',
        'Manutenção e suporte contínuo',
      ],
    },
    {
      title: 'Design e Branding',
      icon: <FaPalette className="text-5xl text-primary-600" />,
      description: 'Criação de identidade visual memorável que destaca sua marca no mercado.',
      features: [
        'Desenvolvimento de identidade visual',
        'Criação de logotipos únicos',
        'Manual de marca completo',
        'Design gráfico para materiais diversos',
        'Papelaria e materiais institucionais',
        'Redesign e rebranding',
      ],
    },
    {
      title: 'Marketing de Influência',
      icon: <FaStar className="text-5xl text-primary-600" />,
      description: 'Conexão com influenciadores relevantes para amplificar o alcance da sua marca.',
      features: [
        'Seleção de influenciadores alinhados',
        'Negociação e gestão de parcerias',
        'Criação de campanhas colaborativas',
        'Análise de resultados e ROI',
        'Contratos e compliance',
        'Relacionamento de longo prazo',
      ],
    },
    {
      title: 'Estratégia Digital',
      icon: <FaChartLine className="text-5xl text-primary-600" />,
      description: 'Planejamento estratégico completo para alavancar seu negócio no ambiente digital.',
      features: [
        'Análise de mercado e concorrência',
        'Definição de personas e público-alvo',
        'Planejamento de marketing digital 360°',
        'Consultoria estratégica personalizada',
        'KPIs e métricas de sucesso',
        'Acompanhamento e ajustes contínuos',
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Serviços - AvilaOps</title>
        <meta name="description" content="Conheça todos os serviços de marketing digital da AvilaOps. Soluções completas para o sucesso do seu negócio online." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Soluções completas de marketing digital para transformar seu negócio e alcançar resultados extraordinários
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-12 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            Pronto para impulsionar seu negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco e descubra como nossos serviços podem transformar sua presença digital.
          </p>
          <Link
            href="/contatos"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Solicite um Orçamento
          </Link>
        </div>
      </section>
    </Layout>
  );
}
