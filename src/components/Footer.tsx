import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id= 'footer' className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                <img src="/spray.jpg" alt="Spray_Info" className="w-8 h-8 rounded-lg object-cover" />
              </div>
              <span className="text-xl font-bold">Spray_Info</span>
            </div>
            <p className="text-gray-300 mb-4">
              Votre partenaire pour la formation et l'innovation numérique à Madagascar. 
              Nous formons les talents du futur et accompagnons la transformation digitale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/historique" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Historique
                </a>
              </li>
              <li>
                <a href="/objectifs" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Objectifs
                </a>
              </li>
              <li>
                <a href="/missions" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Missions
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">RN7, Tanambao Fierenana, Fianarantsoa</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">+261 38 37 930 53</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">spray_info@siwbs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Spray_Info. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;