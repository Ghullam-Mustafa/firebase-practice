
"use client"
import { collection, addDoc , setDoc, doc } from 'firebase/firestore/lite';

import { useState, } from 'react';
import { fireStore } from '@/config/firebase';

const initialState = { fullname: "", age: "", country: "" };

export default function Login() {
  const [state, setState] = useState(initialState);
  //   const [user, setUser] = useState({}); // Initialize user as null.

  // useEffect(() => {
  //   // Listen to changes in user authentication state.
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user); // Set the user if authenticated.
  //     } else {
  //       setUser(null); // Set user as null if not authenticated.
  //     }
  //   });
  // }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { fullname, age, country } = state

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log(state);


  //   try {
  //     const docRef = await addDoc(collection(fireStore, "users"), { fullname, age, country });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(state);
    
    let randomId = Math.random().toString(36).slice(2)
    console.log(randomId)
    

    try {
      await setDoc(doc(fireStore, "users", randomId), { fullname, age, country , id:randomId  });
      // console.log("Document written with ID: ", docRef.id);
      console.log("Document written with ID: ", randomId);

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  const showAuthUser = () => {
    console.log(auth.currentUser)

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
      <div className="bg-white card p-8 rounded-lg shadow-md w-full max-w-md">

        <div>
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Add User Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-600 text-lg font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600 text-lg font-semibold mb-2">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                placeholder="Your Age"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600 text-lg font-semibold mb-2">Country</label>
              <input
                type="country"
                id="country"
                name="country"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                placeholder="Country"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-blue-700"
            >
              Add User
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
