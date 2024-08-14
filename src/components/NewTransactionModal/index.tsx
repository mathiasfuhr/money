import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransitionType, TransitionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'


const NewTransactionModal = () => {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                <form action="">
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <TransitionType>
                        <TransitionType>
                            <TransitionTypeButton variant='income'>
                                <ArrowCircleUp size={24} />
                                Entrada
                            </TransitionTypeButton>
                            <TransitionTypeButton variant='outcome'>
                                <ArrowCircleDown size={24} />
                                Saída
                            </TransitionTypeButton>
                        </TransitionType>
                    </TransitionType>

                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>



            </Content>
        </Dialog.Portal>
    )
}

export default NewTransactionModal