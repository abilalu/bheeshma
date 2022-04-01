import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';



function Login(){
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-4">
      <Link to="/signup">← Go to Signup</Link>

      <h2 className=" my-2">Login</h2>
      <form onSubmit={handleFormSubmit} className="my-4">
        <div className=" loginInputDiv my-2">
          <label htmlFor="email">Email address: </label>
          <br />
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="loginInputDiv my-2">
          <label htmlFor="pwd">Password:</label><br />
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="login-btn ">
          <button className="" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
