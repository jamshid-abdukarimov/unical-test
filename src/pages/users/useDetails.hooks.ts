import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetOneRequest } from "../../lib";

const useDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    user: null as (User & UserDetails) | null,
    loading: false,
    error: null,
  });
  React.useEffect(() => {
    (async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const { data } = await GetOneRequest<User & UserDetails>("/users", id!);
        setState((prev) => ({ ...prev, user: data }));
      } catch (error: any) {
        console.log(error);
        setState((prev) => ({
          ...prev,
          error: error.response.data.message || "Something went wrong",
        }));
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, []);

  const navigation = (n: "todos" | "posts") => {
    return navigate(`/users/${id}/${n}`);
  };

  return {
    ...state,
    navigation,
  };
};

export default useDetails;
