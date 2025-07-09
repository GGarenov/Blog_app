import Header from "../components/Header";
import BlogPostTile from "../components/BlogPostTile";

// Example blog posts data
const posts = [
  {
    title: "The Rise of Young Football Stars",
    summary:
      "A look at the new generation of footballers making waves in the top leagues across Europe.",
    author: "Alex Smith",
    date: "2025-07-09",
  },
  {
    title: "Tactical Analysis: Champions League Final",
    summary:
      "Breaking down the key moments and strategies that decided this year's thrilling final.",
    author: "Jamie Lee",
    date: "2025-07-08",
  },
  {
    title: "Transfer Window: Biggest Surprises So Far",
    summary: "Unexpected moves and rumors from the summer transfer window.",
    author: "Morgan Patel",
    date: "2025-07-07",
  },
  {
    title: "Transfer Window: Biggest Surprises So Far",
    summary: "Unexpected moves and rumors from the summer transfer window.",
    author: "Morgan Patel",
    date: "2025-07-07",
  },
  {
    title: "Transfer Window: Biggest Surprises So Far",
    summary: "Unexpected moves and rumors from the summer transfer window.",
    author: "Morgan Patel",
    date: "2025-07-07",
  },
];

const Listing = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-gray-950 flex flex-col items-center justify-center px-4 py-16">
        <section className="w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center leading-tight">
            Latest <span className="text-orange-500">Blog Posts</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {posts.map((post, idx) => (
              <BlogPostTile key={idx} {...post} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Listing;
