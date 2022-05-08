import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";
import SigninWithApp from "../SigninWithApp/SigninWithApp";

const SignupPage = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [passError, setPassError] = useState("");

//!-------- Handle Signup Form --------
  const handleSubmit = async(e) => {
    e.preventDefault();

    const name = e.target.userName.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(name, email, pass);

    if (/.{6,}/.test(pass) === false) {
      setPassError("minimum characters must be 6!");
      console.log('gnf');
    }
    else{
      console.log('add');
      setPassError("");
      await createUserWithEmailAndPassword(email, pass);
      await updateProfile({ displayName: name })
    }
  };

  //!-------- Successful signup message --------
  if (user) {
    console.log(user);
    Swal.fire({
        title: "Account created!",
        text: "You can login now",
        icon: "success",
      });
      navigate("/login");
  }

  //!----------- alert for error message-------------
  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  }, [error]);

  return (
    <div>
      <div className="row gx-0  flex-sm-column-reverse flex-column-reverse flex-md-column-reverse flex-lg-row">
        <div className="col-lg-6 left-img"></div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-center login-form">
            <div className="shadow rounded-3 p-3 p-lg-5">
              <h2 className="text-center fw-bold mb-3">Signup</h2>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="userName"
                    required
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
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <div className="text-danger">
                  {passError && passError}
                  </div>
                </Form.Group>

                <Button className="w-100" variant="dark" type="submit">
                  Signup
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
              <SigninWithApp></SigninWithApp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
