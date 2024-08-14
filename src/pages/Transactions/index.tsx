import { useContext } from "react"
import Header from "../../components/Header"
import Summary from "../../components/Summary"
import SearchForm from "./components/SearchForm"
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./styles"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { dataFormatter, priceformatter } from "../../utils/formatter"



const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);

  console.log("Transactions:", transactions); // Verifique se os dados estão corretos

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
                    {item.type === 'outcome' && '- '}
                    {priceformatter.format(item.price)}
                  </PriceHightLight>
                </td>
                <td>{item.category}</td>
                <td>{dataFormatter.format(new Date(item.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions;
