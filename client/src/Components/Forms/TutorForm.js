import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const TutorForm = () => {
    const [name, setName] = useState('')
    const [free, setFree] = useState('')
    const [subjects, setSubjects] = useState('')
    const [email, setEmail] = useState('')

    const periods = [
        { title: 'Period 1', year: 1994 },
        { title: 'Period 2', year: 1972 },
        { title: 'Period 3', year: 1974 },
        { title: 'Period 4', year: 2008 },
        { title: 'Period 5', year: 1957 },
        { title: 'Period 6', year: 1993 },
        { title: 'Period 7', year: 1994 },
        { title: 'Period 8', year: 2003 },
        { title: 'Period 9', year: 1966 },
    ];

    const handleSubmit = () => {
        const config = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({
                name,
                //free,
                //subjects,
                email
                // Name, Email, isTutor
            })
        }
        fetch("/registerTutor", config)
    }

    return (
        <div>
            <Autocomplete
                multiple
                id="tags-standard"
                options={periods}
                getOptionLabel={(option) => option.title}
                //defaultValue={[periods[0]]}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Multiple values"
                        placeholder="Favorites"
                        onChange={console.log(params)}
                    />
                )}
                
            />
            <label htmlFor='name'>
                Name
            </label>
            <input
                onChange={(e) => {
                    setName(e.target.value)
                }}
                type="text"
                placeholder='Your Name'
                name='name'
            />
            <label htmlFor='email'>
                Email
            </label>
            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                type="email"
                placeholder='Your Email'
                name='email'
            />
            <input
                onClick={handleSubmit}
                type="submit"
                value='Register'
            />
                       
        </div>
    )
}

export default TutorForm;