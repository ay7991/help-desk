import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma';

export async function GET() {
    try {
        const tickets = await prisma.ticket.findMany();
        return NextResponse.json( tickets, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 });
    }
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
        if (!ticket) {
            return NextResponse.json({ error: 'Unable to submit ticket' }, { status: 403 });
        }

        return NextResponse.json(ticket, {status: 201});
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 });
    }
}

export async function PATCH(req: Request) {
    const status = await req.json();
    try {
        const updateStatus = await prisma.ticket.update({
            where: {
                id: status.id
            },
            data: {
                status: status.status
            }
        });

        if (!updateStatus) {
            return NextResponse.json({ error: 'Unable to update status' }, { status: 409 });
        }

        return NextResponse.json({ newStatus: updateStatus.status }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 });
    }
}