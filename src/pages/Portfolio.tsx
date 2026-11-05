import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Phone } from 'lucide-react';

const Portfolio: React.FC = () => {
  const members = [
    {
      id: 'heriniaina-jacquino',
      name: 'Heriniaina Jacquino',
      role: 'Consultant IT & Fondateur',
      specialties: ['Laravel', 'React', 'Java', 'Flutter', 'Cybersécurité'],
      image: '/received_1408687110352858.jpeg',
      description: 'Expert en développement et cybersécurité, fondateur de Spray_Info'
    },
    {
      id: 'heriniriko-sylvestre',
      name: 'Heriniriko Sylvestre',
      role: 'Développeur Web Fullstack',
      specialties: ['React', 'Symfony', 'CodeIgniter', 'Base de données'],
      image: '/received_1256647165930877.jpeg',
      description: 'Développeur fullstack spécialisé en gestion de base de données'
    },
    {
      id: 'jean-pierre-lignisa',
      name: 'Jean Pierre Lignisa',
      role: 'Admin Systèmes & Réseaux',
      specialties: ['Debian', 'VoIP', 'Odoo', 'Docker', 'ESXi'],
      image: '/received_1407592307194650.jpeg',
      description: 'Administrateur systèmes et réseaux, expert en infrastructure'
    },
    {
      id: 'tsaramanga-j',
      name: 'Tsaramanga J.',
      role: 'Designer & Community Manager',
      specialties: ['Design graphique', 'Community Management', 'Vidéo', 'Réseaux sociaux'],
      image: '/received_24449454614658408.jpeg',
      description: 'Designer graphique et community manager créatif'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio{' '}
            <span style={{ color: 'rgb(23, 0, 114)' }}>Spray_Info</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Rencontrez notre équipe de professionnels passionnés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-200">
                    {member.role}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Spécialités :
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={`/portfolio/${member.id}`}
                    className="inline-flex items-center space-x-2 px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: 'rgb(23, 0, 114)' }}
                  >
                    <span>Voir le profil</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                      <Mail className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                      <Phone className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Équipe en Chiffres
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  4
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Membres fondateurs
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  10+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Années d'expérience
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  15+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Technologies maîtrisées
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Projets réalisés
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;