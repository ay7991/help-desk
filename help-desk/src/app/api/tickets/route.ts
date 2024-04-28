import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma';

export async function POST(req: Request) {
    const ticketData = await req.json();
    console.log(ticketData);
    
    return NextResponse.json(200);
}