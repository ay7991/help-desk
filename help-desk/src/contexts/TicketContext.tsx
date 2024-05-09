'use client'
import * as React from 'react';
import { TicketContextType, TicketProps } from '@/lib/types';

const TicketContext = React.createContext<TicketContextType | null>(null);

export const TicketProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [currentTicket, setCurrentTicket] = React.useState<TicketProps | null>(null);

    const value = {
        currentTicket,
        setCurrentTicket,
    };

    return (
        <TicketContext.Provider value={value}>
            {children}
        </TicketContext.Provider>
    );
}

export const useTicket = () => {
    const context = React.useContext(TicketContext);
    if (!context) {
      throw new Error('useTicket must be used within a TicketProvider');
    }
    return context;
};

export default TicketContext;