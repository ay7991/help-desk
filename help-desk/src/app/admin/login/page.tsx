import * as React from 'react';
import NavBar from '@/components/NavBar';
import LoginForm from '@/components/LoginForm';

const Login: React.FC = () => {
    return (
        <main className="h-screen">
            <NavBar />
            <section className="h-4/5 flex flex-col items-center justify-center">
                <h1 className="mb-10 text-xl"> Admin Login </h1>
                <LoginForm />
            </section>
        </main>
    );
}

export default Login;