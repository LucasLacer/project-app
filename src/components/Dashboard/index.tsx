import { Summary } from "../Summary";
import { Container } from "./Styles";
import { TrasactionsTable } from "..//TransactionsTable";

export function Dashboard(){

    return (
        <Container>
            <Summary/>
            <TrasactionsTable />
        </Container>
    )
}