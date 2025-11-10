import React, { useState } from 'react';

// --- HYGIENE TIPS DATA ARRAY ---
const hygieneTips = [
  {
    title: 'Wash Your Hands',
    emoji: '🧼',
    description: 'The number one rule! Always wash your hands before eating, after using the bathroom, and after touching pets or playing outside. This stops germs from spreading!',
    steps: [
      'Wet your hands with clean, running water',
      'Apply soap and rub hands together to make a rich lather',
      'Scrub for 20 seconds (sing "Twinkle Twinkle Little Star"!)',
      'Rinse well under clean running water',
      'Dry with a clean towel or air dryer'
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Brush Your Teeth',
    emoji: '🦷',
    description: 'Brush your teeth twice a day—morning and night—to keep them strong and prevent cavities. A healthy smile is a confident smile!',
    steps: [
      'Use a soft-bristled toothbrush',
      'Apply a pea-sized amount of fluoride toothpaste',
      'Brush for 2 full minutes, covering all surfaces',
      'Don\'t forget to gently brush your tongue!',
      'Rinse your mouth with water'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Take Regular Showers',
    emoji: '🚿',
    description: 'Daily bathing or showering keeps your skin and hair clean and fresh. It helps remove sweat, dirt, and oil from the day.',
    steps: [
      'Use warm water and gentle soap',
      'Wash your hair with shampoo',
      'Lather and rinse all parts of your body',
      'Rinse thoroughly until all soap is gone',
      'Dry yourself with a clean, dry towel'
    ],
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Keep Nails Clean',
    emoji: '✂️',
    description: 'Trim your fingernails and toenails regularly. Germs love to hide under long nails, so keeping them short is key!',
    steps: [
      'Trim nails with clean clippers once a week',
      'File rough edges to prevent snags',
      'Wash under your nails with soap and a brush',
      'Avoid biting your nails',
      'Keep them short and clean'
    ],
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'Wear Clean Clothes',
    emoji: '👕',
    description: 'Change into fresh, clean clothes every day! Wearing clean clothes prevents skin irritation and keeps you smelling great.',
    steps: [
      'Change underwear and socks daily',
      'Put dirty clothes in a laundry basket',
      'Don\'t wear sweaty clothes again',
      'Hang up clothes you wear again (like jackets)',
      'Help an adult wash your clothes regularly'
    ],
    color: 'from-yellow-500 to-amber-600'
  }
];
// -----------------------------------------------------------------


function HygieneTips() {
  const [selectedTip, setSelectedTip] = useState(0);
  const [currentStep, setCurrentStep] = useState(0); 

  const currentTip = hygieneTips[selectedTip];

  // Function to handle tip selection and reset the step counter
  const handleSelectTip = (index) => {
    setSelectedTip(index);
    setCurrentStep(0); // Reset step counter when tip changes
  };
  
  const totalSteps = currentTip.steps.length; 

  return (
    <section id="hygienetips" className="mb-16 pt-10">
      <h2 className="section-title">🧼 Daily Hygiene Tips: Stay Germ-Free!</h2>
      <div className="max-w-6xl mx-auto">
        
        {/* Tip Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          {hygieneTips.map((tip, index) => (
            <button
              key={index}
              onClick={() => handleSelectTip(index)} 
              className={`card text-center transition-all duration-300 border-2 ${
                selectedTip === index
                  ? `bg-gradient-to-r ${tip.color} text-white border-white transform scale-105 shadow-2xl`
                  : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700 hover:shadow-lg' // Added hover shadow
              }`}
            >
              <div className="text-4xl sm:text-5xl mb-1">{tip.emoji}</div>
              <div className="font-extrabold text-sm sm:text-base">{tip.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Tip Content */}
        <div className="card bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-2xl"> {/* Enhanced container shadow */}
          
          <div className={`bg-gradient-to-r ${currentTip.color} text-white rounded-xl p-6 mb-6 text-center shadow-lg`}>
            <div className="text-7xl mb-3 animate-float">{currentTip.emoji}</div>
            <h3 className="text-4xl font-extrabold mb-2">{currentTip.title}</h3>
            <p className="text-lg font-light max-w-2xl mx-auto">{currentTip.description}</p>
          </div>
          
          <h4 className="text-3xl font-bold mb-5 text-center text-purple-600">
              📋 Follow the Steps:
          </h4>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            
            {/* Step Progress Bar and Current Step */}
            <div className="mb-6">
              <div className="text-center font-bold mb-2 text-xl text-gray-800">
                Step {currentStep + 1} of {totalSteps}: **{currentTip.steps[currentStep]}**
              </div>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner"> {/* Progress bar depth */}
                <div 
                  className={`h-full bg-blue-500 transition-all duration-500`} 
                  style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }} 
                />
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="text-center space-x-4">
              <button 
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold disabled:opacity-50 hover:bg-gray-600 transition-all shadow-md" // Better color and shadow
              >
                ← Previous
              </button>
              <button 
                onClick={() => setCurrentStep(prev => Math.min(totalSteps - 1, prev + 1))}
                disabled={currentStep === totalSteps - 1}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold disabled:opacity-50 hover:bg-green-700 transition-all shadow-md"
              >
                Next Step →
              </button>
            </div>
            
            {currentStep === totalSteps - 1 && (
              <p className="text-center mt-4 font-extrabold text-2xl text-blue-600 animate-pulse">
                Well done! You completed all the steps! ⭐
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HygieneTips;