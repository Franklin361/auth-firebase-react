import { useState } from 'react';

type eventInput = React.ChangeEvent<HTMLInputElement>;
type eventForm = React.FormEvent<HTMLFormElement>;
type Form = 'log-in' | 'sign-up'

interface Props<T> {
    initialState: T
    typeForm: Form
}

export const useForm = <T>({ initialState, typeForm }: Props<T>) => {
    const [form, setForm] = useState(initialState)

    const handleSubmit = (e: eventForm) => {
        e.preventDefault();
        if (typeForm === 'log-in') {

            return
        }

        console.log('register')
    }


    const handleChange = (e: eventInput) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return {
        ...form,
        form,
        handleChange,
        handleSubmit
    }
}