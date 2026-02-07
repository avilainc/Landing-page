import Layout from '@/components/Layout';
import Head from 'next/head';
import { FaEye, FaBullseye, FaHeart, FaUsers } from 'react-icons/fa';

export default function SobreNos() {
  return (
    <Layout>
      <Head>
        <title>Sobre Nós - AvilaOps</title>
        <meta name="description" content="Conheça a AvilaOps e nossa missão de transformar negócios através de estratégias digitais eficazes" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre a AvilaOps
            </h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Transformando negócios através de estratégias digitais inovadoras
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Nossa História
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A AvilaOps nasceu da paixão por ajudar empresas a alcançarem seu máximo potencial no ambiente digital. 
                Com escritórios em Portugal e Brasil, temos uma visão global e experiência local para atender às 
                necessidades específicas de cada mercado.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nossa equipe multidisciplinar combina expertise em marketing digital, desenvolvimento web, design e 
                estratégia para criar soluções completas que realmente fazem a diferença para nossos clientes.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Acreditamos que o sucesso digital não é apenas sobre tecnologia, mas sobre entender as pessoas, 
                criar conexões autênticas e entregar valor real em cada interação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <FaEye className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa Visão
              </h3>
              <p className="text-gray-600">
                Ser referência em estratégias digitais, reconhecidos pela excelência e inovação em tudo que fazemos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <FaBullseye className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-600">
                Transformar negócios através de estratégias digitais eficazes, baseadas em dados e focadas em resultados.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <FaHeart className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossos Valores
              </h3>
              <p className="text-gray-600">
                Integridade, inovação, excelência e compromisso com o sucesso dos nossos clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <FaUsers className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa Equipe
              </h3>
              <p className="text-gray-600">
                Profissionais apaixonados e experientes, dedicados a entregar soluções que superam expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Localizações */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Onde Estamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🇵🇹</span>
                <h3 className="text-2xl font-bold">Porto, Portugal</h3>
              </div>
              <p className="text-primary-100 mb-4">
                Rua Almada 333, 2 Andar<br />
                Porto, Portugal
              </p>
              <div className="border-t border-primary-400 pt-4 mt-4">
                <p className="text-primary-100">
                  Telefone: (+351) 910 205 562
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🇧🇷</span>
                <h3 className="text-2xl font-bold">São José do Rio Preto, Brasil</h3>
              </div>
              <p className="text-green-100 mb-4">
                Rua Padre Clemente Marton Segura, 295<br />
                São José do Rio Preto-SP, Brasil
              </p>
              <div className="border-t border-green-400 pt-4 mt-4">
                <p className="text-green-100">
                  Telefone: (+55) 17 99781 1471
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer no ambiente digital.
          </p>
          <a
            href="/contatos"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </Layout>
  );
}
