'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
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
                    adminKeyInput: adminKeyInput.value
                })
            })
            if (post.ok) {
                router.push('/admin/ticketsPanel');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={checkLogin}>
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="password" name="password" />
            <input type="text" placeholder="admin key" name="adminKey" />
            <button type="submit"> Login </button>
        </form>
    );
}

export default Login;