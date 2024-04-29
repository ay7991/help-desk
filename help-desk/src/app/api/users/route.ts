import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma';

export async function POST(req: Request) {
    const adminData = await req.json();
    const { email, password, adminKey } = adminData;

    console.log('route works');
    return NextResponse.json({ status: 200 });

    // try {
    //     const findUser = await prisma.user.findUnique({
    //         where: {
    //             email: email,
    //         },
    //     });

    //     if (findUser) {
    //         const checkPW = await prisma.user.findUnique({
    //             where: {
    //                 email: email,
    //                 password: password
    //             },
    //         });

    //         if (checkPW) {
    //             const checkAdmin = await prisma.user.findUnique({
    //                 where: {
    //                     email: email,
    //                     password: password,
    //                     adminKey: adminKey
    //                 },
    //             });

    //             if (checkAdmin) {
    //                 return NextResponse.json({status: 200});
    //             } else {
    //                 return NextResponse.json({ error: 'User Is Not Admin'}, { status: 401 });
    //             }

    //         } else {
    //             return NextResponse.json({ error: 'Incorrect Password'}, { status: 401 });
    //         }
    //     } else {
    //         return NextResponse.json({ error: 'User Not Found'}, { status: 404 });
    //     }
    // } catch (error) {
    //     console.log('Could not find admin user: ', error);
    //     return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 });
    // }
}