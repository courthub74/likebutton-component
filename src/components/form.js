import React, { useState } from 'react';
import './components.css';

function Form(){

    //Field Values
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    //Submitted
    const [submitted, setSubmitted] = useState(false);
    
    //valid
    const [valid, setValid] = useState(false);

    //FirstNameInput
    const handleFirstNameInputChange = (event) => {
        setValues({...values, firstName: event.target.value})
    }

    //LastNameInput
    const handleLastNameInputChange = (event) => {
        setValues({...values, lastName: event.target.value})
    }

    //EmailInput
    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.firstName && values.lastName && values.email){
            setValid(true);
        }
        setSubmitted(true);
    }

    return (
        <div class="form-container">
            <form class="register-form" onSubmit={handleSubmit}>
                {/* Uncomment the next line to show the success message */}
                {/* if submitted display the message if not null */}
                {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
                <input
                    onChange={handleFirstNameInputChange} 
                    value={values.firstName}
                    id="first-name"
                    class="form-field"
                    type="text"
                    placeholder='First Name'
                    name='firstname'/>
                {submitted && !values.firstName ? <span className='alert-message'>Please enter a first name</span> : null}

                 {/* Uncomment the next line to show the error message */}
                 <input
                    onChange={handleLastNameInputChange}
                    id="last-name"
                    class="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"/>
                {submitted && !values.lastName ? <span className='alert-message'>Please enter a last name</span> : null}

                 {/* Uncomment the next line to show the error message */}
                 <input
                    onChange={handleEmailInputChange}
                    id="email"
                    class="form-field"
                    type="text"
                    placeholder="Email"
                    name="email" />
                {submitted && !values.email ? <span className='alert-message'>Please enter an email</span> : null}

                 {/* Uncomment the next line to show the error message */}
                 <button class="form-field" type="submit">Register</button>
                     </form>
                 </div>
    )
}
export default Form;

