import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (
    <div className="form">
      <div className="Headline py-desktop ">
        <span> Try it free 7 days</span> then $20/mo. thereafter
      </div>
      <div className="signup">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <div className="relative">
              <input
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First Name cannot be empty",
                  },
                })}
                className={`Box form_input w-full ${
                  errors.firstName ? "red" : ""
                }`}
                placeholder={`${errors.firstName ? "" : "First name"}`}
                type="text"
              />
              {errors.firstName && (
                <div className="absolute error">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#FF7979" cx="12" cy="12" r="12" />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="6"
                        width="2"
                        height="9"
                        rx="1"
                      />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="17"
                        width="2"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </div>
              )}
            </div>
            {errors.firstName ? errors.firstName.message : ""}
          </div>
          <div className="input">
            <div className="relative">
              <input
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "last Name cannot be empty",
                  },
                })}
                className={`Box form_input w-full ${
                  errors.lastName ? "red" : ""
                }`}
                placeholder={`${errors.lastName ? "" : "Last name"}`}
                type="text"
              />
              {errors.lastName && (
                <div className="absolute error">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#FF7979" cx="12" cy="12" r="12" />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="6"
                        width="2"
                        height="9"
                        rx="1"
                      />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="17"
                        width="2"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </div>
              )}
            </div>
            {errors.lastName ? errors.lastName.message : ""}
          </div>
          <div className="input">
            <div className="relative">
              <input
                {...register("Email", {
                  pattern: {
                    value: regex,
                    message: "Look like this is not an email",
                  },
                })}
                className={`Box form_input w-full ${errors.Email ? "red" : ""}`}
                placeholder={`${errors.Email ? "" : "Email Address"}`}
                type="text"
              />
              {errors.Email && (
                <div className="absolute error">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#FF7979" cx="12" cy="12" r="12" />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="6"
                        width="2"
                        height="9"
                        rx="1"
                      />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="17"
                        width="2"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </div>
              )}
            </div>
            {errors.Email ? errors.Email.message : ""}
          </div>

          <div className="input">
            <div className="relative">
              <input
                {...register("Password", {
                  required: {
                    value: true,
                    message: "Password cannot be empty",
                  },
                })}
                className={`Box form_input w-full ${
                  errors.Password ? "red" : ""
                }`}
                placeholder={`${errors.Password ? "" : "Password"}`}
                type="text"
              />
              {errors.Password && (
                <div className="absolute error">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#FF7979" cx="12" cy="12" r="12" />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="6"
                        width="2"
                        height="9"
                        rx="1"
                      />
                      <rect
                        fill="#FFF"
                        x="11"
                        y="17"
                        width="2"
                        height="2"
                        rx="1"
                      />
                    </g>
                  </svg>
                </div>
              )}
            </div>
            {errors.Password ? errors.Password.message : ""}
          </div>
          <button className="Box submit " type="submit">
            claim you free trial
          </button>
        </form>
        <div>
          By clicking the button, you are agreeing to our
          <span>&nbsp;Terms and Services</span>
        </div>
      </div>
    </div>
  );
};

export default Form;
