import { useState } from 'react';

type eventInput = React.ChangeEvent<HTMLInputElement>;

interface Props<T> {
    initialState: T
}

export const useForm = <T>({ initialState }: Props<T>) => {

    const [form, setForm] = useState<T>(initialState)



    const handleChange = (e: eventInput) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return {
        ...form,
        form,
        handleChange
    }
}