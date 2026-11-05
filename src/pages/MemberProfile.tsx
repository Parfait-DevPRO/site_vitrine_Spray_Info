import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Linkedin, Github, Award, Briefcase } from 'lucide-react';

const MemberProfile: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();

  const memberData: Record<string, any> = {
    'heriniaina-jacquino': {
      name: 'Heriniaina Jacquino',
      role: 'Consultant IT & Fondateur de Spray_Info',
      image: '/441.jpg',
      bio: 'Expert en développement et cybersécurité, Heriniaina est le fondateur visionnaire de Spray_Info. Fort de plusieurs années d\'expérience dans l\'industrie IT, il guide l\'équipe vers l\'excellence technique et l\'innovation.',
      skills: ['Laravel', 'React', 'Java', 'Flutter', 'Cybersécurité', 'Réseaux', 'Linux', 'Windows'],
      experience: [
        {
          title: 'Fondateur & Consultant IT',
          company: 'Spray_Info',
          period: '2022 - Présent',
          description: 'Direction technique et stratégique de l\'entreprise'
        },
        {
          title: 'Développeur Senior',
          company: 'Projets indépendants',
          period: '2019 - 2022',
          description: 'Développement d\'applications web et mobile'
        }
      ],
      projects: [
        'Système de gestion pour Radio RFA',
        'Application mobile pour ALSHAME',
        'Plateforme web pour AINA',
        'Solutions de cybersécurité pour entreprises'
      ],
      certifications: [
        'Certification Laravel Advanced',
        'React Professional Developer',
        'Cybersecurity Specialist',
        'System Administrator Linux'
      ]
    },
    'heriniriko-sylvestre': {
      name: 'Heriniriko Sylvestre',
      role: 'Développeur Web Fullstack',
      image: '/received_1256647165930877.jpeg',
      bio: 'Développeur fullstack passionné, Sylvestre excelle dans la création d\'applications web robustes et la gestion de bases de données complexes. Il apporte son expertise technique aux projets les plus ambitieux.',
      skills: ['React', 'Symfony', 'CodeIgniter', 'MySQL', 'PostgreSQL', 'MERISE', 'SCRUM', 'Git'],
      experience: [
        {
          title: 'Développeur Web Fullstack',
          company: 'Spray_Info',
          period: '2022 - Présent',
          description: 'Développement d\'applications web et gestion de bases de données'
        },
        {
          title: 'Développeur Backend',
          company: 'Projets freelance',
          period: '2020 - 2022',
          description: 'Création d\'APIs et architecture backend'
        }
      ],
      projects: [
        'Système de gestion des compteurs',
        'Application de gestion d\'eau potable',
        'Plateforme e-commerce',
        'API REST pour applications mobiles'
      ],
      certifications: [
        'Symfony Certified Developer',
        'React Advanced Concepts',
        'Database Design Expert',
        'Scrum Master Certified'
      ]
    },
    'jean-pierre-lignisa': {
      name: 'Jean Pierre Lignisa',
      role: 'Admin Systèmes & Réseaux',
      image: '/5received_1407592307194650.jpeg',
      bio: 'Administrateur systèmes et réseaux chevronné, Jean Pierre est l\'expert en infrastructure de l\'équipe. Il conçoit et maintient des systèmes sécurisés et performants pour nos clients.',
      skills: ['Debian', 'VoIP', 'Odoo', 'Docker', 'ESXi', 'Firewall', 'Monitoring', 'Backup'],
      experience: [
        {
          title: 'Admin Systèmes & Réseaux',
          company: 'Spray_Info',
          period: '2022 - Présent',
          description: 'Gestion de l\'infrastructure et sécurité des systèmes'
        },
        {
          title: 'Technicien Réseau',
          company: 'Douane Madagascar',
          period: '2019 - 2022',
          description: 'Maintenance et sécurisation des réseaux'
        }
      ],
      projects: [
        'Infrastructure sécurisée pour la Douane',
        'Système VoIP pour ALSHAME',
        'Plateforme Takalou',
        'Solutions de monitoring réseau'
      ],
      certifications: [
        'Linux System Administrator',
        'Docker Certified Associate',
        'VMware vSphere Certified',
        'Network Security Specialist'
      ]
    },
    'tsaramanga-j': {
      name: 'Tsaramanga J.',
      role: 'Designer Graphique & Community Manager',
      image: '/received_24449454614658408.jpeg',
      bio: 'Designer créatif et community manager dynamique, Tsaramanga donne vie aux idées à travers ses créations visuelles et gère l\'image de marque de Spray_Info sur les réseaux sociaux.',
      skills: ['Design graphique', 'Community Management', 'Vidéo', 'Photoshop', 'Illustrator', 'After Effects', 'Social Media'],
      experience: [
        {
          title: 'Designer & Community Manager',
          company: 'Spray_Info',
          period: '2022 - Présent',
          description: 'Création graphique et gestion des réseaux sociaux'
        },
        {
          title: 'Designer Freelance',
          company: 'Projets indépendants',
          period: '2020 - 2022',
          description: 'Création de supports visuels pour diverses entreprises'
        }
      ],
      projects: [
        'Identité visuelle Spray_Info',
        'Campagnes publicitaires',
        'Contenus vidéo promotionnels',
        'Gestion réseaux sociaux'
      ],
      certifications: [
        'Adobe Certified Expert',
        'Social Media Marketing',
        'Video Production Specialist',
        'Brand Identity Design'
      ]
    }
  };

  const member = memberData[memberId || ''];

  if (!member) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Membre non trouvé
          </h1>
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: 'rgb(23, 0, 114)' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour au portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/portfolio"
          className="inline-flex items-center space-x-2 mb-8 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour au portfolio</span>
        </Link>

        {/* Header */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h1>
              <p className="text-xl mb-4" style={{ color: 'rgb(23, 0, 114)' }}>
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {member.bio}
              </p>
              
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                  <span>Contact</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                  <span>Appeler</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Compétences
            </h2>
            <div className="flex flex-wrap gap-3">
              {member.skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Expérience
            </h2>
            <div className="space-y-6">
              {member.experience.map((exp: any, index: number) => (
                <div key={index} className="border-l-4 pl-4" style={{ borderColor: 'rgb(23, 0, 114)' }}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Projets Réalisés
            </h2>
            <div className="space-y-3">
              {member.projects.map((project: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(23, 0, 114)' }}></div>
                  <span className="text-gray-600 dark:text-gray-300">{project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h2>
            <div className="space-y-3">
              {member.certifications.map((cert: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <Award className="w-5 h-5" style={{ color: 'rgb(23, 0, 114)' }} />
                  <span className="text-gray-600 dark:text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;