import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { SummuryCard, SummuryContainer } from "./styles"
import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { priceformatter } from "../../utils/formatter"

const Summary = () => {
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price
                acc.total += transaction.price;
            }
            return acc
        },
        {
            income: 0,
            outcome: 0,
            total: 0
        })

    return (
        <SummuryContainer>
            {/*Entradas */}
            <SummuryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#0048b3" />
                </header>
                <strong>{priceformatter.format(summary.income)}</strong>
            </SummuryCard>
            {/*SAÍDA */}
            <SummuryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>{priceformatter.format(summary.outcome)}</strong>
            </SummuryCard>
            {/*Total */}
            <SummuryCard variant="blue">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>
                <strong>{priceformatter.format(summary.total)}</strong>
            </SummuryCard>
        </SummuryContainer>
    )
}

export default Summary