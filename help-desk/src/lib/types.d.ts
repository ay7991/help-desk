export type ResponseFormProps = {
    email: string
}

export type TicketProps = {
    id: number,
    name: string,
    email: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    status: "OPEN" | "IN PROGRESS" | "RESOLVED" | "CLOSED"
}