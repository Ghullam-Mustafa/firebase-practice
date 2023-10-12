// "use client"
// import { useState, useEffect } from 'react'
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { createUserWithEmailAndPassword } from '@/config/firebase';
// import { signInWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
// import { auth } from '@/config/firebase';
// const initialState = { email: "", password: "" }

// export default function Login() {

//   const [state, setState] = useState(initialState)
//   const [user, setUser] = useState({})

//   useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         // const uid = user.uid;
//         console.log(user)
//         setUser(user)
//         // ...
//       } else {
//         // User is signed out
//         // ...
//       }
//     });
//   },[])

//   const handelChange = e => {
//     setState({ ...state, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = e => {
//     e.preventDefault();

//     const {email, password} = state

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed up 
//         const user = userCredential.user;
//         console.log("User LogedIn successful");
//         console.log(userCredential)
//         console.log(user)
        
//         // ...
//       })
//       .catch((error) => {
//         // const errorCode = error.code;
//         // const errorMessage = error.message;
//         console.log(error)
//         // ..
//       });

//     console.log(state)
//   }
//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
     

//         <div className="bg-white card p-8 rounded-lg shadow-md w-full max-w-md">
//       {user.email ? 
//       <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">User Email {user.email}</h2>
//       :
      
//       <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Login Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-6">
//           <label htmlFor="email" className="block text-gray-600 text-lg font-semibold mb-2">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//             placeholder="Your email"
//             onChange={handelChange}
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-600 text-lg font-semibold mb-2">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//             placeholder="Your password"
//             onChange={handelChange}
//           />
//         </div>
//         <button
//           type="submit"

//           className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//       }

       
//         </div>
//       </div>
//     </>
//   )
// }

"use client"

import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged , signOut} from 'firebase/auth';
import { auth } from '@/config/firebase';

const initialState = { email: "", password: "" };

export default function Login() {
  const [state, setState] = useState(initialState);
  const [user, setUser] = useState(null); // Initialize user as null.

  useEffect(() => {
    // Listen to changes in user authentication state.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set the user if authenticated.
      } else {
        setUser(null); // Set user as null if not authenticated.
      }
    });
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = state;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User Logged In successfully");
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(state);
  };

  const  handleLogout = ()=>{
    console.log("Logiut button clicked");
    signOut(auth)
    .then(()=>{
      console.log("User Logout ")
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
      <div className="bg-white card p-8 rounded-lg shadow-md w-full max-w-md">
        {user ? (
          <>
          <div>
            <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">
              Welcome, {user.email}
            </h2>
          </div>
          <div className="text-center">
          <button className='bg-blue-600 py-3 px-5 text-white rounded-lg' onClick={handleLogout}>Logout</button>
          </div>
          </>
        ) : (
          <div>
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Login Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-600 text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                  placeholder="Your email"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
