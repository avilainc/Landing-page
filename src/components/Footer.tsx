import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-400">Avila</span>Ops
            </h3>
            <p className="text-gray-400 mb-4">
              Transformando negócios através de estratégias digitais eficazes e inovadoras.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nos" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">SEO</li>
              <li className="text-gray-400">Gestão de Redes Sociais</li>
              <li className="text-gray-400">Publicidade Online</li>
              <li className="text-gray-400">Criação de Websites</li>
              <li className="text-gray-400">Design e Branding</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <FaPhone className="mt-1 mr-2 flex-shrink-0" />
                <div>
                  <div>🇵🇹 <a href="https://wa.me/351910205562" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">(+351) 910 205 562</a></div>
                  <div className="mt-1">🇧🇷 <a href="https://wa.me/5517997811471" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">(+55) 17 99781 1471</a></div>
                </div>
              </li>
              <li className="flex items-start text-gray-400">
                <FaEnvelope className="mt-1 mr-2 flex-shrink-0" />
                <span>atendimento@avilaops.com</span>
              </li>
              <li className="flex items-start text-gray-400">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <div>
                  <div>Porto, Portugal</div>
                  <div className="mt-1">São José do Rio Preto, Brasil</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AvilaOps. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
