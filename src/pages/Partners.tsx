import React from 'react';
import { ExternalLink, Handshake, Building } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'WBS',
      category: 'Technologie',
      description: 'Solutions web et développement',
      logo: '/WBS.png',
      collaboration: 'Projets de développement web'
    },
    {
      name: 'ManTek',
      category: 'Maintenance',
      description: 'Services techniques et maintenance',
      logo: '/ManTech.png',
      collaboration: 'Support technique et maintenance'
    },
    {
      name: 'Tsikidia Tour',
      category: 'Tourisme',
      description: 'Agence de voyage et tourisme',
      logo: '/fe.jpg',
      collaboration: 'Solutions digitales pour le tourisme',
      link: 'https://tsiky-tour.com/'
    },
    {
      name: 'Akatas',
      category: 'Commerce',
      description: 'Solutions commerciales',
      logo: '/495167336_122150327468495753_8200708617191726986_n.jpg',
      collaboration: 'Applications e-commerce',
      link: 'https://www.facebook.com/akatas.mg/'
    },
    {
      name: 'GTV',
      category: 'Médias',
      description: 'Télévision et médias',
      logo: '/246146421_1329950894127262_5270474680655836706_n.png',
      collaboration: 'Solutions médiatiques'
    },
    {
      name: 'RFA',
      category: 'Radio',
      description: 'Station de radio',
      logo: '/69987732_201223990874149_7778289981847502848_n.jpg',
      collaboration: 'Système de gestion radio'
    },
    {
      name: 'Manj\'Art',
      category: 'Art & Culture',
      description: 'Promotion artistique et culturelle',
      logo: '/516856214_1101538575211629_3170390245454563975_n.jpg',
      collaboration: 'Plateforme artistique digitale'
    }
  ];


  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Partenaires{' '}
            <span style={{ color: 'rgb(23, 0, 114)' }}>Spray_Info</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Nos collaborateurs de confiance
          </p>
        </div>

        {/* Grille des partenaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="relative">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-48 object-contain bg-white p-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-gray-700">
                    {partner.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {partner.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Collaboration :
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {partner.collaboration}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Handshake className="w-5 h-5" style={{ color: 'rgb(23, 0, 114)' }} />
                    <span className="text-sm font-medium" style={{ color: 'rgb(23, 0, 114)' }}>
                      Partenaire actif
                    </span>
                  </div>
                  
                  {partner.link ? (
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                        title={`Visiter ${partner.name}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="p-2 text-gray-300 cursor-not-allowed"
                        title="Aucun lien disponible"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    )}


                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section collaboration */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Types de Collaboration
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <Building className="w-12 h-12 mx-auto mb-4" style={{ color: 'rgb(23, 0, 114)' }} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Projets conjoints
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Développement de solutions innovantes ensemble
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <Handshake className="w-12 h-12 mx-auto mb-4" style={{ color: 'rgb(23, 0, 114)' }} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Échanges de services
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Collaboration mutuelle et partage d'expertise
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <ExternalLink className="w-12 h-12 mx-auto mb-4" style={{ color: 'rgb(23, 0, 114)' }} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Recommandations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Réseau professionnel et recommandations clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Devenir Partenaire
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Rejoignez notre réseau de partenaires et développons ensemble des solutions innovantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const footer = document.getElementById("footer");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'rgb(23, 0, 114)' }}
            >
              Nous contacter
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;