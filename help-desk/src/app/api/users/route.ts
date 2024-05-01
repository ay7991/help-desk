import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma';
import { cookies } from 'next/headers';

export async function POST(req: Request){
    const adminData = await req.json();
    const { email, password, adminKey } = adminData;

    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!findUser) {
            return NextResponse.json({ error: 'User Not Found' }, { status: 404 });
        }

        if (findUser.password !== password) {
            return NextResponse.json({ error: 'Incorrect Password'}, { status: 401 });
        }

        if (findUser.adminkey !== 'admin' || adminKey !== 'admin') {
            return NextResponse.json({ error: 'User Is Not Admin'}, { status: 401 });
        }

        cookies().set({
            name: 'adminCookie',
            value: 'adminCookie',
            httpOnly: true,
            path: '/admin/ticketsPanel',
            secure: true,
            maxAge: 43200
        });

        return NextResponse.json({ message: 'User Is Admin' }, {status: 200});
    } catch (error) {
        console.log('Could not find admin user: ', error);
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 });
    }
}