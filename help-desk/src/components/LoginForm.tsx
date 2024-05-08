'use client'
import * as React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Notification from './Notification';

const LoginForm: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [adminKey, setAdminKey] = React.useState('');

    const [showNotif, setShowNotif] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [color, setColor] = React.useState('');

    const postAdmin = async (): Promise<void> => {
        try {
            const post = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    adminKey: adminKey
                })
            })
            
            if (post.ok) {
                Cookies.set('adminCookie', 'adminCookie')
                router.push('/admin/ticketsPanel');
            } else {
                const error = await post.json();
                setShowNotif(true);
                setMessage(error.error);
                setColor('red');
                throw new Error(error.error);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const checkLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postAdmin();
    }

    return (
        <>
            <form className="flex flex-col w-80" onSubmit={checkLogin}>
                <label className="flex flex-col">
                    Email
                    <input 
                        className={`border-solid border-black border-2 mb-4 pl-1 h-8`} 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="flex flex-col">
                    Password
                    <input 
                        className="border-solid border-black border-2 mb-4 pl-1 h-8" 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label className="flex flex-col">
                    Admin Key
                    <input 
                        className="border-solid border-black border-2 mb-4 pl-1 h-8" 
                        type="text" 
                        placeholder="Admin Key" 
                        name="adminKey"
                        value={adminKey}
                        onChange={e => setAdminKey(e.target.value)}
                        required 
                    />
                </label>
                <button type="submit"> Login </button>
            </form>
            { showNotif && <Notification message={message} onClose={() => setShowNotif(false)} color={color} /> }
        </>
    );
}

export default LoginForm;