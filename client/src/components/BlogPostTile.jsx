const BlogPostTile = ({ title, summary, author, date }) => {
  return (
    <article className="bg-gray-900 rounded-xl shadow-lg p-6 mb-6 w-full max-w-xl mx-auto border border-gray-800 hover:shadow-orange-500/20 transition-shadow">
      <h2 className="text-2xl font-bold text-white mb-2 leading-snug truncate">
        {title}
      </h2>
      <p className="text-gray-300 mb-4 line-clamp-3">{summary}</p>
      <div className="flex items-center justify-between text-sm text-gray-400">
        <span>
          By <span className="text-orange-500 font-semibold">{author}</span>
        </span>
        <span>{date}</span>
      </div>
    </article>
  );
};

export default BlogPostTile;
