import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma';

export async function GET() {
    const tickets = await prisma.ticket.findMany();
    return NextResponse.json( tickets, { status: 200 });
}

export async function POST(req: Request) {
    const ticketData = await req.json();
    const { name, email, description } = ticketData;

    try {
        const ticket = await prisma.ticket.create({
            data: {
                name: name,
                email: email,
                description: description,
                status: "OPEN"
            }
        });
        return NextResponse.json(ticket, {status: 201});
    } catch (error) {
        console.log('Ticket failed to create: ', error);
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 });
    }
}