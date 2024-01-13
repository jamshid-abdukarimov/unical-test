import ButtonLoader from "../../components/BtnLoader";
import useLogin from "./useLogin.hooks";

const Login = () => {
  const { handleSubmit, loading } = useLogin();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[85vh] lg:py-0">
      <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-slate-700 border-slate-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Profilga kirish
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-lg font-medium text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className=" border outline-none  sm:text-lg rounded-lg block w-full p-2.5 bg-slate-600 border-slate-400 placeholder-slate-400 text-white"
                placeholder="**********"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="•••••••••••••••"
                className="border outline-none sm:text-lg rounded-lg  block w-full p-2.5 bg-slate-600 border-slate-400 placeholder-slate-400 text-white"
                required
              />
            </div>
            {loading ? (
              <ButtonLoader
                style={{ width: "100%" }}
                className="w-full justify-center"
              />
            ) : (
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase tracking-wider"
              >
                Kirish
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
