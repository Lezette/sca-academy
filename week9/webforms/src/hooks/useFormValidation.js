import { useState } from 'react';


const useFormValidation = (initialState, validate) => {

  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };


  const validateForm = () => {

    const validationErrors = validate(formData);

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;

  };


  return {

    formData,

    errors,

    handleChange,

    validateForm,
    setFormData

  };

};


export default useFormValidation;