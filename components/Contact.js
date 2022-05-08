import React from 'react'

const Contact = () => {
  return (
    <div className="mx-auto max-w-screen-xl relative py-8">
        <span className="code-tag top-0">{"<contact>"}</span>
        <form action="POST" className="mx-auto max-w-screen-md bg-stone-800 rounded-md p-8 login-form relative overflow-hidden">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="grid xl:grid-cols-2 xl:gap-6 mb-4">
                <div class="group w-full">
                    <label for="first-name" className="block mb-2 text-sm font-medium text-white">First Name</label>
                    <input type="text" id="first-name" className="text-sm rounded-lg block w-full p-2.5 text-white placeholder:text-white border-stone-300 border bg-stone-700" placeholder="Joe"/>
                </div>
                <div class="group w-full">
                    <label for="last-name" className="block mb-2 text-sm font-medium text-white">Last Name</label>
                    <input type="text" id="last-name" className="text-sm rounded-lg block w-full p-2.5 text-white placeholder:text-white border-stone-300 border bg-stone-700" placeholder="Smith"/>
                </div>
            </div>
            <div class="group w-full mb-4">
                <label for="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                <input type="email" id="email" className="text-sm rounded-lg block w-full p-2.5 text-white placeholder:text-white border-stone-300 border bg-stone-700" placeholder="email@domain.com"/>
            </div>
            <div class="group w-full mb-8">
                <label for="message" className="block mb-2 text-sm font-medium text-white">Message</label>
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm bg-stone-700 rounded-lg border border-stone-300 focus:ring-blue-500 focus:border-blue-500 text-white placeholder:text-white" placeholder="Leave a message"/>
            </div>
            <button className="bg-cyan-400 text-stone-900 px-8 py-2 rounded transition-colors text-md hover:bg-cyan-500focus:bg-cyan-500 h-12">Submit</button>
        </form>
        <span className="code-tag bottom-0">{"</contact>"}</span>
    </div>
  )
}

export default Contact