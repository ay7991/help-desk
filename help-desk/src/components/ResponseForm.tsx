'use client'
import * as React from 'react';
import { ResponseFormProps } from '@/lib/types';
import Notification from './Notification';

const ResponseForm: React.FC<ResponseFormProps> = ({ email }) => {
    const [sender, setSender] = React.useState('');
    const [response, setResponse] = React.useState('');

    const [showNotif, setShowNotif] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const [color, setColor] = React.useState('');

    const resetForm = (): void => {
        setSender('');
        setResponse('');
    }

    const submitResponse = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowNotif(true);
        resetForm();
        setMessage(`Successfully Sent Your Response to ${email}!`);
        setColor('teal');
    }

    return (
        <main id="responseFormMain">
            <form id="formComponent" onSubmit={submitResponse}>
                <label id="responseFrom"> 
                    From: 
                    <input 
                        type='text' 
                        placeholder='Ex. Amy Yang' 
                        name='from' 
                        value={sender}
                        onChange={e => setSender(e.target.value)}
                        className="w-96 ml-2 pl-2 rounded-md text-black"
                        id="responseInput"
                        required
                    />
                </label>
                <label className="flex flex-col">
                    Response:
                    <textarea 
                        placeholder='Write your response here' 
                        name='response' 
                        value={response}
                        className='pl-2 rounded-md text-black h-20'
                        onChange={e => setResponse(e.target.value)}
                        required
                    />
                </label>
                <button className="mt-2" type="submit"> Submit </button>
            </form>
            { showNotif && <Notification message={message} onClose={() => setShowNotif(false)} color={color}/> }
        </main>
    ); 
}

export default ResponseForm;