import { useState } from 'react'

import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

type Inputs = {
  email: string
  name: string
  subject: string
  message: string
}

const MIN_MESSAGE_ROWS = 10 as const

const WEB3FORMS_PUB_KEY = import.meta.env.VITE_WEB3FORMS_PUB_KEY as string

export default function Contact() {
  const [success, setSuccess] = useState<boolean | null>(null)
  const [messageRows, setMessageRows] = useState(MIN_MESSAGE_ROWS)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setValue('email', data.email.trim())
    setValue('name', data.name.trim())
    setValue('subject', data.subject.trim())
    setValue('message', data.message.trim())

    const formData = new FormData()
    formData.append('access_key', WEB3FORMS_PUB_KEY)
    formData.append('email', data.email)
    formData.append('name', data.name)
    formData.append('subject', data.subject)
    formData.append('message', data.message)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    const state = await response.json()
    setSuccess(state.success ? true : false)
  }

  return (
    <section
      id='contact'
      className='flex flex-col items-center gap-5 p-5 text-center'
    >
      <h2 className='text-3xl text-(--text-muted) md:text-4xl lg:text-5xl'>
        Me contacter
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-fit flex-col items-center gap-5'
      >
        <div className='flex w-full flex-col items-center gap-1'>
          <label
            htmlFor='email'
            className='text-md font-semibold md:text-xl lg:text-2xl'
          >
            E-mail
          </label>
          <input
            type='email'
            id='email'
            autoComplete='email'
            className='w-full shadow-(--shadow)'
            placeholder='Votre email'
            {...register('email', {
              required: true,
              minLength: 5,
              pattern: /^\S+@\S+\.\S+$/,
              validate: (value: string) => {
                return !!value.trim()
              },
              setValueAs: (value: string) => {
                return value.trim()
              },
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <span className='text-(--warning)'>Ce champ est requis.</span>
          )}
          {errors.email && errors.email.type === 'minLength' && (
            <span className='text-(--warning)'>
              Au moins 5 caractères requis.
            </span>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <span className='text-(--warning)'>E-mail invalide.</span>
          )}
        </div>
        <div className='flex w-full flex-col items-center gap-1'>
          <label
            htmlFor='name'
            className='text-md font-semibold md:text-xl lg:text-2xl'
          >
            Nom
          </label>
          <input
            type='text'
            id='name'
            autoComplete='off'
            className='w-full shadow-(--shadow)'
            placeholder='Votre nom / entreprise...'
            {...register('name', {
              required: true,
              minLength: 4,
              maxLength: 50,
              pattern: /^[^\s](?:.*[^\s])?$/,
              validate: (value: string) => {
                return !!value.trim()
              },
              setValueAs: (value: string) => {
                return value.trim()
              },
            })}
          />
          {errors.name && errors.name.type === 'required' && (
            <span className='text-(--warning)'>Ce champ est requis.</span>
          )}
          {errors.name && errors.name.type === 'minLength' && (
            <span className='text-(--warning)'>
              Au moins 5 caractères requis.
            </span>
          )}
          {errors.name && errors.name.type === 'pattern' && (
            <span className='text-(--warning)'>E-mail invalide.</span>
          )}
        </div>
        <div className='flex w-full flex-col items-center gap-1'>
          <label
            htmlFor='subject'
            className='text-md font-semibold md:text-xl lg:text-2xl'
          >
            Objet
          </label>
          <input
            type='text'
            id='subject'
            autoComplete='off'
            className='w-full shadow-(--shadow)'
            placeholder='Le sujet de votre message'
            {...register('subject', {
              required: true,
              minLength: 4,
              maxLength: 100,
              pattern: /^[^\s](?:.*[^\s])?$/,
              validate: (value: string) => {
                return !!value.trim()
              },
              setValueAs: (value: string) => {
                return value.trim()
              },
            })}
          />
          {errors.subject && errors.subject.type === 'required' && (
            <span className='text-(--warning)'>Ce champ est requis.</span>
          )}
          {errors.subject && errors.subject.type === 'minLength' && (
            <span className='text-(--warning)'>
              Au moins 4 caractères requis.
            </span>
          )}
          {errors.subject && errors.subject.type === 'pattern' && (
            <span className='text-(--warning)'>Sujet invalide.</span>
          )}
        </div>
        <div className='flex w-full flex-col items-center gap-1'>
          <label
            htmlFor='message'
            className='text-md font-semibold md:text-xl lg:text-2xl'
          >
            Message
          </label>
          <textarea
            id='message'
            cols={100}
            rows={messageRows}
            className='h-fit w-full shadow-(--shadow)'
            placeholder='Votre message'
            {...register('message', {
              required: true,
              minLength: 10,
              pattern: /^(?:[^\s][\s\S]*[^\s])?$/,
              validate: (value: string) => {
                return !!value.trim()
              },
              setValueAs: (value: string) => {
                return value.trim()
              },
              onChange(e) {
                const rowsAmmount = e.target.value.split('\n').length
                if (rowsAmmount > MIN_MESSAGE_ROWS) {
                  setMessageRows(rowsAmmount)
                }
              },
            })}
          />
          {errors.message && errors.message.type === 'required' && (
            <span className='text-(--warning)'>Ce champ est requis.</span>
          )}
          {errors.message && errors.message.type === 'minLength' && (
            <span className='text-(--warning)'>
              Au moins 10 caractères requis.
            </span>
          )}
          {errors.message && errors.message.type === 'pattern' && (
            <span className='text-(--warning)'>Message invalide.</span>
          )}
        </div>
        <div className='flex w-full flex-col items-center gap-1'>
          {success === null && (
            <button type='submit' aria-label='Envoyer le message'>
              Envoyer
            </button>
          )}
          {success !== null &&
            (success ? (
              <span className='text-(--success)'>Message envoyé !</span>
            ) : (
              <span className='text-(--danger)'>Erreur lors de l'envoi</span>
            ))}
        </div>
      </form>
    </section>
  )
}
