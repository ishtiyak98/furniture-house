import React from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import SigninWithApp from "../SigninWithApp/SigninWithApp";
import "./LoginPage.css";

const LoginPage = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    Swal.fire({
      title: "Welcome",
      text: "Successfully logged in",
      icon: "success",
    });
    navigate(from, { replace: true });
  }

  if (loading) {
    return(
      <div className="position-absolute top-50 start-50 translate-middle">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  if (error) {
    Swal.fire({
      title: "Error",
      text: error.message,
      icon: "error",
    });
  }

  return (
    <div>
      <div className="row gx-0  flex-sm-column-reverse flex-column-reverse flex-md-column-reverse flex-lg-row">
        <div className="col-lg-6 left-img"></div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-center login-form">
            <div className="">
              <h2 className="text-center my-3">Login</h2>

              {/* <form action="">
                        <input className="d-block" type="email" name="email" id="email" placeholder="Email"/>
                        <input className="d-block" type="password" name="pass" id="pass" placeholder="Password"/>
                        <input type="submit" value="Login" />
                  </form>  */}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
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
                    name="password"
                    placeholder="Password"
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
                Don't have an account?{" "}
                <Link
                  className="text-primary text-decoration-none"
                  to={"/signup"}
                >
                  Signup
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

export default LoginPage;
