import React, { useState } from 'react';

const StudentForm = () => {
    const [name, setName] = useState('')
    const [free, setFree] = useState('')
    const [subjects, setSubjects] = useState('')
    const [email, setEmail] = useState('')
    

    const handleSubmit = () => {
        const config = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                name,
                //free,
                //subjects,
                email
                // Name, Email, isTutor
            })
        }
        fetch("/registerStudent", config)
    }

    return (
        <div>
            <label htmlFor='name'>
                Name
            </label>
            <input class="text"
                onChange={(e) => {
                    setName(e.target.value)
                }}
                type="text"
                placeholder='Your Name'
                name='name'
            />
            <br></br>
            <label htmlFor='email'>
                Email
            </label>
            <input class="text"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                type="email"
                placeholder='Your Email'
                name='email'
            />
            <br></br>
            <label htmlFor='subject'>
                Subject(s)
            </label>
            <input class="text"
                onChange={(e) => {
                    setSubjects(e.target.value)
                }}
                type='text'
                placeholder='Your Subject(s)'
                name='subject'
                />
                <br></br>
            <input 
                onClick={handleSubmit}
                type="submit"
                value='Register'
            />

        </div>
    )
}

export default StudentForm;