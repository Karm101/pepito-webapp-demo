import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Part 1: The Philosophy of Utility Classes",
    content: `Tailwind CSS is different from traditional CSS. Instead of writing a separate .css file 
      with classes like .btn-primary, you add classes directly to your HTML elements.
      
      For example, typing bg-blue-500 instantly turns the background blue. 
      
      This is called "Utility-First" CSS. It might look ugly in your code at first, 
      but it saves you from flipping back and forth between files, making development incredibly fast.
    `,
    image: "https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Tailwind+Basics"
  },
  {
    id: 2,
    title: "Part 2: Handling Spacing & Layouts",
    content: `In Tailwind, we don't worry about pixel math. We use a scale. For spacing, we use m for margin and p for padding. 
    p-4 gives you 1rem (16px) of padding. m-8 gives you 2rem. For layouts, Tailwind makes Flexbox easy. 
    Just adding flex justify-center items-center to a div will perfectly center its content. 
    No more struggling with float: left or complex positioning!`,
    image: "https://via.placeholder.com/800x400/10B981/FFFFFF?text=Spacing+%26+Layout"
  },
  {
    id: 3,
    title: "Part 3: Responsive Design & States",
    content: `This is where Tailwind shines. To make a design responsive, you just add a prefix. 
    Want 1 column on mobile but 3 on desktop? You simply write grid-cols-1 md:grid-cols-3. 
    The md: prefix tells the browser "Only do this on medium screens and larger." 
    We use the same logic for hover states. hover:bg-red-500 means the background will only turn red when you mouse over it.`,
    image: "https://via.placeholder.com/800x400/8B5CF6/FFFFFF?text=Mobile+First"
  }
];

// 1. Notice the 'async' keyword here
export default async function TutorialPage({ params }) {
  
  // 2. We must 'await' the params before using them
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);

  // 3. Now we can find the post safely
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Tutorial not found!</h1>
        <Link href="/" className="text-blue-400 underline hover:text-blue-300">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-20">
      <nav className="p-6 border-b sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-indigo-600 font-bold hover:underline flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto mt-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">{post.title}</h1>
        
        <div className="relative h-64 md:h-96 w-full mb-10 rounded-2xl overflow-hidden shadow-2xl">
           <img src={post.image} alt={post.title} className="w-full h-full object-cover"/>
        </div>
        
        <div className="prose prose-lg prose-indigo max-w-none text-gray-700 leading-relaxed">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
}