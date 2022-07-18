import { render, screen, fireEvent } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing";
import '@testing-library/jest-dom/extend-expect'

import { CATEGORIES } from "./CategoryButtons"
import CategoryButtons from "./CategoryButtons"

const categories = [{
    "id": "94",
    "title": "Cervejas",
    "__typename": "CategorySchema"
},
{
    "id": "95",
    "title": "Destilados",
    "__typename": "CategorySchema"
},
{
    "id": "92",
    "title": "Vinhos",
    "__typename": "CategorySchema"
},
{
    "id": "96",
    "title": "Sem álcool",
    "__typename": "CategorySchema"
},
{
    "id": "97",
    "title": "Petiscos",
    "__typename": "CategorySchema"
},
{
    "id": "98",
    "title": "Outros",
    "__typename": "CategorySchema"
}
]

describe('CategoryButtons', () => {
    const mocks = [{
        request: {
            query: CATEGORIES,

        },
        result: {
            data: {
                categories: categories
            }
        }
    }]
    test('should render and Load', async () => {

        render(<MockedProvider mocks={mocks} addTypename={false}
        ><CategoryButtons /></MockedProvider>
        )
        expect(await screen.findByText("Carregando")).toBeInTheDocument();
        const button = await screen.findByText('Cervejas')
        expect(button).toBeInTheDocument();
        const handleClick = jest.fn()

        button.onclick = handleClick
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('should display buttons', async () => {

        render(<MockedProvider mocks={mocks} addTypename={false}
        ><CategoryButtons /></MockedProvider>
        )

        const buttonCerveja = await screen.findByText('Cervejas')
        const buttonOutros = await screen.findByText('Outros')
        expect(buttonCerveja).toBeInTheDocument();
        expect(buttonOutros).toBeInTheDocument();
    })

    test("should trigger button onClick", async () => {
        render(<MockedProvider mocks={mocks} addTypename={false}
        ><CategoryButtons /></MockedProvider>
        )

        const button = await screen.findByText('Cervejas')
        const handleClick = jest.fn()

        button.onclick = handleClick
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

})