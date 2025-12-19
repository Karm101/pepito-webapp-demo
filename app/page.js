import Link from "next/link";

// --- YOUR DATA ---
const blogPosts = [
  {
    id: 1,
    title: "Part 1: The Philosophy of Utility Classes",
    date: "Dec 22, 2025",
    difficulty: "Beginner",
    summary: "Stop writing separate CSS files. Learn how Tailwind's 'Utility First' approach works.",
    image: "https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=Tailwind+Basics"
  },
  {
    id: 2,
    title: "Part 2: Handling Spacing & Layouts",
    date: "Dec 23, 2025",
    difficulty: "Intermediate",
    summary: "Confused by margins and padding? Learn how 'flex' and 'grid' classes replace layout CSS.",
    image: "https://via.placeholder.com/400x200/10B981/FFFFFF?text=Spacing+%26+Layout"
  },
  {
    id: 3,
    title: "Part 3: Responsive Design & States",
    date: "Dec 24, 2025",
    difficulty: "Advanced",
    summary: "The magic of Tailwind is the prefixes. Learn how to use 'hover:' and 'md:' modifiers.",
    image: "https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=Mobile+First"
  },
  // Add more posts here to test the "Limit 6" feature...
];

export default function Home() {
  // LOGIC: Only show the first 6 posts on the home page
  const visiblePosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Learn Coding the Modern Way</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Documenting my journey through Information Systems, Web Development, and AI tools.
          </p>
          {/* FIX 1: Direct link to the first tutorial */}
          <Link href="/tutorials/1" className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition shadow-lg">
            Start Reading
          </Link>
        </div>
      </div>

      {/* Tutorials Section */}
      <section id="tutorials" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Tutorials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              
              {/* FIX 2: Image is now a Link */}
              <Link href={`/tutorials/${post.id}`} className="block relative h-48 w-full bg-gray-200 cursor-pointer">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover"/>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                  {post.difficulty}
                </div>
              </Link>

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                {/* FIX 3: Title is now a real Link */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition">
                  <Link href={`/tutorials/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.summary}</p>
                {/* FIX 4: Button is now a real Link */}
                <Link href={`/tutorials/${post.id}`} className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-1 group">
                  Read Article 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* FIX 5: "View All" Button logic */}
        {blogPosts.length > 6 && (
          <div className="text-center mt-12">
            <Link href="/tutorials" className="inline-block border-2 border-indigo-600 text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-600 hover:text-white transition">
              View All {blogPosts.length} Tutorials
            </Link>
          </div>
        )}
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 text-center">
        <p>© 2025 Mark Joseph Pepito. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}