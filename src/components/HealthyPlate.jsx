import React, { useState } from 'react';

// Centralized Data for the Meal Builder
const mealComponents = {
    carbs: [
        { name: 'Whole-Wheat Bread', type: 'Good', emoji: '🍞' },
        { name: 'Brown Rice', type: 'Good', emoji: '🍚' },
        { name: 'White Bread/Chips', type: 'Limit', emoji: '🥔' },
    ],
    protein: [
        { name: 'Chicken/Turkey', type: 'Good', emoji: '🍗' },
        { name: 'Beans/Lentils', type: 'Good', emoji: '🫘' },
        { name: 'Hot Dog/Sausage', type: 'Limit', emoji: '🌭' },
    ],
    veggies: [
        { name: 'Carrots/Broccoli', type: 'Good', emoji: '🥕' },
        { name: 'Apple/Orange', type: 'Good', emoji: '🍎' },
        { name: 'French Fries', type: 'Limit', emoji: '🍟' },
    ],
};

function HealthyPlate() {
    // State to track the selected meal items for Lunch
    const [lunch, setLunch] = useState({
        carbs: null,
        protein: null,
        veggies: null,
    });

    const mealComparison = [
        // ... (Keep the comparison data the same)
    ];

    const plateSections = [
        // ... (Keep the plate sections data the same)
    ];

    // --- Dynamic Status Check Logic ---
    const checkBalance = () => {
        const status = {
            carbs: lunch.carbs && lunch.carbs.type === 'Good',
            protein: lunch.protein && lunch.protein.type === 'Good',
            veggies: lunch.veggies && lunch.veggies.type === 'Good',
        };
        
        const isBalanced = status.carbs && status.protein && status.veggies;
        const totalGood = Object.values(status).filter(s => s).length;
        
        return { isBalanced, totalGood, status };
    };

    const handleSelection = (group, item) => {
        setLunch(prev => ({
            ...prev,
            [group]: item,
        }));
    };

    const mealStatus = checkBalance();
    // ------------------------------------

    return (
        <section id="healthyplate" className="mb-16 pt-10">
            <h2 className="section-title">🍽️ The Healthy Plate: What to Eat & Why!</h2>
            <div className="max-w-6xl mx-auto">
                
                {/* Meal Comparison Section (Static) */}
                {/* ... (Keep the comparison grid here) ... */}

                <h3 className="text-3xl font-bold text-center mb-8 text-purple-700 border-b-2 border-purple-200 pb-2">
                    🎒 Build Your Balanced Lunch! (Dynamic)
                </h3>
                
                {/* --- Dynamic Meal Builder --- */}
                <div className="card p-8 bg-white shadow-2xl">
                    <p className="text-center text-xl text-gray-700 mb-6">
                        Click one item from each group to see if you build a **Healthy Lunch**.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Iterate over meal groups (carbs, protein, veggies) */}
                        {Object.keys(mealComponents).map(group => (
                            <div key={group} className="p-4 rounded-xl border-4 border-gray-100 shadow-md bg-blue-50">
                                <h4 className="text-xl font-extrabold capitalize mb-3 text-blue-800">
                                    {group} Component
                                </h4>
                                <div className="space-y-2">
                                    {mealComponents[group].map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSelection(group, item)}
                                            className={`w-full text-left p-3 rounded-lg font-semibold transition-all duration-200 shadow-sm 
                                                ${lunch[group]?.name === item.name 
                                                    ? item.type === 'Good' 
                                                        ? 'bg-green-500 text-white shadow-xl scale-[1.03] ring-4 ring-green-300' 
                                                        : 'bg-orange-500 text-white shadow-xl scale-[1.03] ring-4 ring-orange-300'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            {item.emoji} {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* --- Dynamic Status Display --- */}
                    <div className={`p-5 rounded-xl text-center shadow-lg transition-all duration-500 
                        ${mealStatus.isBalanced 
                            ? 'bg-green-100 border-4 border-green-600' 
                            : 'bg-red-100 border-4 border-red-600'}`}>
                        
                        <h4 className="text-2xl font-extrabold mb-2">
                            {mealStatus.isBalanced ? '✅ Lunch Status: PERFECTLY BALANCED!' : '⚠️ Lunch Status: Needs Improvement!'}
                        </h4>
                        <p className="text-lg text-gray-700 font-semibold mb-3">
                            You included **{mealStatus.totalGood}** out of 3 essential healthy components.
                        </p>

                        <div className="flex justify-center space-x-4">
                            <span className={`text-xl font-bold ${mealStatus.status.carbs ? 'text-green-600' : 'text-red-600'}`}>
                                {mealStatus.status.carbs ? 'Carbs: Good 🟢' : 'Carbs: Missing 🔴'}
                            </span>
                            <span className={`text-xl font-bold ${mealStatus.status.protein ? 'text-green-600' : 'text-red-600'}`}>
                                {mealStatus.status.protein ? 'Protein: Good 🟢' : 'Protein: Missing 🔴'}
                            </span>
                            <span className={`text-xl font-bold ${mealStatus.status.veggies ? 'text-green-600' : 'text-red-600'}`}>
                                {mealStatus.status.veggies ? 'Veggies/Fruit: Good 🟢' : 'Veggies/Fruit: Missing 🔴'}
                            </span>
                        </div>
                    </div>
                </div>
                {/* --- End Dynamic Meal Builder --- */}

                {/* Visual Plate and Breakdown (Static) */}
                {/* ... (Keep the plate diagram and sections here) ... */}
            </div>
        </section>
    );
}

export default HealthyPlate;