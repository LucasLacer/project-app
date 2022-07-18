import { useContext } from "react"
import { Container } from "./Styles";
import { ProductsOnChart } from "../ProductsPage/ProductsPage"


export default function ShoppingChart() {
    const context = useContext(ProductsOnChart)
    function renderProductsOnChart() {

        if (context instanceof Array) {
            return context.map(product => (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(product.price)}
                    </td>
                    <td>{product.quantity}</td>
                </tr>
            ))
        }
    }

    return (<div>
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Quantide</th>
                    </tr>
                </thead>
                <tbody>
                    {renderProductsOnChart()}
                </tbody>
            </table>
        </Container>
    </div>)

}