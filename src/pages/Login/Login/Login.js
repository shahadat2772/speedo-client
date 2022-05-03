import { async } from "@firebase/util";
import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const location = useLocation();
  // Navigator
  const navigate = useNavigate();

  // Hook to sign in
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, errorForPasswordReset] =
    useSendPasswordResetEmail(auth);

  // useRef for getting value from inputs
  const emailRef = useRef("");
  const passwordRef = useRef("");

  let from = location?.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    toast.error(error.message, {
      id: "loginError",
    });
  }

  // Form Hook
  const handleSubmit = async () => {
    const email = emailRef.current.value;
    const password = emailRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };
  if (user) {
    toast.success("Logged in Successfully", {
      id: "LogInSuccess ",
    });
    navigate(from, { replace: true });
  }

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Password reset email");
    } else {
      toast.error("Please enter an email.");
    }
  };

  return (
    <div>
      <div className="formBanner">
        <div className="formContent">
          <p className="text-center formHeader fs-2">LOGIN</p>
          <form onSubmit={handleSubmit}>
            <input
              ref={emailRef}
              type={`email`}
              autoComplete="off"
              placeholder="EMAIL"
              required
            />
            <input
              ref={passwordRef}
              type={`password`}
              autoComplete="off"
              placeholder="PASSWORD"
              required
            />

            <input className="formSubmitBtn" value={`LOGIN`} type="submit" />
          </form>
          <p onClick={() => navigate("/register")} className="formToggleBtn">
            Don't have an account?
          </p>
          <p onClick={handleResetPassword} className="formToggleBtn">
            Forgot password?
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
