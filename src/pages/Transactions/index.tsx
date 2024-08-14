import { useEffect, useState } from "react"
import Header from "../../components/Header"
import Summary from "../../components/Summary"
import SearchForm from "./components/SearchForm"
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./styles"

interface TransactionsProps {
  id: number,
  description: string,
  price: number,
  type: 'income' | 'outcome',
  category: string,
  createdAt: string
}

const Transactions = () => {
  const [transaction, setTransaction] = useState<TransactionsProps[]>([])


  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransaction(data)
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transaction.map((item) => (
              <tr key={item.id}>
                <td width='50%'>{item.description}</td>
                <td>
                  <PriceHightLight variant={item.type}>
                    {item.price}
                  </PriceHightLight>
                </td>
                <td>{item.category}</td>
                <td>{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions