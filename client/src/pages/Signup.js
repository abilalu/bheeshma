import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import rsvp from '../assets/fur.png';

function SignupHomedeck(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        phoneNumber:formState.phoneNumber
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
    <div className="container my-4 signupHeaderWrapper">
      <Link to="/Login" >← Go to Login</Link>
      <h2 className=" signUpTitle my-2">Signup</h2>
    </div>

    <div className="container signupWrapper my-4">
    <img className="container rsvp-image mx-3" src={rsvp} alt="rsvp with us"></img>
      <form className=" mx-4" onSubmit={handleFormSubmit}>

        <div className="  my-2">
          <label htmlFor="firstName">Enter First Name: </label>
          <br />
          <input
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="  my-2">
          <label htmlFor="lastName">Enter Last Name: </label> <br />
          <input
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="  my-2">
          <label htmlFor="email">Enter Email: </label> <br />
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="  my-2">
          <label htmlFor="pwrd">Enter new Password: </label> <br />
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwrd"
            onChange={handleChange}
          />
        </div>
        <div className="  my-2">
          <label htmlFor="phoneNumber">Enter Phone Number: </label> <br />
          <input
            placeholder="000-000-0000"
            name="phoneNumber"
            type="phoneNumber"
            id="phoneNumber"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default SignupHomedeck;
