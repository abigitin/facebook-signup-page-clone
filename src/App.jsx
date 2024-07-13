
function App() {
  return (
    <>
        <body className="bg-gray-100 h-screen">
        <main className="flex mx-auto pt-36 justify-center ">
        <div className="left w-1/2">
            <img className="w-72 pt-8" src="assets/facebooklogo.svg" alt="logo"/>
            <p className="text-2xl mx-7 font-semibold">
                Facebook helps you connect with people and share with the people in your life.
            </p>
        </div>
        <div className="right flex flex-col bg-white p-10 rounded-lg space-y-3 my-1/2 shadow-xl shadow-gray-300">
            <input
                className="p-3 border border-gray-500 border-opacity-100 rounded-md  outline-gray-300  hover:outline-blue-300 focus:outline-blue-300"
                type="text" placeholder="Email address or phone number"/>
            <input
                className="p-3 border border-gray-500 border-opacity-100 rounded-md  outline-gray-300  hover:outline-blue-300 focus:outline-blue-300"
                type="password" placeholder="Password"/>
            <button className="bg-blue-500 text-white py-3 rounded-md font-bold text-xl hover:bg-blue-600">Log in</button>
            <p className="text-blue-400 text-sm text-center hover:underline">
                Forgotten password?
            </p>
            <hr/>
            <button className="bg-green-500 text-white font-bold p-3 m-16 rounded-md hover:focus:bg-green-600">Create new account</button>
              <p>
              <span className="font-bold hover:underline">
                    Create a Page
              </span>
                for a celebrity,brand or business.
              </p>
        </div>
        </main>
        </body>
    </>
  )
}

export default App
