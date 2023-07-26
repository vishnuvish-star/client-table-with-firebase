"use client";
import { useFormik } from "formik";
import React from "react";
import schema from "./schema/formSchema";
import { collection, addDoc } from "firebase/firestore";
import db from "./shared/firebaseConfig";

const ClientForm = () => {
  // submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      contact,
      dob,
      joining,
      employer,
      role,
    } = values;

    // console.log(values);
    try {
      const docRef = await addDoc(collection(db, "clients"), {
        ...values,
        // stored in number
        contact: Number(contact),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  // formik

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      role: "",
      dob: "",
      joining: "",
      employer: "",
    },
    onSubmit: handleOnSubmit,
    validationSchema: schema,
  });
  const { values, handleBlur, handleChange, errors, touched } = formik;

  return (
    <div className=" p-5  m-5 flex  flex-col items-center">
      <form
        onSubmit={handleOnSubmit}
        className="flex  flex-col  justify-center w-3/5 bg-white shadow-xl p-2"
      >
        {/* first name */}
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter First Name"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.firstName && touched.firstName
              ? "  p-2 rounded-md border border-red-400"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
        />
        {errors.firstName && touched.firstName ? (
          <p className="text-[10px] text-red-400">{errors.firstName}</p>
        ) : (
          ""
        )}
        {/* last name */}
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter Last Name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
        />

        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.email && touched.email
              ? "  p-2 rounded-md border border-red-400"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
        />
        {errors.email && touched.email ? (
          <p className="text-[10px] text-red-400">{errors.email}</p>
        ) : (
          ""
        )}
        {/* contact */}
        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          type="tel"
          placeholder="Enter Phone Number"
          value={values.contact}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.contact && touched.contact
              ? "  p-2 rounded-md border border-red-400"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
        />
        {errors.contact && touched.contact && (
          <p className="text-[10px] text-red-400">{errors.contact}</p>
        )}
        {/* date of birth */}
        <label htmlFor="dob">DOB</label>
        <input
          id="dob"
          type="date"
          placeholder="Date Of Birth"
          value={values.dob}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.dob && touched.dob
              ? "  p-2 rounded-md border border-red-400"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
        />
        {errors.dob && touched.dob ? (
          <p className="text-[10px] text-red-400">{errors.dob}</p>
        ) : (
          ""
        )}
        {/* employer */}
        <label htmlFor="employer">Employer</label>
        <input
          id="employer"
          type="text"
          placeholder="Employer"
          value={values.employer}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.employer && touched.employer
              ? "  p-2 rounded-md border border-red-400"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
        />
        {errors.employer && touched.employer ? (
          <p className="text-[10px] text-red-400">{errors.employer}</p>
        ) : (
          ""
        )}
        {/* joining */}
        <label htmlFor="joining">Joining</label>
        <input
          id="joining"
          type="date"
          placeholder="Joining"
          value={values.joining}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.joining && touched.joining
              ? "  p-2 rounded-md border border-red-400"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
        />
        {errors.joining && touched.joining ? (
          <p className="text-[10px] text-red-400">{errors.joining}</p>
        ) : (
          ""
        )}
        {/* Role */}
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          placeholder="Role"
          value={values.role}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.role && touched.role
              ? "  p-2 rounded-md border border-red-400"
              : "outline-none p-2 rounded-md  bg-gray-50 border border-gray-100"
          }`}
        />
        {errors.role && touched.role ? (
          <p className="text-[10px] text-red-400">{errors.role}</p>
        ) : (
          ""
        )}

        {/* form fields end */}

        {/* submit button */}
        <button
          type="submit"
          className="p-1 bg-green-400 w-1/2  mx-auto my-5 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
