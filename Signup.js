import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';

function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        // Check if all validations passed
        if (
            validationErrors.name === "" &&
            validationErrors.email === "" &&
            validationErrors.password === ""
        ) {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => {
                    console.error("Signup error:", err);
                });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className='bg-white p-4 rounded w-40'>
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            name='name'
                            className="form-control rounded-0"
                            value={values.name}
                            onChange={handleInput}
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name='email'
                            className="form-control rounded-0"
                            value={values.email}
                            onChange={handleInput}
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name='password'
                            className="form-control rounded-0"
                            value={values.password}
                            onChange={handleInput}
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    <button type='submit' className='btn btn-success w-100'><strong>Sign up</strong></button>
                    <Link to="/" className='btn btn-light border w-100 rounded-0 text-decoration-none mt-2'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
