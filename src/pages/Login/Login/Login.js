import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Navigator
  const navigate = useNavigate();

  // Form Hook
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
  };

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
