import React, { useState } from 'react';

// Data defining the impact of different food choices
const badSnacks = [
  { name: 'Soda (1 can)', impact: { vitamins: -15, fiber: -5, protein: -5 }, sugarPenalty: 40, color: 'bg-red-500' },
  { name: 'Bag of Chips', impact: { vitamins: -10, fiber: -5, protein: -5 }, saltPenalty: 30, color: 'bg-red-400' },
  { name: 'Candy Bar', impact: { vitamins: -10, fiber: -10, protein: -10 }, sugarPenalty: 35, color: 'bg-red-600' },
];

const healthySnacks = [
  { name: 'Apple slices', impact: { vitamins: 15, fiber: 10, protein: 5 }, color: 'bg-green-500' },
  { name: 'Small Yogurt', impact: { vitamins: 5, fiber: 5, protein: 15 }, color: 'bg-green-400' },
  { name: 'Handful of Nuts', impact: { vitamins: 10, fiber: 10, protein: 10 }, color: 'bg-green-600' },
];

function DeficiencySimulator() {
  const [score, setScore] = useState({
    vitamins: 100,
    fiber: 100,
    protein: 100,
  });

  const getStatus = (value) => {
    if (value > 85) return { text: 'Excellent', color: 'text-green-600', icon: '🟢' };
    if (value > 60) return { text: 'Good', color: 'text-yellow-600', icon: '🟡' };
    if (value > 30) return { text: 'Low', color: 'text-orange-600', icon: '🟠' };
    return { text: 'Critical', color: 'text-red-600', icon: '🔴' };
  };

  const updateScore = (snack) => {
    setScore(prev => ({
      vitamins: Math.min(100, Math.max(0, prev.vitamins + (snack.impact.vitamins || 0))),
      fiber: Math.min(100, Math.max(0, prev.fiber + (snack.impact.fiber || 0))),
      protein: Math.min(100, Math.max(0, prev.protein + (snack.impact.protein || 0))),
    }));
  };

  return (
    <section id="simulator" className="mb-16 pt-10">
      <h2 className="section-title">🧪 Nutrient Balance Simulator</h2>
      <div className="max-w-4xl mx-auto card p-8 bg-purple-50 shadow-2xl">
        <p className="text-center text-xl text-gray-700 mb-8 font-medium">
          See how every choice impacts your health! Click a food to change your **Nutrient Levels**.
        </p>

        {/* --- 1. Score Display / Visualization --- */}
        <div className="space-y-4 mb-10 p-5 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-purple-700 pb-2 border-b-2">Your Current Health Meter</h3>
          
          {Object.keys(score).map(key => {
            const status = getStatus(score[key]);
            const barColor = status.color.replace('text-', 'bg-');

            return (
              <div key={key} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                <span className="text-2xl">{status.icon}</span>
                
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-extrabold capitalize text-lg text-gray-800">{key}:</span>
                        <span className={`font-extrabold ${status.color}`}>{status.text} ({score[key]}%)</span>
                    </div>
                    
                    <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden shadow-inner">
                      <div 
                        className={`h-full text-white transition-all duration-700 ${barColor}`}
                        style={{ width: `${Math.min(100, score[key])}%` }}
                      />
                    </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- 2. Action Buttons (Choice Panel) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Bad Snacks Panel */}
          <div className="border-4 border-red-500 rounded-xl p-4 bg-red-50 shadow-lg">
            <h3 className="text-center font-extrabold text-3xl text-red-700 mb-4">❌ Choose UNHEALTHY</h3>
            <div className="space-y-3">
              {badSnacks.map((snack, index) => (
                <button
                  key={index}
                  onClick={() => updateScore(snack)}
                  className="w-full bg-red-200 text-red-800 py-3 rounded-lg shadow-md hover:bg-red-300 transition-colors font-semibold transform hover:scale-[1.02] group"
                >
                  {snack.name}
                  <span className="block text-sm font-normal text-red-600">
                    (Impact: **- {snack.impact.vitamins} Vit** | +{snack.sugarPenalty || snack.saltPenalty} {snack.sugarPenalty ? 'Sugar' : 'Salt'})
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Healthy Snacks Panel */}
          <div className="border-4 border-green-500 rounded-xl p-4 bg-green-50 shadow-lg">
            <h3 className="text-center font-extrabold text-3xl text-green-700 mb-4">✅ Choose HEALTHY</h3>
            <div className="space-y-3">
              {healthySnacks.map((snack, index) => (
                <button
                  key={index}
                  onClick={() => updateScore(snack)}
                  className="w-full bg-green-200 text-green-800 py-3 rounded-lg shadow-md hover:bg-green-300 transition-colors font-semibold transform hover:scale-[1.02]"
                >
                  {snack.name}
                  <span className="block text-sm font-normal text-green-600">
                    (Impact: **+ {snack.impact.vitamins} Vit** | +{snack.impact.protein} Protein)
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <button 
          onClick={() => setScore({ vitamins: 100, fiber: 100, protein: 100 })}
          className="mt-8 w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors shadow-xl text-lg"
        >
          🔄 Reset Health Meter
        </button>

      </div>
    </section>
  );
}

export default DeficiencySimulator;