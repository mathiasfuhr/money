import NewTransactionModal from "../NewTransactionModal"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import * as Dialog from '@radix-ui/react-dialog'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>Logomarca</h2>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal/>

        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header