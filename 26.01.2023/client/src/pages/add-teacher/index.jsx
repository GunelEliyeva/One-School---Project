import React from 'react';
import "./index.scss";
import { Formik, Form, Field } from 'formik';
import {TeachersSchema} from "../add-teacher/schema/index";
import axios from 'axios';
import { Helmet } from 'react-helmet';



const AddTeacher = () => {
  return (
   <div className="container">
     <div className='add'>
     <Helmet>
    <title>Add Teachers Page</title>
    <meta name="description" content="Description of Add Teachers Page" />
</Helmet>

<h1>Add Teachers</h1>
     <Formik
       initialValues={{
        imgurl: "",
        name: "",
        profession: "",
        price:"",
        about: "",
       }}
       validationSchema={TeachersSchema}
       onSubmit={(values, {resetForm}) => {
         axios.post("http://localhost:8080/teachers", values)
         resetForm();

         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field className="input" name="imgurl" placeholder="Enter your imageUrl..."/>
           {errors.imgurl && touched.imgurl ? (
             <div className='err'>{errors.imgurl}</div>
           ) : null}
           <Field className="input" name="name" placeholder="Enter your name..."/>
           {errors.name && touched.name ? (
             <div className='err'>{errors.name}</div>
           ) : null}
           <Field className="input" name="profession" placeholder="Enter your profession... "/>
           {errors.profession && touched.profession ? (
             <div className='err'>{errors.profession}</div>
           ) : null}
           <Field className="input" name="about" placeholder="Enter your about... "/>
           {errors.about && touched.about ? (
             <div className='err'>{errors.about}</div>
           ) : null}
           <Field className="input" name="price" placeholder="Enter your price... "/>
           {errors.price && touched.price ? (
             <div className='err'>{errors.price}</div>
           ) : null}
           
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>

    </div>
   </div>
  )
}

export default AddTeacher