import ButtonLoader from "../../components/BtnLoader";
import Button from "../../components/Button";
import useLogin from "./useLogin.hooks";

interface InputProps {
  type?: "text" | "password";
  name: string;
  inputId: string;
  label: string;
}

const Input = ({ name, inputId, type = "text", label }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block mb-2 text-lg font-medium text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={inputId}
        className=" border outline-none  sm:text-lg rounded-lg block w-full p-2.5 bg-slate-600 border-slate-400 placeholder-slate-400 text-white"
        placeholder="**********"
        required
      />
    </div>
  );
};

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
            <Input label="Username" name="username" inputId="username" />
            <Input
              label="Password"
              name="password"
              inputId="password"
              type="password"
            />
            {loading ? (
              <ButtonLoader
                text="LOADING..."
                style={{ width: "100%" }}
                className="w-full justify-center py-2.5"
              />
            ) : (
              <Button type="submit">Login</Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
