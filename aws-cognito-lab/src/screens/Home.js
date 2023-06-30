import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const Home = () => {
  const [email, setEmail] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);

  const userInfo = async () => {
    const response = await Auth.currentUserInfo();
    setEmail(response.attributes.email);
    setEmailVerified(response.attributes.email_verified);
  };

  useEffect(() => {
    userInfo();
  }, []);
  return (
    <>
      <h1>Home</h1>
      <p>Email: {email} </p>
      <p>Email Verified: {emailVerified ? "True" : "False"} </p>
    </>
  );
};

export default Home;
