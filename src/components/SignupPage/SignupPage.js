import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";

const SignupPage = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
  const navigate = useNavigate();

//!-------- Handle Signup Form --------
  const handleSubmit = async(e) => {
    e.preventDefault();

    const name = e.target.userName.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(name, email, pass);

    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name })
  };

  if (user) {
    Swal.fire({
        title: "Account created!",
        text: "You can login now",
        icon: "success",
      });
      navigate("/login");
  }

  return (
    <div>
      <div className="row gx-0  flex-sm-column-reverse flex-column-reverse flex-md-column-reverse flex-lg-row">
        <div className="col-lg-6 left-img"></div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-center login-form">
            <div className="">
              <h2 className="text-center my-3">Signup</h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="userName"
                    required
                    // onChange={handleName}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                  <div className="text-danger">
                    {/* {loginError?.emailError ? loginError.emailError : ""} */}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  {/* <div className="text-danger">
                      {loginError?.passwordError
                        ? loginError.passwordError
                        : ""}
                    </div> */}
                </Form.Group>

                <Button className="w-100" variant="dark" type="submit">
                  Login
                </Button>
              </Form>

              <p className="my-3 text-center">
                Back to{" "}
                <Link
                  className="text-primary text-decoration-none"
                  to={"/login"}
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
