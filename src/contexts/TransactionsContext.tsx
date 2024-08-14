import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionsProps {
    id: number,
    description: string,
    price: number,
    type: 'income' | 'outcome',
    category: string,
    createdAt: string
}

interface TransactionsContextType {
    transactions: TransactionsProps[]
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransaction] = useState<TransactionsProps[]>([])


    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()
        setTransaction(data)
    }

    useEffect(() => {
        loadTransactions();
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}
