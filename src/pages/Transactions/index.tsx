import { useContext } from "react"
import Header from "../../components/Header"
import Summary from "../../components/Summary"
import SearchForm from "./components/SearchForm"
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./styles"
import { TransactionsContext } from "../../contexts/TransactionsContext"



const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((item) => (
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