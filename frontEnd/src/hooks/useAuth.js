import { useContext } from "react";
import AuthContext from "../components/pages/login/context/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
