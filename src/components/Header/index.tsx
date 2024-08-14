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
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header