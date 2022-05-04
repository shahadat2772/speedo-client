import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const useToken = (user) => {
  const [token, setToken] = useState("");

  const email = user?.user?.email;

  useEffect(() => {
    const getToken = async () => {
      if (email) {
        const { data } = await axios.post(
          "https://hidden-chamber-41609.herokuapp.com/token",
          {
            email,
          }
        );
        setToken(data);
        localStorage.setItem("accessToken", data);
      }
    };
    getToken();
  }, [user]);

  return [token];
};

export default useToken;
