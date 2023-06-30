import React, { useState } from "react";
import { Auth } from "aws-amplify";
import ConfirmSignUp from "./ConfirmSignUp";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showConfirmBox, setShowConfirmBox] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await Auth.signUp({
        username: email,
        password,
      });
      if (!response.userConfirmed) {
        setShowConfirmBox(true);
      }

      // User signed up successfully
      alert("User signed up successfully");
    } catch (error) {
      console.log("Error signing up:", error);
    }
  };

  return (
    <>
      {showConfirmBox ? (
        <ConfirmSignUp email={email} />
      ) : (
        <>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </>
      )}
    </>
  );
};

export default SignUp;
