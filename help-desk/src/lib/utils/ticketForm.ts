export const resetForm = (setName: (name: string) => void, setEmail: (email: string) => void, setDescription: (description: string) => void): void => {
    setName('');
    setEmail('');
    setDescription('');
};

export const postTicket = async (
    name: string,
    email: string,
    description: string,
    setNotification: (show: boolean, message: string, color: string) => void,
    resetFormFn: () => void
): Promise<void> => {
    try {
        const response = await fetch('/api/tickets', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, description })
        });
        if (response.ok) {
            setNotification(true, 'Ticket Successfully Submitted!', 'teal');
            resetFormFn();
        } else {
            const error = await response.json();
            setNotification(true, error.error, 'red');
            resetFormFn();
        }
    } catch (error) {
        setNotification(true, 'Failed to submit ticket', 'red');
        console.error(error);
    }
};