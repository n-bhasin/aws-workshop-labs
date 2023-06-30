import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const ConfirmSignUp = ({ email }) => {
  const navigate = useNavigate();
  const [confirmCode, setConfirmCode] = useState("");

  const handleSignUpConfirm = async (e) => {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(email, confirmCode);
      alert("User signed up confirmed. You may login now.");
      navigate("/login");
    } catch (error) {
      alert(error);
      console.log("Error signing up:", error);
    }
  };
  return (
    <>
      <h1>Confirm Sign Up</h1>

      <form onSubmit={handleSignUpConfirm}>
        <input
          type="text"
          placeholder="confirmation code"
          value={confirmCode}
          onChange={(e) => setConfirmCode(e.target.value)}
        />
        <button type="submit">Confirm</button>
      </form>
    </>
  );
};

export default ConfirmSignUp;
