import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Target, MapPin, Handshake } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Portfolio',
      description: 'Découvrez notre équipe de professionnels passionnés',
      link: '/portfolio'
    },
    {
      icon: Target,
      title: 'Objectifs',
      description: 'Nos ambitions pour transformer le numérique',
      link: '/objectifs'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      description: 'Trouvez-nous à Fianarantsoa',
      link: '/localisation'
    },
    {
      icon: Handshake,
      title: 'Partenaires',
      description: 'Nos collaborateurs de confiance',
      link: '/partenaires'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 opacity-40">
          <img src="/etudiant.jpg" alt="Formation" className="w-full h-full object-cover" />
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(23, 0, 114)' }}></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full animate-pulse delay-1000" style={{ backgroundColor: 'rgb(23, 0, 114)' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Bienvenue chez{' '}
            <span style={{ color: 'rgb(23, 0, 114)' }}>Spray_Info</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-delay">
            Votre partenaire pour la formation et l'innovation numérique
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-2">
            <Link
              to="/portfolio"
              className="px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              style={{ backgroundColor: 'rgb(23, 0, 114)' }}
            >
              Découvrir notre équipe
              <ChevronRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/historique"
              className="px-8 py-4 bg-transparent border-2 text-gray-900 dark:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ borderColor: 'rgb(23, 0, 114)' }}
            >
              Notre histoire
            </Link>
          </div>
        </div>
      </section>

      {/* Formation Images Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            <span className="inline-flex items-center gap-2 justify-center">
              Nos Formations Spray_Learn
              <img src="/learn.jpg" alt="Logo" width={30} height={30} className="inline-block "  />
            </span>
          </h2>

          
          {/* Formations disponibles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Formations Informatiques */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                   style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                <span className="text-white font-bold text-xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Formations Informatiques
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Développement Web (React, Laravel, Symfony)</li>
                <li>• Programmation (Java, Python, JavaScript)</li>
                <li>• Base de données (MySQL, PostgreSQL)</li>
                <li>• Administration Systèmes & Réseaux</li>
                <li>• Cybersécurité</li>
              </ul>
            </div>
            
            {/* Formations Technologiques */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                   style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                <span className="text-white font-bold text-xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Formations Technologiques
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Docker & Virtualisation</li>
                <li>• Cloud Computing</li>
                <li>• DevOps</li>
                <li>• Intelligence Artificielle</li>
                <li>• Web 3.0 & Blockchain</li>
              </ul>
            </div>
            
            {/* Développement Personnel */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                   style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                <span className="text-white font-bold text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Développement Personnel
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Leadership</li>
                <li>• Communication</li>
                <li>• Gestion de projet</li>
                <li>• Entrepreneuriat</li>
                <li>• Soft Skills</li>
              </ul>
            </div>
            
            {/* Marketing & Communication */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                   style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                <span className="text-white font-bold text-xl">📢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Marketing & Communication
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Marketing Digital</li>
                <li>• Community Management</li>
                <li>• Design Graphique</li>
                <li>• Création de contenu</li>
                <li>• Stratégie de marque</li>
              </ul>
            </div>
            
            {/* Formations Spray_X */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                   style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                <span className="text-white font-bold text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Université Spray_X
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Génie Logiciel Informatique</li>
                <li>• Administration Systèmes & Réseaux</li>
                <li>• Intelligence version 3.0</li>
                <li>• Pédagogie moderne</li>
                <li>• Diplômes certifiés</li>
              </ul>
            </div>
            
            {/* Services Professionnels */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                   style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Services Professionnels
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Spray_Idea (Conseil)</li>
                <li>• TechnoSupport (Prestation)</li>
                <li>• Projets clients réels</li>
                <li>• Accompagnement entreprises</li>
                <li>• Solutions sur mesure</li>
              </ul>
            </div>
          </div>
          
          {/* Section Spray_Learn */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Spray_Learn
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
                Spray_Learn représente l'ensemble de toutes les formations qui existent dans Spray_Info. 
                De l'informatique au développement personnel, en passant par le marketing et les technologies 
                émergentes, nous offrons un écosystème complet de formation pour tous les niveaux.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                    15+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Modules de formation
                  </div>
                </div>
                
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
                    6
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Domaines d'expertise
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                    2
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Filières universitaires
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team and Students Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Notre Environnement de Formation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/salle_cours.jpg" alt="Salle de formation" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-1">Salle de Formation</h3>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/certificat.jpg" alt="Remise de certificats" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-1">Remise de Certificats</h3>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/mpianatra.jpg" alt="Étudiants en formation" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-1">Nos Apprenants</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Explorez Spray_Info
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                     style={{ backgroundColor: 'rgb(23, 0, 114)' }}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                     style={{ color: 'rgb(23, 0, 114)' }}>
                  <span>En savoir plus</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Qui sommes-nous ?
          </h2>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Spray_Info est une entreprise de formation et d'innovation numérique fondée en janvier 2022 
              par Heriniaina Jacquino, Sylvestre Heriniriko et Jean Pierre Lignisa.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Notre mission est de former les talents du numérique de demain et de rendre la technologie 
              accessible à tous. Nous proposons des formations pratiques, des services de conseil et 
              des solutions numériques innovantes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  100+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Étudiants formés
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  3
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Années d'expérience
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  7
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Partenaires actifs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;