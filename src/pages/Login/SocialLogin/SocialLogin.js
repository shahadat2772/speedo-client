import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./SocialLogin.css";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  // Hook to sign in with google
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let loadingElement;
  if (loading) {
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
