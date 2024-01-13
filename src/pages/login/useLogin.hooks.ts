import React from "react";
import useStore from "../../store";
import { useNavigate } from "react-router-dom";
import { PostRequest } from "../../lib";
import toast from "react-hot-toast";

const useLogin = () => {
  const { setUser } = useStore();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      username: string;
      password: string;
    };
    try {
      setLoading(true);
      const { data: user } = await PostRequest<typeof data, User>(
        "/auth/login",
        data
      );
      if (user.token) {
        setUser(user);
        localStorage.setItem("token", user.token);
        navigate("/");
      } else {
        toast.error("Wrong username or/and password");
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        toast.error("Wrong username or/and password");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    loading,
  };
};

export default useLogin;
