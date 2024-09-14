import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'

export default function Register() {
    const formik = useFormik({
        initialValues:{
            userName: '',
            email: '',
            password: ''
        },onSubmit: async()=>{
const {data} = await axios.post(`https://fakestoreapi.com/products`,formik.values);
        console.log(data);
},validate:values=>{
    let errors = {};
    if(values.email.length<=10){
        errors.email = 'email should be at least 10 characters long';
    }
    if(values.password.length<=6){
        errors.password = 'password should be at least 6 characters long';
    }

    return errors;


}


    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <h1>Register</h1>
 
 <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingInput" placeholder="UserName"
    name='userName' value={formik.userName} onChange={formik.handleChange}  />
    <label htmlFor="floatingInput">UserName</label>
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
    name='email' value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
   name='password' value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
    <label htmlFor="floatingPassword">Password</label>
  </div>
  <div className="form-floating my-3">
    <button type='submit' className='btn btn-outline-dark'>Register</button>
  </div>
 
    </form>
  )
}
