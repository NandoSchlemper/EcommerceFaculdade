function Register() {
  return (
    <section className="h-screen bg-gradient-to-b from-[#A6B1E1] to-[#424874]">
      <div className="items-center justify-center flex h-full">
        <div className="bg-[#F4EEFF] h-[550px] w-[480px] p-4 rounded-lg shadow-lg">
          <div className="flex-col mb-3">
            <h2 className="text-center text-[#424874] text-4xl p-6 font-bold">Register</h2>
          </div>
          <form action="POST" className="w-full p-1">
            <div className="h-full w-full justify-center items-center flex flex-col">
              <div className="flex flex-col items-center justify-center m-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="bg-[#F4EEFF] w-80 p-4 border-b-2 border-solid border-b-[#424874] text-[#424874] text-lg focus:rounded-lg focus:border-red-500 hover:bg-[#ece6f7] hover:rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center justify-center m-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-[#F4EEFF] w-80 p-4 border-b-2 border-solid border-[#424874] text-[#424874] text-lg focus:rounded-lg focus:border-red-500 hover:bg-[#ece6f7] hover:rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center justify-center m-2">
                <input
                  type="text"
                  placeholder="Password"
                  className="bg-[#F4EEFF] w-80 p-4 border-b-2 border-solid border-[#424874] text-[#424874] text-lg focus:rounded-lg focus:border-red-500 hover:bg-[#ece6f7] hover:rounded-lg"
                />
              </div>

              <div className="flex-col flex items-center justify-center my-10">
                <button
                  type="button"
                  className="bg-[#424874] rounded-md shadow-md p-3 w-80 text-[#F4EEFF] text-xl hover:bg-[#505680] hover:text-[#FFF]"
                >
                  Login
                </button>
                <div className="mt-4">
                  <p className="text-base text-left">
                    Already registered? {""}
                    <a
                      href="/"
                      className="text-bold text-blue-700 hover:underline hover:decoration-solid"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
