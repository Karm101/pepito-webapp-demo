import Image from "next/image";

// --- 1. YOUR DATA (This is the "Template" part you edit!) ---
// Just copy and paste if you want to create more post
const blogPosts = [
  {
    id: 1,
    title: "How to Install Next.js",
    date: "Dec 19, 2025",
    difficulty: "Beginner",
    summary: "A step-by-step guide to setting up your first Next.js project using the terminal.",
    image: "https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=Next.js+Setup"
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS",
    date: "Dec 20, 2025",
    difficulty: "Intermediate",
    summary: "Learn how utility classes work and why you should stop writing custom CSS files.",
    image: "https://via.placeholder.com/400x200/10B981/FFFFFF?text=Tailwind+CSS"
  },
  {
    id: 3,
    title: "Deploying to Vercel",
    date: "Dec 21, 2025",
    difficulty: "Advanced",
    summary: "The ultimate guide to pushing your GitHub repository to a live Vercel domain.",
    image: "https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=Vercel+Deploy"
  },
  {
    id: 4,
    title: "Visual Studio",
    date: "Dec 22, 2025",
    difficulty: "Custom",
    summary: "The guide to understand Visual Studio.",
    image: "https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=Vercel+Deploy"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* Navigation Menu */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
              <h1 className="text-xl font-bold text-gray-900">Mark's Tutorials</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Home</a>
              <a href="#tutorials" className="text-gray-600 hover:text-indigo-600 transition">Tutorials</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition">About Me</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Learn Coding the Modern Way
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Documenting my journey through Information Systems, Web Development, and AI tools.
          </p>
          <a href="#tutorials" className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition shadow-lg">
            Start Reading
          </a>
        </div>
      </div>

      {/* --- 2. THE TEMPLATE ENGINE (Tutorials Section) --- */}
      <section id="tutorials" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Tutorials</h2>
          <span className="text-gray-500 text-sm">{blogPosts.length} posts available</span>
        </div>

        {/* This Grid Layout mimics Bootstrap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* THE LOOP: This takes your data and builds the HTML for you */}
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              
              {/* Card Image */}
              <div className="relative h-48 w-full bg-gray-200">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                  {post.difficulty}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.summary}
                </p>
                <button className="text-red-600 font-semibold hover:text-indigo-800 flex items-center gap-1 group">
                  Read Article 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Mark Joseph Pepito. Built with Next.js & Tailwind.</p>
        </div>
      </footer>

    </div>
  );
}