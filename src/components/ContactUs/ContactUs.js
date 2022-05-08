import React from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("message has been sent");
  };

  return (
    <div className="pb-5 mb-5 container">
      <h1 className="text-start mb-5 fw-bold px-4">
        Contact <span className="text-warning">Us</span>
      </h1>

      <div className="row gx-lg-5 gy-5">
        <div className="col-lg-6 px-5">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold fs-5">Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold fs-5">Phone</Form.Label>
              <Form.Control type="number" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold fs-5">Email address</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold fs-5">Topic</Form.Label>
              <Form.Select>
                <option>Shipping</option>
                <option>Logistic</option>
                <option>Dispatch</option>
                <option>Payment</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold fs-5">Message</Form.Label>
              <Form.Control as="textarea" rows={4} required />
            </Form.Group>

            <Button variant="dark" className="px-5" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-lg-6 px-5 text-lg-start">
          <h1 className="company-name">Furniture <span style={{fontFamily: "Marck Script"}} className="text-warning">House</span></h1>
          <div className="mb-4">
            <h4 className="fw-bold text-warning mb-1">Corporate Office</h4>
            <p className="mb-0">325s, Block D, Manik Avenue, Dhaka 1200</p>
          </div>
          <div className="mb-4">
            <h4 className="fw-bold text-warning mb-1">Warehousing Facility</h4>
            <p className="mb-0">123s, Jaydebpur, Gazipur 1700, Bangladesh</p>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold text-warning mb-1">Phone and Email</h4>
            <p className="mb-0">
              {" "}
              <span className="number">013-435-4556</span> /
              furnitureHouse@genextrans.com
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold text-warning mb-1">Hours of Operation</h4>
            <p className="mb-0">
              We are open <span className="number">24/7/365</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
