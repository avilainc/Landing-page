import Layout from '@/components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { FaRocket, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function Home() {
  const services = [
    {
      title: 'SEO',
      description: 'Otimização para motores de busca que aumenta sua visibilidade online.',
      icon: <FaChartLine className="text-4xl text-primary-600" />,
    },
    {
      title: 'Gestão de Redes Sociais',
      description: 'Gestão profissional das suas redes sociais com estratégias eficazes.',
      icon: <FaUsers className="text-4xl text-primary-600" />,
    },
    {
      title: 'Publicidade Online',
      description: 'Campanhas publicitárias que geram resultados reais.',
      icon: <FaRocket className="text-4xl text-primary-600" />,
    },
    {
      title: 'Criação de Websites',
      description: 'Websites modernos e responsivos que convertem visitantes em clientes.',
      icon: <FaLightbulb className="text-4xl text-primary-600" />,
    },
  ];

  return (
    <Layout>
      <Head>
        <title>AvilaOps - Estratégias Digitais Eficazes</title>
        <meta name="description" content="Transforme seu negócio com estratégias digitais inovadoras da AvilaOps" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transforme seu Negócio Digital
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Estratégias digitais eficazes que impulsionam resultados reais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contatos"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Entre em Contato
              </Link>
              <Link
                href="/servicos"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas para o sucesso digital do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Por que escolher a AvilaOps?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <FaRocket className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Resultados Comprovados
                    </h3>
                    <p className="text-gray-600">
                      Estratégias baseadas em dados que geram crescimento real para o seu negócio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <FaUsers className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Equipe Especializada
                    </h3>
                    <p className="text-gray-600">
                      Profissionais experientes dedicados ao sucesso do seu projeto.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4">
                    <FaLightbulb className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Soluções Inovadoras
                    </h3>
                    <p className="text-gray-600">
                      Tecnologia de ponta e criatividade para destacar sua marca.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Pronto para crescer?
              </h3>
              <p className="text-primary-100 mb-8 text-lg">
                Entre em contato conosco e descubra como podemos transformar seu negócio digital.
              </p>
              <Link
                href="/contatos"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">100+</div>
              <div className="text-gray-400">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">50+</div>
              <div className="text-gray-400">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">95%</div>
              <div className="text-gray-400">Taxa de Sucesso</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-gray-400">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
