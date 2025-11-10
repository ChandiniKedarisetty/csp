gitimport React from 'react'
import Header from './components/Header'
import FoodGroups from './components/FoodGroups'
import HealthyPlate from './components/HealthyPlate'
import HygieneTips from './components/HygieneTips' 
import ActivityTracker from './components/ActivityTracker' 
import DeficiencySimulator from './components/DeficiencySimulator'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="text-center mb-16 pt-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
            🌟 Welcome to the Healthy Kid Zone! 🌟
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Your guide to growing up **strong, smart, and healthy**! Click on a section below to start your adventure.
          </p>
        </section>

        {/* Core Sections */}
        <FoodGroups />
        <HealthyPlate />
        
        {/* New Interactive/Gamified Features */}
        <ActivityTracker /> 
        <HygieneTips /> 
        <DeficiencySimulator />
        
      </main>
      <Footer />
    </div>
  )
}

export default App
