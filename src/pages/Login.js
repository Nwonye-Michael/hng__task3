import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiImage } from "react-icons/fi"
import { auth } from "../components/FireBase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

function Login() {
  // const history = useHistory()
  const nav = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        nav("/gallery")
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const register = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          nav("/gallery")
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="login flex flex-col h-[100vh] items-center text-left ">
      <Link to="/" className="not-italic no-underline mt-10 ">
        {" "}
        <div className="login_logo flex my-3 mx-0 gap-1 ">
          <FiImage className="login__logoImage text-blue-600" size={30} />
          <div className="login__logoTitle text-black font-semibold">
            gallery
          </div>
        </div>
      </Link>
      <div className="login__container flex flex-col h-fit w-80  p-10 border-2 ">
        <h1 className="text-2xl mb-4 font-semibold">Sign-in</h1>

        <form className=" flex flex-col">
          <h5 className="text-xs font-bold  mb-3">E-mail</h5>
          <input
            type="text"
            value={email}
            className="border-black border-[1.5px] rounded-md mb-3 p-1 text-xs"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <h5 className="text-xs font-bold  mb-3">Password</h5>
          <input
            type="password"
            className="border-black border-[1.5px] rounded-md mb-3 p-1 text-xs"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              signIn(e)
            }}
            className="login__signInButton rounded-md bg-blue-400 border w-fit mx-auto text-sm hover:text-red-500 font-semibold  px-4 py-1 mb-2"
          >
            Sign In
          </button>
        </form>

        <p className="text-[9px] font-medium mb-3">
          By signing-in you agree to the terms and conditions of use & sale of
          eShop website Click to see our Privacy & Cookie notice and our
          Intrest-Based Ads Notice
        </p>
        <button
          className="login__registerButton border bg-slate-100 "
          onClick={(e) => {
            register(e)
          }}
        >
          Create your gallery Account
        </button>
      </div>
    </div>
  )
}

export default Login
