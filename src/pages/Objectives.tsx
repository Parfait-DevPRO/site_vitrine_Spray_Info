import React from 'react';
import { GraduationCap, Building, Lightbulb, Monitor, Wrench } from 'lucide-react';

const Objectives: React.FC = () => {
  const objectives = [
    {
      icon: GraduationCap,
      title: 'Formation & Insertion Professionnelle',
      description: 'Former des professionnels qualifiés et les accompagner dans leur insertion sur le marché du travail',
      features: [
        'Formations pratiques et théoriques',
        'Suivi personnalisé des étudiants',
        'Partenariats avec les entreprises',
        'Placement professionnel'
      ]
    },
    {
      image: '/521530099_779847551135335_1072257923149988584_n.jpg',
      title: 'Université Privée Spray_X',
      description: 'Créer une université privée moderne avec 2 filières spécialisées',
      features: [
        'Formation supérieure certifiée',
        'Cursus adapté au marché',
        'Infrastructures modernes',
        'Corps enseignant qualifié'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Cabinet de Conseil Spray_Idea',
      description: 'Accompagner les entreprises dans leur transformation digitale',
      features: [
        'Conseil stratégique',
        'Accompagnement digital',
        'Analyse des besoins',
        'Solutions sur mesure'
      ]
    },
    {
      icon: Monitor,
      title: 'Services Numériques TechnoSupport',
      description: 'Fournir des services de prestation numérique de qualité',
      features: [
        'Développement web et mobile',
        'Maintenance système',
        'Support technique',
        'Solutions cloud'
      ]
    },
    {
      icon: Wrench,
      title: 'Apprentissage Pratique',
      description: 'Proposer un apprentissage basé sur des projets réels avec des clients',
      features: [
        'Projets clients réels',
        'Mise en situation professionnelle',
        'Retours d\'expérience',
        'Portfolio professionnel'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Objectifs de{' '}
            <span style={{ color: 'rgb(23, 0, 114)' }}>Spray_Info</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Nos ambitions pour transformer l'écosystème numérique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                    style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                  {objective.image ? (
                    <img
                      src={objective.image}
                      alt={objective.title}
                      className="w-17 h-17 object-contain"
                    />
                  ) : (
                    <objective.icon className="w-8 h-8 text-white" />
                  )}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {objective.title}
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {objective.description}
              </p>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Points clés :
                </h3>
                {objective.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(23, 0, 114)' }}></div>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Vision
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Devenir le leader de la formation numérique à Madagascar en proposant des solutions 
              innovantes et adaptées aux besoins du marché. Notre objectif est de créer un écosystème 
              complet qui accompagne les apprenants depuis leur formation jusqu'à leur épanouissement 
              professionnel.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  2025
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Lancement de Spray_X
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  500+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Étudiants visés
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
      </div>
    </div>
  );
};

export default Objectives;