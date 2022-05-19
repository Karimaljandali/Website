import { Transition } from "@headlessui/react";
import { useState } from "react";

const Contact = () => {
  // Flag to show user submission is being processed.
  const [sending, setSending] = useState(false)

  // Flag to check form successfuly sent
  const [formSuccess, setFormSuccess] = useState(false)

  // Form Input fields
  const [formFields, setFormFields] = useState({
    first_name: {
      text: "",
      error: false,
    },
    last_name: {
      text: "",
      error: false,
    },
    email: {
      text: "",
      error: false,
    },
    message: {
      text: "",
      error: false,
    },
  });

  const handleChange = (payload) => {
    setFormFields({
      ...formFields,
      [payload.name]: {
        text: payload.value,
        error: false,
      },
    });
  };

  const validateEmail = (mail) => {
    if (/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test(mail)) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create copy of the form to check all elements.
    var formCopy = {...formFields};

    // Flag to allow the email to be sent.
    let flagSend = true;

    // Loop through all the keys in the form object and update local 
    // variables if empty.
    for (var key in formCopy) {
      if (formCopy[key].text.length == 0) {
        formCopy[key] = {
          text: formCopy[key].text,
          error: true,
        };
        flagSend = false
      } else {
        formCopy[key] = {
          text: formCopy[key].text,
          error: false,
        };
      }
    }

    // Set the state variable to local variable with errors
    setFormFields(formCopy)

    if (flagSend) {
      setSending(true)
      // Send the state object to sendgrid middleware to send email.
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          first_name: formFields.first_name.text,
          last_name: formFields.last_name.text,
          email: formFields.email.text,
          message: formFields.message.text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      setSending(false)
      if (error) {
        console.log(error);
        return;
      }
      setFormSuccess(true)
    }
  };

  return (
    <div id="contact" className="mx-auto max-w-screen-xl relative p-8 my-8">
      <span className="code-tag top-0">{"<contact>"}</span>
      <form
        action="POST"
        className="mx-auto max-w-screen-md bg-stone-800 rounded-md p-8 login-form relative overflow-hidden"
        onSubmit={handleSubmit}
        noValidate
      >
        <span className="contact-border"></span>
        <span className="contact-border"></span>
        <span className="contact-border"></span>
        <span className="contact-border"></span>
        <div className="grid xl:grid-cols-2 xl:gap-6 mb-4">
          <div className="group w-full">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              First Name
            </label>
            <input
              onChange={(s) => handleChange(s.target)}
              type="text"
              name="first_name"
              id="first_name"
              className={`text-sm rounded-lg block w-full p-2.5 text-white placeholder:text-white border bg-stone-700 ${formFields.first_name.error === true ? 'border-red-700' : 'border-stone-300'}`}
              placeholder="Joe"
            />
            {formFields.first_name.error === true && (
              <span className="text-red-700">Please Enter a First Name</span>
            )}
          </div>
          <div className="group w-full">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Last Name
            </label>
            <input
              onChange={(s) => handleChange(s.target)}
              type="text"
              name="last_name"
              id="last_name"
              className={`text-sm rounded-lg block w-full p-2.5 text-white placeholder:text-white border bg-stone-700 ${formFields.last_name.error === true ? 'border-red-700' : 'border-stone-300'} `}              placeholder="Smith"
            />
            {formFields.last_name.error === true && (
              <span className="text-red-700">Please Enter a Last Name</span>
            )}
          </div>
        </div>
        <div className="group w-full mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            onChange={(s) => handleChange(s.target)}
            type="email"
            name="email"
            id="email"
            className={`text-sm rounded-lg block w-full p-2.5 text-white placeholder:text-white border bg-stone-700 " ${formFields.email.error === true ? 'border-red-700' : 'border-stone-300'} `}
            placeholder="email@domain.com"
          />
          {formFields.email.error === true && (
            <span className="text-red-700">Please Enter a valid Email</span>
          )}
        </div>
        <div className="group w-full mb-8">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            onChange={(s) => handleChange(s.target)}
            name="message"
            id="message"
            rows="4"
            className={`block p-2.5 w-full text-sm bg-stone-700 rounded-lg border focus:ring-blue-500 focus:border-blue-500 text-white placeholder:text-white ${formFields.message.error === true ? 'border-red-700' : 'border-stone-300'} `}
            placeholder="Leave a message"
          />
          {formFields.message.error === true && (
            <span className="text-red-700">Please Enter a Message</span>
          )}
        </div>
        <div className="md:flex justify-between space-y-4 md:space-y-0">
          <button
            className="bg-cyan-400 text-stone-900 px-8 py-2 rounded transition-colors text-md hover:bg-cyan-500 focus:bg-cyan-500 h-12 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-white"
            type="submit"
            disabled={sending}
          >
            Submit
          </button>
          <Transition 
            show={formSuccess}
            enter="transition ease-in-out duration-500 delay-200 transform"
            enterFrom="-translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div className="border-2 border-green-700 p-2 bg-green-800 rounded-lg text-white">
              Thank you for your submission! Please allow up to 24 hours for a reply.
            </div>
          </Transition>
        </div>

      </form>
      <span className="code-tag bottom-0">{"</contact>"}</span>
    </div>
  );
};

export default Contact;