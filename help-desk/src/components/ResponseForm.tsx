'use client'
import * as React from 'react';
import { ResponseFormProps } from '@/lib/types';

const ResponseForm: React.FC<ResponseFormProps> = ({ email }) => {
    const [sender, setSender] = React.useState('');
    const [response, setResponse] = React.useState('');

    const submitResponse = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (sender === '') {
            alert('Do not leave "From" empty');
            throw new Error("From field empty");
        }
        if (response === '') {
            alert('Do not leave "Response" empty');
            throw new Error("Response field empty");
        }

        return console.log(`Would normally send an email to ${email} or the proper recipient with 
        the body containing ${sender} and ${response}`);
    }

    return (
        <form className="flex flex-col p-2 rounded-lg border-black border-2 border-solid w-auto mt-2" onSubmit={submitResponse}>
            <label className="mb-2"> 
                From: 
                <input 
                    type='text' 
                    placeholder='Ex. Amy Yang - Senior Software Engineer' 
                    name='from' 
                    value={sender}
                    onChange={e => setSender(e.target.value)}
                    className="w-96 ml-2"
                />
            </label>
            <label className="flex flex-col">
                Response:
                <textarea 
                    placeholder='Write your response here' 
                    name='response' 
                    value={response}
                    onChange={e => setResponse(e.target.value)}
                />
            </label>
            <button className="mt-2" type="submit"> Submit </button>
        </form>
    ); 
}

export default ResponseForm;