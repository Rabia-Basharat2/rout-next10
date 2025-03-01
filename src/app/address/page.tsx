import React from 'react'

const page = () => {
  return (
    <div>Address Page<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>Company/Organization Name: G-Tech

        <p className="text-lg font-medium">
          
        City: Rahim Yar Khan
        </p>
      </blockquote>Province/Region: Punjab
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
        Country: Pakistan
        </div>
        <div className="text-slate-700 dark:text-slate-500">
        Address: Chak 100/p , RYK
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page