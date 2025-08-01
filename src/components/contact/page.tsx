'use client'
import React, { useState } from 'react'
import { TextAnimate } from "@/components/ui/text-animate"
import ShareButton from '@/components/ui/share-button'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import ThemeToggleButton from "../ui/theme-toggle-button"
const page = () => {
  const [result, setResult] = useState<string>("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setResult("Sending...")

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append("access_key", "6e2c76ed-6ffb-4b04-9c67-b4c5849604ab")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })

      const result = await response.json()

      if (result.success) {
        setResult("Form submitted successfully!")
        form.reset() // clear form inputs
      } else {
        setResult(result.message || "Submission failed")
        console.error("Error from API:", result)
      }
    } catch (error) {
      setResult("Submission failed, please try again later")
      console.error("Network or server error:", error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="mb-10 text-3xl md:text-5xl">
        <TextAnimate text="CONTACT ME" type="popIn" />
      </div>

      <div className="flex flex-wrap items-start items-start gap-20 py-16 px-4">
        <div>
          <div className="max-w-md flex-shrink-0 mt-6">
            <TextAnimate text="Feel free to reach out!" type="rollIn" />
            <p className="text-lg mt-2">I would love to hear from you.</p>
          </div>
          {/* Social Media Links */}
          <div className='mt-8 pl-2 ml-2 '>
            <ShareButton
            links={[
              {
                icon: FaGithub,
                onClick: () => window.open("https://github.com/Joynur-Rahman")
              },
              {
                icon: FaLinkedinIn,
                onClick: () =>
                  window.open(
                    "https://www.linkedin.com/in/joynur-rahman-65274a284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  )
              },
              {
                icon: FaInstagram,
                onClick: () =>
                  window.open("https://www.instagram.com/joynursrahman?igsh=a3k2d2JnbGhsZWti")
              },
              {
                icon: RiTwitterXLine,
                onClick: () => window.open("https://x.com/rtridevjay?s=08")
              }
            ]}
          >
            Connect
          </ShareButton>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex-grow min-w-[450px] flex flex-col gap-5  rounded-xl p-8 shadow-lg"
        >
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
            className="border rounded-md p-2"
          />
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
            className="border border-gray-300 rounded-md p-2"
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows={8}
            placeholder="Enter your message..."
            required
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="contact-submit bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit now
          </button>
        </form>
      </div>


      {result && (
        <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300" aria-live="polite">
          {result}
        </p>
      )}
    </div>
  )
}

export default page
