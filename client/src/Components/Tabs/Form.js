import React, {useState} from 'react';
import StudentForm from '../Forms/StudentForm';
import TutorForm from '../Forms/TutorForm';

const Form = () => {
  return (
    <>
      <div><StudentForm/></div>
      <div><TutorForm/></div>
    </>
  )
}

export default Form