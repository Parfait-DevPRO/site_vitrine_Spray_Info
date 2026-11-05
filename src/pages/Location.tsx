import React from 'react';
import { Wifi, MapPin, Phone, Clock, Building } from 'lucide-react';

const Location: React.FC = () => {
  const facilities = [
    {
      name: 'Salles de cours',
      description: 'Espaces modernes équipés pour l\'apprentissage',
      icon: Building,
      features: ['Tableaux interactifs', 'Wifi haut débit']
    },
    {
      name: 'Espace de conception',
      description: 'Studio créatif pour les designers',
      icon: Building,
      features: ['Stations graphiques', 'Tablettes digitales', 'Équipements vidéo', 'Studio photo']
    },
    {
      name: 'Bureaux direction',
      description: 'Espaces administratifs et de direction',
      icon: Building,
      features: ['Salles de réunion', 'Bureaux privés', 'Espace détente']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Localisation{' '}
            <span style={{ color: 'rgb(23, 0, 114)' }}>Spray_Info</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Trouvez-nous à Fianarantsoa
          </p>
        </div>

        {/* Adresse et contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Adresse
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 mt-1" style={{ color: 'rgb(23, 0, 114)' }} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Tanambao Fierenana, G3QP+R9F
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fianarantsoa, Madagascar
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 mt-1" style={{ color: 'rgb(23, 0, 114)' }} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    +261 38 37 930 53
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Contactez-nous
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 mt-1" style={{ color: 'rgb(23, 0, 114)' }} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Lundi - Vendredi: 8h00-12h | 14h- 17h30
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte (simulation) */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Où nous trouver ?
            </h2>
            
            <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
              <img
                src="/517948507_2196418827527053_9192993955077706333_n.jpg"
                alt="Nos locaux à Fianarantsoa"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            </div>
            
            <div className="mt-4">
              <a 
                href="https://maps.google.com/?q=Centre+DevelopMind,+G3QP+R9F,+Fianarantsoa"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 text-center"
                      style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Installations */}
        <div className="mb-12">
          {/* Images des installations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/mpianatra.jpg" alt="Salle de cours moderne" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-1">Salle de Cours</h3>
                <p className="text-gray-200 text-sm">Équipements modernes et interactifs</p>
              </div>
            </div>
            
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/si.jpg" alt="Espace de travail collaboratif" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-1">Engagement collectif</h3>
                <p className="text-gray-200 text-sm">Les membres de Spray_Info réunis autour de leur vision commune</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nos Installations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                       style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {facility.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(23, 0, 114)' }}></div>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Équipements */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Équipements Techniques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center text-3xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                <Wifi className="w-10 h-10" />
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Connexion Internet
              </div>
            </div>
            
            <div className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                4
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Salles 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;