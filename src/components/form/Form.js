import React, { useState } from 'react'

const Form = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [error, setError] = useState(false);
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        hobby: false
    })
    // const handleOnchangeFirst = (e) => {
    //     let a = setInterval(()=> {
    //         return e.target.value;
    //     }, 2000)
    //     setFirstname(a);
    //     console.log(firstname);
    // }
    const handleError = (e) => {
        if (e.target.value.length < 10) {
            setError(true);
        } else setError(false);

    }

    const handleOnchange = (e) => {
        const type= e.target.type;
        setValues({
            ...values,
            [e.target.name]: type ==="checkbox" ? e.target.checked : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstname);
        console.log(lastname);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First name</label>
            <input
                className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                type="text"
                name="firstname"
                // value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Type first name here..."
            />
            <input/>
            <br />
            <label htmlFor="lastname">Last name</label>
            <input
                className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                type="text"
                name="lastname"
                // value={lastname}
                placeholder="Type last name here..."
                onChange={(e) => setLastname(e.target.value)}
                // onChange={handleOnchange}
            />
            <label htmlFor="hobby">Hobby</label>
            <input
                // className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                type="checkbox"
                name="hobby"
                // value={lastname}
                onChange={handleOnchange}
            />
            <button>Submit</button>
        </form>
    )
}

export default Form