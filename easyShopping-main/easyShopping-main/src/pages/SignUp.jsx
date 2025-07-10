import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../main';
import { FirebaseError } from 'firebase/app';

const SignIn = async (e) => {


try{
  await createUserWithEmailAndPassword(auth, "aselhobi02@gmail.com","qwerty" );
}
catch (error){
  console.log(error)
}
}

function SignUp() {
  const [activeTab, setActiveTab] = useState('signIn'); // Track which tab is active
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
    isRememberMeChecked: false,
  });



  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignInChange = (event) => {
    const { name, value } = event.target;
    setSignInData({ ...signInData, [name]: value });
  };


  // Switch between Sign In and Register tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your sign-up or sign-in logic here
    console.log('Form Data:', { email, password, isRememberMeChecked });
  };

  return (
    

    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <h2 className="text-3xl font-bold mb-8">My account</h2>
      <div className="border-b border-gray-300 w-full max-w-md mb-6">
        <div className="flex justify-center -mb-px">
          <button
            type="button"
            className={`text-sm font-semibold pb-4 px-6 ${activeTab === 'signIn' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`}
            onClick={() => handleTabClick('signIn')}
          >
            Sign in
          </button>
          <button
            type="button"
            className={`text-sm font-semibold pb-4 px-6 ${activeTab === 'register' ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}`}
            onClick={() => handleTabClick('register')}
          >
            Register
          </button>
        </div>
      </div>
      <form onSubmit={SignIn()} className="w-full max-w-md">
        {activeTab === 'signIn' && (
          <>
            {/* Sign In Form */}
            <div className="mb-6">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label htmlFor="rememberMe" className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={isRememberMeChecked}
                  onChange={() => setIsRememberMeChecked(!isRememberMeChecked)}
                  className="form-checkbox"
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-black hover:text-gray-800">
                Have you forgotten your password?
              </a>
            </div>
          </>
        )}
        {activeTab === 'register' && (
          <>
            {/* Register Form */}
            <div className="mb-6">
              <input
                type="text"
                id="name"
                name="name"
                value={signUpData.name}
                onChange={handleSignUpChange}
                required
                placeholder="Name"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="surname"
                name="surname"
                value={signUpData.surname}
                onChange={handleSignUpChange}
                required
                placeholder="Surname"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                name="email"
                value={signUpData.email}
                onChange={handleSignUpChange}
                required
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                required
                placeholder="Password"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={signUpData.confirmPassword}
                onChange={handleSignUpChange}
                required
                placeholder="Repeat Password"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
              />
            </div>
          </>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white w-full py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring"
          >
            {activeTab === 'signIn' ? 'SIGN IN' : 'REGISTER'}
          </button>
        </div>
      </form>
    </div>
  );

}

export default SignUp;
