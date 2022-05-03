import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {
  // Navigator
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // Hook For User Creation in firebase
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // Hook to update users info
  const [updateProfile, updating, userUpdateError] = useUpdateProfile(auth);

  let from = location?.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }

  if (error || userUpdateError) {
    toast.error(error.message || userUpdateError.message, {
      id: "registerError",
    });
  }

  // Form Hook
  const onSubmit = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;

    if (password !== confirmPassword) {
      return toast.error("Confirm password did not matched!", {
        id: "passwordDidNotMatched",
      });
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };
  if (user) {
    toast.success("Registered Successfully", {
      id: "registeredSuccess ",
    });
    console.log(user);
    navigate(from, { replace: true });
  }

  return (
    <div className="formBanner">
      <div className="formContent">
        <p className="text-center formHeader fs-2">REGISTER</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type={`text`}
            autoComplete="off"
            placeholder="NAME"
            {...register("name")}
          />
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
          <input
            type={`password`}
            placeholder="CONFIRM PASSWORD"
            required
            {...register("confirmPassword")}
          />
          <input className="formSubmitBtn" value={`REGISTER`} type="submit" />
        </form>
        <p onClick={() => navigate("/login")} className="formToggleBtn">
          Have an account?
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
