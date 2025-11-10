import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-4 shadow-2xl">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        
        <div className="flex items-center space-x-3 mb-3 sm:mb-0">
          <span className="text-4xl animate-bounce-slow">🍎</span>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Health & Nutrition Hub
          </h1>
        </div>

        {/* Navigation Links for Sections */}
        <nav className="flex space-x-4">
          <a href="#foodgroups" className="nav-link">Food Groups</a>
          <a href="#healthyplate" className="nav-link">Healthy Plate</a>
          <a href="#hygienetips" className="nav-link">Hygiene</a>
        </nav>

      </div>
    </header>
  )
}

export default Header