import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Blog = () => {
  return (
    <>
      <Header></Header>
      <div className="container py-5 my-4">
        <h1 className="text-center fw-bold mb-4">My Blogs</h1>

        <div className="item-card p-4 rounded-3 bg-black mb-4">
          <h3 className="mb-3 text-white">
            Difference between JavaScript and NodeJS
          </h3>
          <p className="text-white">
            JavaScript is a programming language and NodeJS is not a programming
            language. NodeJS is a runtime environment for JavaScript. We can
            only run JavaScript in browsers but if we want to run JavaScript
            outside the browser then we have to use NodeJS. We use JavaScript on
            the client-side whereas Nodejs is used on the server-side.
            JavaScript can run in any browser engine and NodeJS uses the V8
            engine to run JavaScript. Adding HTML and DOM manipulation can be
            done using JavaScript whereas NodeJS cannot add HTML tags and DOM
            manipulation.
          </p>
        </div>

        <div className="item-card p-4 rounded-3 bg-black mb-4 ">
          <h3 className="mb-3 text-white">
            Differences between SQL and NoSQL databases?
          </h3>
          <p className="text-white">
            SQL is a Structured Query language and it is a Relational Database
            Management System (RDBMS). NoSQL is a non-relational or distributed
            database system. The structure of the SQL database is a table-based
            system whereas NoSQL databases use key-value pairs document-based
            systems. SQL database is vertically scalable and NoSQL database is
            horizontally scalable. SQL is not suitable for hierarchical data
            storage but NoSQL is best suited for hierarchical data storage.
          </p>
        </div>

        <div className="item-card p-4 rounded-3 bg-black mb-4 ">
          <h3 className="mb-3 text-white">
            What is the purpose of JWT and how does it work?
          </h3>
          <p className="text-white">
            The full form of JWT is Json Web Token. It allows clients and
            servers to share security information. The goal of utilizing JWT is
            to confirm the data's authenticity, not to hide it. A JWT token is
            the combination of three parts and each part is separated by dots(.)
            and serialized using base64. The first part is header, the middle
            one is payload and the last part is the signature. At first JWT
            generate an encrypted token for a valid user then we have to verify
            the token to get any valid server request. In this way the API key
            or the server URL can only be accessed by a valid user. The JWT
            token is used for increase the security system of a website.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
