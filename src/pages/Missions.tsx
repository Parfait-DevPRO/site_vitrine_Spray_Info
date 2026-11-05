import React from 'react';
import { Users, Globe, TrendingUp, Zap } from 'lucide-react';

const Missions: React.FC = () => {
  const missions = [
    {
      icon: Users,
      title: 'Former les talents du numérique (Web 3.0)',
      description: 'Préparer la nouvelle génération aux technologies émergentes',
      details: [
        'Formation aux technologies Web 3.0',
        'Blockchain et cryptomonnaies',
        'Intelligence artificielle',
        'Développement décentralisé',
        'NFT et métavers'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Globe,
      title: 'Rendre la technologie accessible à tous',
      description: 'Démocratiser l\'accès à la formation numérique',
      details: [
        'Formations adaptées à tous les niveaux',
        'Méthodes pédagogiques innovantes',
        'Prix accessibles',
        'Support continu',
        'Ressources en ligne'
      ],
      color: 'bg-green-500'
    },
    {
      icon: TrendingUp,
      title: 'Accompagnement stratégique avec Spray_Idea',
      description: 'Conseiller les entreprises dans leur transformation',
      details: [
        'Audit digital',
        'Stratégie de transformation',
        'Accompagnement personnalisé',
        'Suivi des performances',
        'Optimisation continue'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: Zap,
      title: 'Répondre aux besoins numériques avec TechnoSupport',
      description: 'Fournir des solutions techniques complètes',
      details: [
        'Développement sur mesure',
        'Maintenance et support',
        'Hébergement et cloud',
        'Sécurité informatique',
        'Intégration de systèmes'
      ],
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Missions de{' '}
            <span style={{ color: 'rgb(23, 0, 114)' }}>Spray_Info</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Notre engagement pour l'avenir du numérique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
                       style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                    <mission.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {mission.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {mission.description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Détails :
                  </h3>
                  {mission.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(23, 0, 114)' }}></div>
                      <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Impact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Depuis notre création, nous nous efforçons de créer un impact positif sur 
              l'écosystème numérique malgache et de contribuer au développement des compétences 
              technologiques dans la région.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  100+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Étudiants formés
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  15+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Projets réalisés
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  7
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Partenaires actifs
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  3
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Pôles d'activité
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Rejoignez notre mission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ensemble, construisons l'avenir du numérique à Madagascar
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

export default Missions;