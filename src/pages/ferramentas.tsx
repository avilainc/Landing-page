import Layout from '@/components/Layout';
import Head from 'next/head';
import { useState } from 'react';
import { FaCalendar, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Ferramentas() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [posts, setPosts] = useState<any[]>([]);

  const socialPlatforms = [
    { name: 'Facebook', icon: <FaFacebook />, color: 'bg-blue-600' },
    { name: 'Instagram', icon: <FaInstagram />, color: 'bg-pink-600' },
    { name: 'LinkedIn', icon: <FaLinkedin />, color: 'bg-blue-700' },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(selectedDate);

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const prevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  return (
    <Layout>
      <Head>
        <title>Ferramentas - AvilaOps</title>
        <meta name="description" content="Ferramentas gratuitas de marketing digital da AvilaOps, incluindo calendário de redes sociais." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ferramentas Gratuitas
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Recursos úteis para otimizar sua estratégia de marketing digital
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Calendar Tool */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FaCalendar className="text-6xl text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calendário de Redes Sociais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organize e planeje suas publicações nas redes sociais de forma eficiente
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold text-gray-900">
                {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </h3>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Social Platforms */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {socialPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className={`${platform.color} text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold cursor-pointer hover:opacity-90 transition-opacity`}
                >
                  <span className="text-xl">{platform.icon}</span>
                  <span>{platform.name}</span>
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Week days header */}
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  className="text-center font-semibold text-gray-700 py-2"
                >
                  {day}
                </div>
              ))}

              {/* Empty cells for days before month starts */}
              {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square" />
              ))}

              {/* Calendar days */}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const isToday =
                  day === new Date().getDate() &&
                  selectedDate.getMonth() === new Date().getMonth() &&
                  selectedDate.getFullYear() === new Date().getFullYear();

                return (
                  <div
                    key={day}
                    className={`aspect-square p-2 border rounded-lg hover:border-primary-600 cursor-pointer transition-colors ${
                      isToday ? 'bg-primary-100 border-primary-600' : 'border-gray-200'
                    }`}
                  >
                    <div className="font-semibold text-gray-900">{day}</div>
                    <div className="mt-1 text-xs text-gray-500">
                      {/* Placeholder for posts */}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Instructions */}
            <div className="mt-8 bg-primary-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Como usar o calendário:</h4>
              <ol className="space-y-2 text-gray-700">
                <li>1. Selecione as redes sociais que deseja planejar</li>
                <li>2. Clique em um dia do calendário para adicionar uma publicação</li>
                <li>3. Defina o conteúdo, horário e plataforma de cada post</li>
                <li>4. Visualize todas as suas publicações agendadas de forma organizada</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* More Tools Coming Soon */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mais Ferramentas em Breve
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos desenvolvendo mais ferramentas gratuitas para ajudar no seu marketing digital
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Gerador de Hashtags
                </h3>
                <p className="text-gray-600">
                  Em breve
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Analisador de Concorrentes
                </h3>
                <p className="text-gray-600">
                  Em breve
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Calculadora de ROI
                </h3>
                <p className="text-gray-600">
                  Em breve
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
            Precisa de ajuda profissional?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nossa equipe pode cuidar de toda sua estratégia de marketing digital.
          </p>
          <a
            href="/contatos"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Fale com Especialistas
          </a>
        </div>
      </section>
    </Layout>
  );
}
