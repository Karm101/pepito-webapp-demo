import Link from "next/link";

// ⚠️ In a real app, you would import this data from a shared file.
// For now, copy-paste your blogPosts array here again so it works.
const blogPosts = [
  { id: 1, title: "Part 1: The Philosophy of Utility Classes", date: "Dec 22, 2025", difficulty: "Beginner", summary: "...", image: "..." },
  { id: 2, title: "Part 2: Handling Spacing & Layouts", date: "Dec 23, 2025", difficulty: "Intermediate", summary: "...", image: "..." },
  { id: 3, title: "Part 3: Responsive Design & States", date: "Dec 24, 2025", difficulty: "Advanced", summary: "...", image: "..." },
];

export default function AllTutorials() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-indigo-600 font-bold hover:underline">← Back to Home</Link>
          <h1 className="text-xl font-bold text-gray-900">All Tutorials</h1>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
               {/* Image Link */}
              <Link href={`/tutorials/${post.id}`} className="block relative h-48 w-full bg-gray-200">
                <img src={post.image || "https://via.placeholder.com/400x200"} alt={post.title} className="w-full h-full object-cover"/>
              </Link>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/tutorials/${post.id}`} className="hover:text-indigo-600">{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.summary}</p>
                <Link href={`/tutorials/${post.id}`} className="text-indigo-600 font-semibold hover:underline">Read Article →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}