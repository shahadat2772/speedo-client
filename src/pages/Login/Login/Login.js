import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const location = useLocation();
  // Navigator
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // Hook to sign in
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

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
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    await signInWithEmailAndPassword(email, password);
  };
  if (user) {
    toast.success("Logged in Successfully", {
      id: "LogInSuccess ",
    });
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="formBanner">
        <div className="formContent">
          <p className="text-center formHeader fs-2">LOGIN</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type={`email`}
              autoComplete="off"
              placeholder="EMAIL"
              required
              {...register("email")}
            />
            <input
              type={`password`}
              autoComplete="off"
              placeholder="PASSWORD"
              required
              {...register("password")}
            />

            <input className="formSubmitBtn" value={`LOGIN`} type="submit" />
          </form>
          <p onClick={() => navigate("/register")} className="formToggleBtn">
            Don't have an account?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
