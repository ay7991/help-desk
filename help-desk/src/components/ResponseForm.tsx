'use client'
import * as React from 'react';
import { ResponseFormProps } from '@/lib/types';

const ResponseForm: React.FC<ResponseFormProps> = ({ email }) => {
    const submitResponse = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        return console.log(`Would normally send an email to ${email} or the proper recipient`);
    }

    return (
        <form onSubmit={submitResponse}>
            <label> From </label>
            <input type='text' placeholder='Ex. Amy Yang - Senior Software Engineer' name='from' />
            <textarea placeholder='Write your response here' name='response' />
            <button type="submit"> Submit </button>
        </form>
    ); 
}

export default ResponseForm;