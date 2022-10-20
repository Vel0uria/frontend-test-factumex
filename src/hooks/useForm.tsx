import React, { useState, ChangeEvent  } from "react"
const formState = {} as any


const useForm = () => {
  const [form, setForm] = useState(formState)

  function handleInputs(event: ChangeEvent<HTMLInputElement>) {
event.preventDefault()
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  return [form, handleInputs]
}

export default useForm