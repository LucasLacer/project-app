
import { Container } from "../TransactionsTable/Styles";

export function TrasactionsTable() {    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

            </table>
        </Container>
    )
}