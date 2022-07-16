import logoImg from '../../assets/logo.svg'
import { Container, Content } from './Styles'

interface HeaderProps {
 
}
export function Header() {

    return (
        <Container>
            <Content>
                <h1>
                    Nova transação
                </h1>
            </Content>
        </Container>
    )
}