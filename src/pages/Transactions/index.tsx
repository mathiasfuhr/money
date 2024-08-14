import Header from "../../components/Header"
import Summary from "../../components/Summary"
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./styles"

const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolimento de site</td>
              <td>
                <PriceHightLight variant="income">
                  R$ 12.000,00
                </PriceHightLight>
              </td>
              <td>venda</td>
              <td>14/08/2024</td>
            </tr>
            <tr>
              <td width='50%'>Hamburger</td>
              <td>
                <PriceHightLight variant="outcome">
                  - R$ 59,00
                </PriceHightLight>
              </td>
              <td>Alimentação</td>
              <td>14/08/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions