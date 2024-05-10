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
        <main className="formMain">
            <form className="flex flex-col justify-center" onSubmit={checkLogin}>
                <label className="flex flex-col text-white text-lg">
                    Email
                    <input 
                        className="input" 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="flex flex-col text-white text-lg">
                    Password
                    <input 
                        className="input"
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label className="flex flex-col text-white text-lg">
                    Admin Key
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Admin Key" 
                        name="adminKey"
                        value={adminKey}
                        onChange={e => setAdminKey(e.target.value)}
                        required 
                    />
                </label>
                <button type="submit" className="text-white text-xl"> Login </button>
            </form>
            { showNotif && <Notification message={message} onClose={() => setShowNotif(false)} color={color} /> }
        </main>
    );
}

export default LoginForm;