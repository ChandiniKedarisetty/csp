import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <span className="text-4xl">🍎</span>
          <span className="text-4xl">🥗</span>
          <span className="text-4xl">💪</span>
          <span className="text-4xl">🌟</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">Stay Healthy, Stay Happy!</h3>
        <p className="text-lg mb-4">
          Remember: Eating healthy and staying clean helps you grow strong and smart!
        </p>
        <div className="text-sm opacity-90">
          <p>Health & Nutrition Awareness Project</p>
          <p>Made with ❤️ for School Students</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

