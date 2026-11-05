import React, { useState, useEffect } from 'react';
import { Rocket, Calendar, ChevronLeft, ChevronRight, Briefcase, Laptop, BookOpen, Lightbulb, Settings, GraduationCap } from 'lucide-react';

const timeline = [
  {
    date: 'Janvier 2022',
    title: 'Fondation de Spray_Info',
    description: `Fondé par trois ingénieurs en informatiques issus de l'ENI Tuléar: RAMANANJANAHARY Heriniaina Jacquino, HERINIRIKO Nomenjanahary Sylvestre et LIGNISA Jean Pierre. Créé à Fianarantsoa, Spray_Info a commencé modestement avec seulement deux étudiants issus de l'ENI et de l'IFT. À cette époque, la salle était de un simple maison où vivait les trois informaticiens. Peu à peu, le nombre d'étudiants a augmenté et ils ont pu louer une grande salle qui ne pouvait accueillir plus de 20 personnes. Les tables et les chaises qu'ils ont utilisées à l'époque avaient été obtenues grâce à leur bourse d'études. La formation qu'ils ont donnée était spécialisée pour les étudiants en informatique à l'université.`,
    icon: Rocket,
  },
  {
    date: 'Juillet 2022',
    title: 'Ouverture du premier siège',
    description: 'Les étudiants étaient devenus nombreux, et ils ont pu améliorer le confort de la salle ainsi que les équipements. Spray_Info a pu obtenir son propre siège, qui reste leur centre jusqu\'à aujourd\'hui, et ce siège peut accueillir plus de 100 étudiants.',
    icon: Briefcase,
  },
  {
    date: '2022-2023',
    title: 'Spécialisation',
    description: 'Pendant deux ans, le centre s\'est concentré exclusivement sur la formation en informatique.',
    icon: Laptop,
  },
  {
    date: 'Janvier 2024',
    title: 'Diversification des modules',
    description: 'La naissance des divers modules et de plusieurs types de formations chez Spray_Info lui a permis d\'élargir son domaine et de nouer des partenariats avec diverses entreprises. Désormais, Spray_Info n\'est plus seulement un centre de formation en informatique mais aussi un centre de formation en technologie, développement personnel, communication, marketing, leadership, etc...',
    icon: BookOpen,
  },
  {
    date: 'Janvier 2025',
    title: 'Naissance de Spray_idea (Cabinet de conseil)',
    description: 'Le premier projet lancé en 2025 fut Spray_idea, un cabinet de conseil visant à accompagner les entreprises dans leur transformation digitale, stratégie, organisation... et les individus dans leur développement personnel, communication, leadership...',
    icon: Lightbulb,
  },
  {
    date: 'Mars 2025',
    title: 'Création de TechnoSupport (Service de prestation numérique)',
    description: 'Deux mois après le lancement de Spray_idea, Spray_Info met en place TechnoSupport, une entité dédiée à la prestation numérique des entreprises locales, la réalisation de services professionnels : création de sites web, déploiement de CRM/ERP, cybersécurité, maintenance informatique, etc. L\'implication des formateurs et des stagiaires sur des projets concrets, pour renforcer l\'apprentissage par la pratique.',
    icon: Settings,
  },
  {
    date: 'Courant 2025',
    title: 'Lancement de l\'Université privée Spray_X',
    description: 'Le grand projet éducatif de Spray_Info se concrétise dans le courant de l\'année avec l\'ouverture officielle de l\'université privée Spray_X, les deux premières filières : Génie Logiciel Informatique et Administration Systèmes & Réseaux, une pédagogie moderne orientée sur l\'intelligence appliquée : « L\'intelligence, version 3.0 ». On appelle Spray_Learn l\'ensemble de toutes les formations qui existent dans Spray_Info.',
    icon: GraduationCap,
  },
];

const History: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = timeline[currentSlide].icon;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % timeline.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + timeline.length) % timeline.length);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Historique de{' '}
            <span style={{ color: 'rgb(23, 0, 114)' }}>Spray_Info</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Découvrez notre parcours depuis 2022
          </p>
        </div>

        {/* Timeline Slider */}
        <div className={`relative mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 mr-4 border border-gray-200 dark:border-gray-700"
              style={{ color: 'rgb(23, 0, 114)' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="text-center max-w-4xl">
              <div className="flex items-center justify-center text-6xl mb-4 animate-bounce text-blue-900 dark:text-blue-400">
                <Icon className="w-14 h-14" />
              </div>
              <div className="text-lg font-semibold mb-2" style={{ color: 'rgb(23, 0, 114)' }}>
                {timeline[currentSlide].date}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {timeline[currentSlide].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                {timeline[currentSlide].description}
              </p>
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ml-4 border border-gray-200 dark:border-gray-700"
              style={{ color: 'rgb(23, 0, 114)' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2">
            {timeline.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'scale-125' : 'opacity-50'
                }`}
                style={{ backgroundColor: 'rgb(23, 0, 114)' }}
              />
            ))}
          </div>
        </div>

        {/* Complete Timeline */}
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frise chronologique complète
          </h2>
          
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 p-6 rounded-lg transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-50 dark:bg-blue-900/20 scale-105 border-l-4' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                style={{ borderLeftColor: index === currentSlide ? 'rgb(23, 0, 114)' : 'transparent' }}
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                    style={{ 
                      backgroundColor: index === currentSlide ? 'rgb(23, 0, 114)' : 'transparent',
                      borderColor: 'rgb(23, 0, 114)'
                    }}
                  >
                    <Calendar className={`w-6 h-6 ${index === currentSlide ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-2xl text-blue-900 dark:text-blue-400">
                      <event.icon />
                    </div>
                    <div
                      className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      style={{ color: 'rgb(23, 0, 114)' }}
                    >
                      {event.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
