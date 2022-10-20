import React, { useState } from "react"

const useForm = () => {
  const [form, setForm] = useState({})

  function handleInputs({event}: any) {
    event.preventDefault();
    setForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  return [form, handleInputs]
}

export default useForm