import { createTheme } from "@mui/material";

export const tableTitles: string[] = ['Ticket ID', 'Name', 'Email', 'Description', 'Created At', 'Updated At', 'Status'];

export const tableTheme = createTheme({
    typography: {
        fontFamily: "Atkinson Hyperlegible",
        fontSize: 18,
    }
})
