import React from "react";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import useToken from "../../../hooks/useToken";

import "./SocialLogin.css";

const SocialLogin = () => {
  // Navigator
  const navigate = useNavigate();
  const location = useLocation();

  const [user, useAuthLoading] = useAuthState(auth);

  // Hook to sign in with google
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  let from = location?.state?.from?.pathname || "/";

  const [token] = useToken(user);

  let loadingElement;
  if (loading || useAuthLoading) {
    loadingElement = (
      <p className="waitText">
        <small>Please wait</small>
      </p>
    );
  } else {
    loadingElement = undefined;
  }

  if (error) {
    toast.error(error.message, {
      id: "socialLoginError",
    });
  }

  if (user) {
    toast.success("Logged in successfully.", {
      id: "googleSignUpSuccess",
    });
    localStorage.setItem("accessToken", token);
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="orContainer">
        <div className="aroundOR"></div>
        OR
        <div className="aroundOR"></div>
      </div>
      {loadingElement && loadingElement}
      <button className="socialLoginBtn" onClick={() => signInWithGoogle()}>
        CONTINUE WITH GOOGLE{" "}
        <img
          className="googleLogo"
          src="https://i.ibb.co/0ZbPGnh/google.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default SocialLogin;
