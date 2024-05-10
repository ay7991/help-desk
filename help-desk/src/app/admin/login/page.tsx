import * as React from 'react';
import NavBar from '@/components/NavBar';
import LoginForm from '@/components/LoginForm';

const Login: React.FC = () => {
    return (
        <main className="h-screen">
            <NavBar />
            <section className="formSection">
                <div className="formDiv">
                    <h1 className="mb-8 text-3xl text-white"> Admin Login </h1>
                    <LoginForm />
                </div>
            </section>
        </main>
    );
}

export default Login;