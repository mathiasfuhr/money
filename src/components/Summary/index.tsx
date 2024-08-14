import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { SummuryCard, SummuryContainer } from "./styles"

const Summary = () => {
    return (
        <SummuryContainer>
            {/*Entradas */}
            <SummuryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#0048b3" />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummuryCard>
            {/*SAÍDA */}
            <SummuryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummuryCard>
            {/*Total */}
            <SummuryCard variant="blue">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummuryCard>
        </SummuryContainer>
    )
}

export default Summary