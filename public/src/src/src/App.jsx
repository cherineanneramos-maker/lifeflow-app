import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          🎉 LifeFlow is Ready!
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          8 essential files created successfully!
        </p>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Files Created:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'package.json',
              'vite.config.js', 
              'tailwind.config.js',
              '.gitignore',
              'public/index.html',
              'src/main.jsx',
              'src/index.css',
              'src/App.jsx'
            ].map((file, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-600 font-mono text-sm">{file}</div>
                <div className="text-green-500 text-xs mt-1">✓ Created</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">Next Steps:</h3>
          <ol className="text-left list-decimal pl-5 space-y-2 text-gray-700">
            <li>Clone repository: <code className="bg-gray-800 text-white px-2 py-1 rounded">git clone https://github.com/cherineanneramos-maker/lifeflow-app.git</code></li>
            <li>Install: <code className="bg-gray-800 text-white px-2 py-1 rounded">npm install</code></li>
            <li>Run: <code className="bg-gray-800 text-white px-2 py-1 rounded">npm run dev</code></li>
            <li>Open: <code className="bg-gray-800 text-white px-2 py-1 rounded">http://localhost:3000</code></li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
