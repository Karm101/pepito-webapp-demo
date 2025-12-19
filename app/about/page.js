export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        
        {/* Profile Info */}
        <div className="relative px-8 pb-10">
          <div className="absolute -top-16 left-8">
            <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-lg">
              {/* Put your real picture here later */}
              <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-full object-cover"/>
            </div>
          </div>
          
          <div className="pt-20">
            <h1 className="text-3xl font-bold text-gray-900">Mark Joseph Pepito</h1>
            <p className="text-indigo-600 font-medium">Information Systems Student & Developer</p>
            
            <div className="mt-8 prose text-gray-600 leading-relaxed">
              <p>
                Hi! I'm an IS student passionate about web development. This website is my 
                playground for learning Next.js, Tailwind CSS, and modern web architecture.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">My Tech Stack</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Next.js</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Tailwind CSS</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">JavaScript</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}