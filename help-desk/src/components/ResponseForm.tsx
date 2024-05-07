'use client'
import * as React from 'react';
import { ResponseFormProps } from '@/lib/types';
import Notification from './Notification';

const ResponseForm: React.FC<ResponseFormProps> = ({ email }) => {
    const [sender, setSender] = React.useState('');
    const [response, setResponse] = React.useState('');

    const [showNotif, setShowNotif] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const resetForm = (): void => {
        setSender('');
        setResponse('');
    }

    const submitResponse = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowNotif(true);
        resetForm();
        setMessage('Successfully Sent Your Response!');
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
                    required
                />
            </label>
            <label className="flex flex-col">
                Response:
                <textarea 
                    placeholder='Write your response here' 
                    name='response' 
                    value={response}
                    onChange={e => setResponse(e.target.value)}
                    required
                />
            </label>
            <button className="mt-2" type="submit"> Submit </button>
            { showNotif && <Notification message={message} onClose={() => setShowNotif(false)}/> }
        </form>
    ); 
}

export default ResponseForm;