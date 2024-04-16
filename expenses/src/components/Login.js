import React, { useState } from 'react'

const Login = ({logDetailes}) => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [ remember , setRemember] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        logDetailes(email, password, remember);

        setEmail("");
        setPassword("")
        setRemember(false)

        alert("Successfully loged In!")

    }

  return (
    <div className='login template d-flex justify-content-center  align-items-start 100-w vh-100  h-100 bg-primary' >
        <div className='w-40 p-5 rounded bg-white m-5 ' >
        <form onSubmit={onSubmit}>
            <h3 >Log In</h3>
            <div className='mb-2'>
                <label htmlFor='email' className=' p-2'>Email</label>
                <input type={'email'} placeholder='Enter Email' className='form-control  text-align-start' value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor='possword' className=' p-2'>Password</label>
                <input type={'password'} placeholder='Enter Possword' className='form-control' value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <input type={'checkbox'} className='custom-control custom-chekbox' id='check' checked={remember} onChange={(e) => setRemember(e.target.checked)}/>
                <label htmlFor='check' className='custom-input-label'>Remember me</label>
            </div>
            <div className='d-grid'>
                <button type={'submit'} className='btn btn-primary'>Login In</button>

            </div>
        </form>
        </div>
    </div>
  )
}

export default Login
