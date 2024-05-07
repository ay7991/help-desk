import { SnackbarOrigin } from "@mui/material";

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

export interface TicketObj {
    id: number,
    name: string,
    email: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    status: "OPEN" | "IN PROGRESS" | "RESOLVED" | "CLOSED"
}

export interface NotificationProps {
    message: string,
    onClose: () => void
}