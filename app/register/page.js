"use client"
import { useState } from 'react'
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { createUserWithEmailAndPassword } from '@/config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/config/firebase';
const initialState = { email: "", password: "" }

export default function Register() {

  const [state, setState] = useState(initialState)

  const handelChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();

    const {email, password} = state

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("User Registration successful");
        console.log(userCredential)
        console.log(user)
        
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error)
        // ..
      });

    console.log(state)
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
        <div className="bg-white card p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Register Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-600 text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                placeholder="Your email"
                onChange={handelChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600 text-lg font-semibold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                placeholder="Your password"
                onChange={handelChange}
              />
            </div>
            <button
              type="submit"

              className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
