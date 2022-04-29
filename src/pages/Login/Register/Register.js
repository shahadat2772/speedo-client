import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";
const Register = () => {
  // Navigator
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // Hook For User Creation in firebase
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    toast.error(error.message, {
      id: "registeredSuccess",
    });
  }

  // Form Hook
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;

    if (password !== confirmPassword) {
      return toast.error("Confirm password did not matched!", {
        id: "passwordDidNotMatched",
      });
    }

    await createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    toast.success("Registered Successfully", {
      id: "registeredSuccess ",
    });
    navigate("/home");
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
      </div>
    </div>
  );
};

export default Register;
