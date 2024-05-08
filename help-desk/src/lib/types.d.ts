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

export type TicketTableProps = {
    tickets: TicketObj[]
}

export interface NotificationProps {
    message: string,
    onClose: () => void,
    color: string
}

export interface TablePaginationProps {
    count: number,
    page: number,
    rowsPerPage: number,
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
      ) => void
}

type StatusProps = {
    currStatus: string,
    currID: number
  }