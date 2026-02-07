import Layout from '@/components/Layout';
import Head from 'next/head';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contatos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <Layout>
      <Head>
        <title>Contatos - AvilaOps</title>
        <meta name="description" content="Entre em contato com a AvilaOps. Estamos em Portugal e Brasil prontos para atender você." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Estamos prontos para transformar seu negócio digital. Fale conosco!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="(+351) ou (+55)"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="seo">SEO</option>
                    <option value="social-media">Gestão de Redes Sociais</option>
                    <option value="ads">Publicidade Online</option>
                    <option value="website">Criação de Websites e Lojas Online</option>
                    <option value="design">Design e Branding</option>
                    <option value="influencer">Marketing de Influência</option>
                    <option value="strategy">Estratégia Digital</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>

                {submitMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h2>

              {/* Portugal Office */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white mb-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🇵🇹</span>
                  <h3 className="text-2xl font-bold">Escritório em Portugal</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-2xl mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Endereço:</p>
                      <p className="text-primary-100">
                        Rua Almada 333, 2 Andar<br />
                        Porto, Portugal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-2xl mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Telefone:</p>
                      <a href="https://wa.me/351910205562" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-white transition-colors">(+351) 910 205 562</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brazil Office */}
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 text-white mb-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🇧🇷</span>
                  <h3 className="text-2xl font-bold">Escritório no Brasil</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-2xl mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Endereço:</p>
                      <p className="text-green-100">
                        Rua Padre Clemente Marton Segura, 295<br />
                        São José do Rio Preto-SP, Brasil
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-2xl mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Telefone:</p>
                      <a href="https://wa.me/5517997811471" target="_blank" rel="noopener noreferrer" className="text-green-100 hover:text-white transition-colors">(+55) 17 99781 1471</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* General Contact */}
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaEnvelope className="text-2xl text-primary-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">E-mail:</p>
                      <a href="mailto:atendimento@avilaops.com" className="text-primary-600 hover:underline">
                        atendimento@avilaops.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="text-2xl text-primary-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Horário de Atendimento:</p>
                      <p className="text-gray-600">Segunda a Sexta: 9h - 18h</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-gray-300">
                  <p className="font-semibold text-gray-900 mb-4">Siga-nos nas redes sociais:</p>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/share/1EAbpw3NP7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                      <FaFacebook size={20} />
                    </a>
                    <a href="https://instagram.com/avilaopss" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                      <FaInstagram size={20} />
                    </a>
                    <a href="https://www.linkedin.com/company/avilaops" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors">
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nossas Localizações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary-600 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center">
                  🇵🇹 Porto, Portugal
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Rua Almada 333, 2 Andar<br />
                  Porto, Portugal
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Mapa do Google Maps</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center">
                  🇧🇷 São José do Rio Preto, Brasil
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Rua Padre Clemente Marton Segura, 295<br />
                  São José do Rio Preto-SP, Brasil
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Mapa do Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
