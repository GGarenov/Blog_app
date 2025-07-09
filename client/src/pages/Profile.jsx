import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-lg text-white">Loading profile...</div>
        </div>
      </>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-lg text-white">
            Please log in to view your profile.
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-gray-950 flex flex-col items-center justify-center px-4 py-16">
        <section className="max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Welcome, <span className="text-orange-500">{user?.userName} </span>
          </h1>
          <div className="bg-gray-900 rounded-xl shadow-lg p-8 mb-8 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-3xl font-bold text-white mb-4">
              {user.userName && user.userName[0]
                ? user.userName[0].toUpperCase()
                : user.email[0].toUpperCase()}
            </div>
            <p className="text-lg text-gray-300 mb-2">
              <span className="font-semibold text-white">Email:</span>{" "}
              {user.email}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/news"
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              My News
            </Link>
            <Link
              to="/"
              className="px-8 py-3 bg-white text-gray-900 border border-white rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-colors"
            >
              Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
