const BlogPostTile = ({ title, summary, author, date, image }) => {
  return (
    <article className="bg-gray-900 rounded-xl shadow-lg p-3 mb-4 w-64 h-72 flex flex-col border border-gray-800 hover:shadow-orange-500/20 transition-shadow overflow-hidden">
      <div className="w-full h-32 bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-600 text-4xl">🖼️</span>
        )}
      </div>
      <h2 className="text-lg font-bold text-white mb-1 leading-snug truncate">
        {title}
      </h2>
      <p className="text-gray-300 text-sm mb-2 line-clamp-2 flex-1">
        {summary}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
        <span>
          By <span className="text-orange-500 font-semibold">{author}</span>
        </span>
        <span>{date}</span>
      </div>
    </article>
  );
};

export default BlogPostTile;
