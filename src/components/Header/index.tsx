import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>Logomarca</h2>

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header