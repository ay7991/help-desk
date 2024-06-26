import "./globals.css";
import { TicketProvider } from "@/contexts/TicketContext";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body>
          <TicketProvider>
            {children}
          </TicketProvider>
        </body>
      </html>
  )
}
