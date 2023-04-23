import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'

const Form = () => {
    const validate = (values) => {
        const error = {}
        if (!values.firstname) 
            error.firstname = 'Required';
        else if (values.firstname.length > 20) 
            error.firstname = "More than 20 chracter"

        if (!values.lastname) 
            error.lastname = 'Required';
        else if (values.lastname.length > 20) 
            error.lastname = "More than 20 chracter"
        return error;
    }

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: ""
        }
    })
//     const formik = useFormik({
//         initialValues: {
//             firstname: '',
//             lastname: '',
//         },
//         //   validate,
//         onSubmit:  values {
//             console.log(values)
//         }
// })

    
    console.log(formik);
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstname">First name</label>
            <input
                className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                type="text"
                id="firstname"
                name="firstname"                
                placeholder="Type first name here..."
            />
            <input/>
            <br />
            <label htmlFor="lastname">Last name</label>
            <input
                className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                type="text"
                id="lastname"
                name="lastname"
                // value={lastname}
                placeholder="Type last name here..."
                
                // onChange={handleOnchange}
            />
            <label htmlFor="hobby">Hobby</label>
            <button>Submit</button>
        </form>
    )
}

export default Form