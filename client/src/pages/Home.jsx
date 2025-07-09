import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-950 flex flex-col items-center justify-center px-4 py-16">
        <section className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-orange-500">The Football Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Here you can read football news, post and delete football news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/news"
              className="px-8 py-3 bg-white text-gray-900 border border-white rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-colors"
            >
              Explore News
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
