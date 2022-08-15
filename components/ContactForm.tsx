import React, { useMemo } from 'react'
import { useForm } from '@formspree/react'
import { RiCheckboxCircleLine, RiErrorWarningLine } from 'react-icons/ri'
import Button from './Button'

function ContactForm() {
  const [state, handleSubmit] = useForm(String(process.env.NEXT_PUBLIC_FORM))

  const renderForm = useMemo(() => {
    if (state.succeeded) {
      return (
        <div className="min-h-[400px] text-center font-mono text-2xl flex flex-col gap-8 px-10 min-w-full lg:min-w-[500px] justify-center items-center grow">
          <RiCheckboxCircleLine className="text-9xl text-black dark:text-white" />
          Thanks! I&apos;ll contact you shortly
        </div>
      )
    }
    if (!state.succeeded && state.errors.length > 0) {
      return (
        <div className="min-h-[400px] text-center font-mono text-2xl flex flex-col gap-8 px-10 min-w-full lg:min-w-[500px] justify-center items-center grow">
          <RiErrorWarningLine className="text-9xl text-black dark:text-white" />
          Something went wrong...
        </div>
      )
    }
    return (
      <form
        className="flex flex-col gap-4 px-10 mt-5 lg:mt-10 min-w-full lg:min-w-[500px] justify-center items-center grow"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-white text-black border-black dark:bg-black dark:text-white outline-none border-2 dark:border-white px-8 py-2 font-sans w-full"
          id="name"
          type="text"
          required
          name="name"
          placeholder="Your name goes here"
        />
        <input
          className="bg-white text-black border-black dark:bg-black dark:text-white outline-none border-2 dark:border-white px-8 py-2 font-sans w-full"
          id="email"
          type="email"
          required
          name="email"
          placeholder="This is a place for your email"
        />
        <textarea
          className="bg-white text-black border-black dark:bg-black dark:text-white outline-none border-2 dark:border-white px-8 py-6 min-h-[16em] font-sans w-full"
          id="message"
          name="message"
          placeholder="Say Hi! 👋"
          required
        />
        <Button className="grow-0" type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </form>
    )
  }, [handleSubmit, state.submitting, state.succeeded, state.errors])

  return (
    <div className="flex-1 flex flex-col justify-center items-center lg:pt-6 p-3">
      <h2 className="font-sans text-4xl font-bold drop-shadow-text dark:drop-shadow-textDark">
        Send me a message
      </h2>
      {renderForm}
    </div>
  )
}
export default ContactForm
