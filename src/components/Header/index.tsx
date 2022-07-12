import logoImg from '../../assets/logo.svg'
import { Container, Content } from './Styles'

interface HeaderProps {
    onOpenNewTransactionsModal: () => void;
}
export function Header({ onOpenNewTransactionsModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <button type="button" onClick={onOpenNewTransactionsModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}