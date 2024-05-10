import * as React from 'react';
import Cookies from 'js-cookie';

export const postAdmin = async (email: string, password: string, adminKey: string, router: any, setNotification: (show: boolean, message: string, color: string) => void): Promise<void> => {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                adminKey: adminKey
            })
        });
        
        if (response.ok) {
            Cookies.set('adminCookie', 'adminCookie');
            router.push('/admin/ticketsPanel');
        } else {
            const error = await response.json();
            setNotification(true, error.error, 'red');
            throw new Error(error.error);
        }
    } catch (error) {
        console.error(error);
    }
}