# User Authentication using AWS-Cognito

User authentication is a critical aspect of web application development. AWS Cognito provides a secure and scalable solution for managing user signups, logins, and authentication flows. In this blog post, we will explore how to integrate AWS Cognito into a React.js application to enable user registration and login functionality. We will cover the steps involved in setting up an AWS Cognito user pool, implementing the signup and login forms, and performing authentication using AWS Cognito.
Medium article:

## Prerequisites:

Basic knowledge of React.js and JavaScript
An AWS account

## Setting up AWS Cognito User Pool:

Create a new AWS Cognito user pool in the AWS Management Console.
Configure the necessary settings and take note of the User Pool ID and App Client ID, as we will need these later for our React application. setting to configure such as -

- sign-in options as Email
- password policy
- No MFA enforcement for this tutorial
- choose Send email with cognito option under Email section choose to send the confirmation code to user's email id
- pool name
- app client name.

## Components

- SignUp.js
- Login.js
- ConfirmSignUp.js
- Home.js
