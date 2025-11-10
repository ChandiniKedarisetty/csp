import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, FireIcon, BellIcon } from '@heroicons/react/24/solid'; // Importing professional icons

// Key for local storage
const STORAGE_KEY = 'healthTrackerGoalsData';

// Define the daily routine goals (Fixed Goals)
const initialGoals = [
    { id: 1, text: '💧 Drink 2 Glasses of Water (Before Lunch)', target: 'water', emoji: '💧', isCompleted: false },
    { id: 2, text: '👟 Walk 15 Minutes / Play actively', target: 'steps', emoji: '👟', isCompleted: false },
    { id: 3, text: '🍎 Eat a Fruit or Veggie Snack', target: 'food', emoji: '🍎', isCompleted: false },
    { id: 4, text: '💧 Drink 2 More Glasses of Water (After School)', target: 'water', emoji: '💧', isCompleted: false },
    { id: 5, text: '🧼 Wash Hands before Dinner', target: 'hygiene', emoji: '🧼', isCompleted: false },
    { id: 6, text: '💤 Get Ready for Sleep (Screen Off)', target: 'sleep', emoji: '💤', isCompleted: false },
    { id: 7, text: '🦷 Brush Teeth (Night)', target: 'hygiene', emoji: '🦷', isCompleted: false },
];

// Helper function to get today's date string
const getTodayDate = () => new Date().toLocaleDateString();

function ActivityTracker() {
    const [goals, setGoals] = useState(() => {
        // Load data from local storage
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const parsed = JSON.parse(savedData);
            // If the date is today, return saved goals
            if (parsed.date === getTodayDate()) {
                return parsed.goals;
            }
        }
        // Otherwise, return a fresh set of goals
        return initialGoals;
    });

    // Effect to save data whenever the 'goals' state changes
    useEffect(() => {
        const dataToSave = {
            date: getTodayDate(),
            goals: goals,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    }, [goals]);

    const handleGoalToggle = (id) => {
        setGoals(prevGoals =>
            prevGoals.map(goal =>
                goal.id === id ? { ...goal, isCompleted: !goal.isCompleted } : goal
            )
        );
    };

    const completedGoalsCount = goals.filter(goal => goal.isCompleted).length;
    const totalGoals = goals.length;
    const progressPercentage = (completedGoalsCount / totalGoals) * 100;

    return (
        <section id="tracker" className="mb-16 pt-10">
            <h2 className="section-title">✨ Your Daily Health Routine</h2>
            <div className="max-w-4xl mx-auto card p-8 bg-blue-50 shadow-2xl">
                
                {/* Header and Streak Indicator */}
                <div className="flex justify-between items-center mb-6 border-b pb-4 border-blue-200">
                    <h3 className="text-2xl font-extrabold text-blue-800 flex items-center">
                        <BellIcon className="w-7 h-7 mr-2 text-yellow-500" /> Today's Focus
                    </h3>
                    <div className="text-lg font-semibold text-gray-700 flex items-center">
                        <FireIcon className="w-6 h-6 mr-1 text-red-500" /> Streak: (Requires Backend)
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <p className="text-xl font-bold mb-2 text-center">
                        Progress: {completedGoalsCount} / {totalGoals} Goals Complete
                    </p>
                    <div className="h-6 w-full bg-gray-300 rounded-full overflow-hidden shadow-inner">
                        <div 
                            className={`h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-700 flex items-center justify-center`} 
                            style={{ width: `${progressPercentage}%` }} 
                        >
                            {progressPercentage > 5 && (
                                <span className="text-sm font-extrabold text-white">
                                    {Math.round(progressPercentage)}%
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Goal Checklist */}
                <div className="space-y-4">
                    {goals.map(goal => (
                        <button
                            key={goal.id}
                            onClick={() => handleGoalToggle(goal.id)}
                            aria-checked={goal.isCompleted}
                            role="checkbox"
                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between shadow-md 
                                ${goal.isCompleted 
                                    ? 'bg-green-100 border-l-8 border-green-500 hover:bg-green-200' 
                                    : 'bg-white border-l-8 border-gray-300 hover:bg-gray-100'
                                }`}
                        >
                            <span className={`text-lg font-semibold ${goal.isCompleted ? 'text-green-700 line-through' : 'text-gray-800'}`}>
                                {goal.emoji} {goal.text}
                            </span>
                            
                            <CheckCircleIcon 
                                className={`w-8 h-8 transition-colors duration-300 ${goal.isCompleted 
                                    ? 'text-green-500' 
                                    : 'text-gray-400 opacity-50'
                                }`}
                            />
                        </button>
                    ))}
                </div>
                
                {completedGoalsCount === totalGoals && (
                    <p className="text-center mt-6 font-extrabold text-2xl text-purple-600 animate-pulse">
                        **ALL DAILY GOALS ACHIEVED!** You are a Health Star! 🏆
                    </p>
                )}
            </div>
        </section>
    );
}

export default ActivityTracker;