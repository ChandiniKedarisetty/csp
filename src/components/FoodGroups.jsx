import React, { useState } from 'react';

// --- FOOD GROUPS DATA ARRAY ---
const foodGroupData = [
  {
    name: 'Grains & Starches',
    emoji: '🍞🌾',
    color: 'from-yellow-400 to-orange-500',
    mainNutrient: 'Carbohydrates',
    function: 'The primary fuel for your brain and body, giving you lasting energy for play and learning.',
    foods: [
      { item: 'Oats (oatmeal)', type: 'Complex Carb, Fiber' },
      { item: 'Whole-Wheat Bread', type: 'Complex Carb, Fiber' },
      { item: 'Brown Rice', type: 'Complex Carb' },
      { item: 'Whole Wheat Pasta', type: 'Complex Carb' },
      { item: 'Potatoes (with skin)', type: 'Complex Carb, Vitamin C' },
      { item: 'Corn', type: 'Complex Carb' },
    ]
  },
  {
    name: 'Protein Foods',
    emoji: '🍗🥚',
    color: 'from-purple-400 to-indigo-500',
    mainNutrient: 'Protein',
    function: 'The building blocks for strong muscles, organs, and tissue repair (helps you heal quickly!).',
    foods: [
      { item: 'Chicken & Turkey (lean)', type: 'Lean Protein' },
      { item: 'Eggs', type: 'Complete Protein' },
      { item: 'Fish (Salmon, Tuna)', type: 'Protein, Healthy Fats' },
      { item: 'Beans & Lentils', type: 'Plant Protein, Fiber' },
      { item: 'Nuts & Seeds', type: 'Plant Protein, Healthy Fats' },
      { item: 'Tofu & Soy Products', type: 'Plant Protein' },
    ]
  },
  {
    name: 'Fruits & Veggies',
    emoji: '🍎🥦',
    color: 'from-green-400 to-emerald-500',
    mainNutrient: 'Vitamins & Fiber',
    function: 'Provide energy, boost your immune system, and keep your tummy happy (digestion).',
    foods: [
      { item: 'Apples & Bananas', type: 'Vitamins, Natural Carb' },
      { item: 'Carrots & Broccoli', type: 'Vitamins, Fiber' },
      { item: 'Spinach & Kale', type: 'Iron, Vitamins' },
      { item: 'Oranges & Berries', type: 'Vitamin C, Antioxidants' },
      { item: 'Bell Peppers', type: 'Vitamins' },
    ]
  },
  {
    name: 'Dairy & Alternatives',
    emoji: '🥛🧀',
    color: 'from-blue-400 to-cyan-500',
    mainNutrient: 'Calcium',
    function: 'Makes your bones and teeth super strong so you can run, jump, and chew well.',
    foods: [
      { item: 'Milk (Low-fat)', type: 'Calcium, Vitamin D, Protein' },
      { item: 'Yogurt', type: 'Calcium, Probiotics' },
      { item: 'Cheese (small portions)', type: 'Calcium, Protein' },
      { item: 'Fortified Soy/Almond Milk', type: 'Calcium Alternative' },
    ]
  },
];
// ---------------------------------------------------

function FoodGroups() {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const currentGroup = foodGroupData[selectedGroupIndex];

  return (
    <section id="foodgroups" className="mb-16 pt-10">
      <h2 className="section-title">🍽️ Food Groups: Click to Explore!</h2>
      <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto mb-10">
        Click on a nutrient to see which foods give you that **superpower**!
      </p>

      <div className="max-w-6xl mx-auto">
        
        {/* 1. Interactive Nutrient Selection Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {foodGroupData.map((group, index) => (
            <button
              key={index}
              onClick={() => setSelectedGroupIndex(index)}
              className={`card text-center p-4 transition-all duration-300 border-2 ${
                selectedGroupIndex === index
                  ? `bg-gradient-to-r ${group.color} text-white border-white transform scale-105 shadow-2xl`
                  : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'
              }`}
            >
              <div className="text-4xl mb-1">{group.emoji}</div>
              <div className="font-extrabold text-sm sm:text-base">{group.mainNutrient}</div>
            </button>
          ))}
        </div>

        {/* 2. Detailed Food List Display */}
        <div className={`card bg-gradient-to-br ${currentGroup.color.replace('from-', 'from-')}/50 to-white p-8 transition-all duration-500`}>
          
          <div className={`bg-gradient-to-r ${currentGroup.color} text-white rounded-xl p-6 mb-6 text-center shadow-lg`}>
            <div className="text-7xl mb-3 animate-float">{currentGroup.emoji}</div>
            <h3 className="text-4xl font-extrabold mb-2">{currentGroup.mainNutrient} Power!</h3>
            <p className="text-lg font-light max-w-2xl mx-auto">{currentGroup.function}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h4 className="text-2xl font-bold mb-5 text-center text-purple-600">
              Foods that provide {currentGroup.mainNutrient}:
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentGroup.foods.map((food, index) => (
                <div 
                  key={index} 
                  className="flex flex-col p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 shadow-sm hover:bg-yellow-100 transition-colors"
                >
                  <span className="text-xl font-bold text-gray-800">{food.item}</span>
                  <span className="text-sm italic text-gray-600">({food.type})</span>
                </div>
              ))}
            </div>
            
            {currentGroup.mainNutrient === 'Carbohydrates' && (
              <p className="mt-6 text-center text-sm text-gray-500">
                **Tip:** Choose **complex carbs** (like whole grains and oats) over simple carbs (like candy and soda) for energy that lasts all day!
              </p>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default FoodGroups;