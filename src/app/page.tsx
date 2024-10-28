
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Home Page</h1>

      <a className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-bold py-2 px-4 rounded m-4" href="/login">Login Page</a>
    </div>
  );
}

export default HomePage;
