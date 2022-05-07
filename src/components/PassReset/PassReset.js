import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const PassReset = () => {
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Password reset email sent!");
  };

  useEffect(()=>{
    if(sending){
        toast.info("sending password reset email...");
    }
  }, [sending]);

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
            <div className="shadow rounded-3 p-5">
              <h2 className="text-center fw-bold mb-3">Change Your Password</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Button className="w-100" variant="dark" type="submit">
                  Change Password
                </Button>
              </Form>

              <p className="my-4 text-center">
                Back to{" "}
                <Link className="text-primary text-decoration-none" to={"/login"}> Login </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PassReset;
