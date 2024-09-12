export default function Login() {
  return (
    <section className="h-screen bg-gradient-to-b from-[#A6B1E1] to-[#424874]">
      <div className="items-center justify-center flex h-full">
        <div className="bg-[#F4EEFF] h-[550px] w-[480px] p-4 rounded-lg shadow-lg">
          <div className="flex-col mb-8">
            <h2 className="text-center text-[#424874] text-4xl p-6 font-bold">Login</h2>
          </div>

          <form action="POST" className="w-full p-1">
            <div className="h-full w-full justify-center items-center flex flex-col">
              <div className="flex flex-col items-center justify-center m-2">
                <input
                  type="text"
                  placeholder="email"
                  className="bg-[#F4EEFF] w-80 p-4 border-b-2 border-solid border-b-[#424874] text-[#424874] text-lg focus:rounded-lg focus:border-red-500 hover:bg-[#ece6f7] hover:rounded-lg"
                />
              </div>

              <div className="flex flex-col items-center justify-center m-2">
                <input
                  placeholder="password"
                  type="password"
                  className="bg-[#F4EEFF] w-80 p-4 border-b-2 border-solid border-b-[#424874] text-[#424874] text-lg focus:rounded-lg focus:border-red-500 hover:bg-[#ece6f7] hover:rounded-lg"
                />
              </div>

              <div className="flex items-center justify-center my-10">
                <button
                  type="button"
                  className="bg-[#424874] rounded-md shadow-md p-3 w-80 text-[#F4EEFF] text-xl hover:bg-[#505680] hover:text-[#FFF]"
                >
                  Login
                </button>
              </div>
              <p className="text-base text-left p-2">
                Don't have an account {""}
                <a
                  href="/"
                  className="text-bold text-blue-700 hover:underline hover:decoration-solid"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}