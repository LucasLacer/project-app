import { Container } from "./Styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
export function Summary() {


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
            </div>
        </Container>
    )
}