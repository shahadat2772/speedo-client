import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  // Navigator
  const navigate = useNavigate();

  // Form Hook
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="formBanner">
      <div className="formContent">
        <p className="text-center formHeader fs-2">REGISTER</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type={`text`}
            autoComplete="off"
            placeholder="NAME"
            required
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
