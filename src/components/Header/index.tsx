import { Container, Content } from './Styles'

interface HeaderProps {
    title:string
}
export function Header({title}:HeaderProps) {

    return (
        <Container>
            <Content>
                <h1>
                    {title}
                </h1>
            </Content>
        </Container>
    )
}