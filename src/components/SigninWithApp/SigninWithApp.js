import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import { FcGoogle } from "react-icons/fc";

const SigninWithApp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  //!--------google Sign-in--------
  const handleGoogle = () => {
    signInWithGoogle();
  };
  

  if (googleUser) {
    const data = { email: googleUser?.user?.email };

    fetch("https://radiant-harbor-32543.herokuapp.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        Swal.fire({
          title: "Welcome",
          text: "Successfully logged in",
          icon: "success",
        });
        navigate(from, { replace: true });
      });
  }


  //!--------google Sign-in Error --------
  useEffect(() => {
    if (googleError) {
      Swal.fire({
        title: "Error",
        text: googleError.message,
        icon: "error",
      });
    }
  }, [googleError]);

  return (
    <div className="mt-4">
        <div className="d-flex justify-content-center align-items-center">
            <div className="w-50 px-2"><hr /></div>
            or
            <div className="w-50 px-2"><hr /></div>
        </div>
        <button
        onClick={handleGoogle}
        className="btn btn-dark border border-2 border-dark text-white w-75 d-block mx-auto my-2 d-flex justify-content-center align-items-center">
        <FcGoogle size={"1.8em"}></FcGoogle>
        <span className="mx-2">Continue with Google</span>
        </button>
    </div>
  );
};

export default SigninWithApp;
