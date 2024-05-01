'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
    const router = useRouter();

    const checkLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        const passwordInput = form.elements.namedItem('password') as HTMLInputElement;
        const adminKeyInput = form.elements.namedItem('adminKey') as HTMLInputElement;

        try {
            const post = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: emailInput.value,
                    password: passwordInput.value,
                    adminKey: adminKeyInput.value
                })
            })
            if (post.ok) {
                router.push('/admin/ticketsPanel');
            } else {
                console.log(post);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className="flex flex-col w-80" onSubmit={checkLogin}>
            <label className="flex flex-col">
                Email
                <input className="border-solid border-black border-2 mb-4 pl-1 h-8" type="text" placeholder="Email" name="email" />
            </label>
            <label className="flex flex-col">
                Password
                <input className="border-solid border-black border-2 mb-4 pl-1 h-8" type="text" placeholder="Password" name="password" />
            </label>
            <label className="flex flex-col">
                Admin Key
                <input className="border-solid border-black border-2 mb-4 pl-1 h-8" type="text" placeholder="Admin Key" name="adminKey" />
            </label>
            <button type="submit"> Login </button>
        </form>
    );
}

export default LoginForm;