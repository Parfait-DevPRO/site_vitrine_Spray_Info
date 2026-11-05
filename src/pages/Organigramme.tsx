import React from 'react';
import { User, Users, Settings, Phone } from 'lucide-react';

const Organigramme: React.FC = () => {
  const orgData = {
    director: {
      name: 'Heriniaina Jacquino',
      role: 'Directeur Général',
      icon: User,
      color: 'rgb(23, 0, 114)'
    },
    formateurs: [
      {
        name: 'Heriniriko Sylvestre',
        role: 'Formateur Senior',
        specialty: 'Développement Web'
      },
      {
        name: 'Jean Pierre Lignisa',
        role: 'Formateur Senior',
        specialty: 'Systèmes & Réseaux'
      }
    ],
    secretaire: {
      name: 'Tsaramanga J.',
      role: 'Secrétaire & Communication',
      specialty: 'Design & Community Management'
    },
    techniciens: [
      {
        name: 'Équipe technique',
        role: 'Support & Maintenance',
        specialty: 'Assistance technique'
      }
    ]
  };

  const departments = [
    {
      title: 'Direction',
      icon: User,
      color: 'rgb(23, 0, 114)',
      members: [orgData.director]
    },
    {
      title: 'Formation',
      icon: Users,
      color: 'rgb(34, 197, 94)',
      members: orgData.formateurs
    },
    {
      title: 'Administration',
      icon: Settings,
      color: 'rgb(251, 146, 60)',
      members: [orgData.secretaire]
    },
    {
      title: 'Support Technique',
      icon: Phone,
      color: 'rgb(139, 92, 246)',
      members: orgData.techniciens
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Organigramme{' '}
            <span style={{ color: 'rgb(23, 0, 114)' }}>Spray_Info</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Structure organisationnelle de notre équipe
          </p>
        </div>

        {/* Directeur */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-md hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                   style={{ backgroundColor: orgData.director.color }}>
                <orgData.director.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {orgData.director.name}
              </h2>
              <p className="text-lg font-medium mb-2" style={{ color: orgData.director.color }}>
                {orgData.director.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Vision stratégique et direction générale
              </p>
            </div>
          </div>
        </div>

        {/* Ligne de connexion */}
        <div className="flex justify-center mb-8">
          <div className="w-px h-16 bg-gray-300 dark:bg-gray-600"></div>
        </div>

        {/* Départements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.slice(1).map((department, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                     style={{ backgroundColor: department.color }}>
                  <department.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {department.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {department.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="border-l-4 pl-4 py-2" style={{ borderColor: department.color }}>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h4>
                    <p className="text-sm font-medium mb-1" style={{ color: department.color }}>
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {member.specialty}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Responsabilités */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Responsabilités par Département
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Direction
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Vision stratégique et planification</li>
                  <li>• Gestion des partenariats</li>
                  <li>• Développement commercial</li>
                  <li>• Supervision générale</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Formation
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Conception des programmes</li>
                  <li>• Animation des cours</li>
                  <li>• Évaluation des étudiants</li>
                  <li>• Suivi pédagogique</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Administration
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Gestion administrative</li>
                  <li>• Communication externe</li>
                  <li>• Design et marketing</li>
                  <li>• Gestion des réseaux sociaux</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Support Technique
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Maintenance informatique</li>
                  <li>• Support utilisateurs</li>
                  <li>• Gestion des équipements</li>
                  <li>• Assistance technique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organigramme;