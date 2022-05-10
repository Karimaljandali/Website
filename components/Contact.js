import { useState } from 'react'

const Contact = () => {
  const [formFields, setFormFields] = useState({
    first_name: {
      text: '',
      error: false
    },
    last_name: {
      text: '',
      error: false
    },
    email: {
      text: '',
      error: false
    },
    message: {
      text: '',
      error: false
    }
  })

  const handleChange = (payload) => {
    console.log('handling change!')
    setFormFields({
      ...formFields,
      [payload.name]: {
        text: payload.value,
        error: false
      }
    })
  }

const validateEmail = (mail) => {
  if(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test(mail)) {
    return true
  }
  return false
}

const handleSubmit = (e) => {
  e.preventDefault()
  // Set error to true for all fields if text is empty.

  validateEmail(formFields.email)

  // Send the state object to sendgrid middleware to send email.
}


  return (
    <div className="mx-auto max-w-screen-xl relative p-8 my-8">
        <span className="code-tag top-0">{"<contact>"}</span>
        <form action="POST" className="mx-auto max-w-screen-md bg-stone-800 rounded-md p-8 login-form relative overflow-hidden">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="grid xl:grid-cols-2 xl:gap-6 mb-4">
                <div className="group w-full">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">First Name</label>
                    <input onChange={(s) => handleChange(s.target)} type="text" name="first_name" id="first_name" className="text-sm rounded-lg block w-full p-2.5 text-white placeholder:text-white border-stone-300 border bg-stone-700" placeholder="Joe"/>
                    {formFields.first_name.error !== false && <span className="text-red-700">Please Enter a First Name</span> }
                </div>
                <div className="group w-full">
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-white">Last Name</label>
                    <input onChange={(s) => handleChange(s.target)} type="text" name="last_name" id="last_name" className="text-sm rounded-lg block w-full p-2.5 text-white placeholder:text-white border-stone-300 border bg-stone-700" placeholder="Smith"/>
                    {formFields.last_name.error !== false && <span className="text-red-700">Please Enter a Last Name</span> }
                </div>
            </div>
            <div className="group w-full mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                <input onChange={(s) => handleChange(s.target)} type="email" name="email" id="email" className="text-sm rounded-lg block w-full p-2.5 text-white placeholder:text-white border-stone-300 border bg-stone-700" placeholder="email@domain.com"/>
                {formFields.email.error !== false && <span className="text-red-700">Please Enter a valid Email</span> }
            </div>
            <div className="group w-full mb-8">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
                <textarea  onChange={(s) => handleChange(s.target)} name="message" id="message" rows="4" className="block p-2.5 w-full text-sm bg-stone-700 rounded-lg border border-stone-300 focus:ring-blue-500 focus:border-blue-500 text-white placeholder:text-white" placeholder="Leave a message"/>
                {formFields.message.error !== false && <span className="text-red-700">Please Enter a Message</span> }
            </div>
            <button className="bg-cyan-400 text-stone-900 px-8 py-2 rounded transition-colors text-md hover:bg-cyan-500 focus:bg-cyan-500 h-12">Submit</button>
        </form>
        <span className="code-tag bottom-0">{"</contact>"}</span>
    </div>
  )
}

export default Contact