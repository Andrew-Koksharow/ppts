import React from 'react';
import { useFormik } from 'formik';
import s from './ProfileDataBlock.module.scss'

// const validate = values => {

//   const errors = {};

//   if (!values.firstName) {

//     errors.firstName = 'Required';

//   } else if (values.firstName.length > 15) {

//     errors.firstName = 'Must be 15 characters or less';

//   }


//   if (!values.lastName) {

//     errors.lastName = 'Required';

//   } else if (values.lastName.length > 20) {

//     errors.lastName = 'Must be 20 characters or less';

//   }

//   if (!values.email) {

//     errors.email = 'Required';

//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {

//     errors.email = 'Invalid email address';

//   }


//   return errors;

// };




const ProfileDataBlock = () => {
  

  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      street: '',
      company: '',
      email: '',
      phone: ''
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (

    <form className={s.form} onSubmit={formik.handleSubmit}>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="city">city</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
      />

      <label htmlFor="street">street</label>
      <input
        id="street"
        name="street"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.street}
      />

      <label htmlFor="company">company</label>
      <input
        id="company"
        name="company"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.company}
      />


<label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      
<label htmlFor="phone">phone</label>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />


      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileDataBlock