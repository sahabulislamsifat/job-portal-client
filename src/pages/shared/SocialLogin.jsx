import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => console.log(result.user))
      .cath((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <button onClick={handleGoogle} className="btn bg-green-600 text-white">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
