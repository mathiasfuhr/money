import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransitionType, TransitionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionSchema>

const NewTransactionModal = () => {

    const { createTransactions } = useContext(TransactionsContext)
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionSchema)
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description, price, category, type } = data

        await createTransactions({
            description,
            price,
            category,
            type
        })

        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>

                    <input
                        type="text"
                        placeholder='Descrição'
                        required
                        {...register('description')}
                    />
                    <input
                        type="number"
                        placeholder='Preço'
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder='Categoria'
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name='type'
                        render={({ field }) => (
                            <TransitionType onValueChange={field.onChange} value={field.value}>
                                <TransitionTypeButton variant='income' value='income'>
                                    <ArrowCircleUp size={24} />
                                    Entrada
                                </TransitionTypeButton>
                                <TransitionTypeButton variant='outcome' value='outcome'>
                                    <ArrowCircleDown size={24} />
                                    Saída
                                </TransitionTypeButton>
                            </TransitionType>
                        )}
                    />

                    <button type='submit' disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}

export default NewTransactionModal
