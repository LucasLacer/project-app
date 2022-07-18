import { render, screen, fireEvent } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing";
import ProductsPage from "./ProductsPage";
import '@testing-library/jest-dom/extend-expect'

describe('ProductsPage', ()=>{
    test('shouldrender',()=>{
        render(<ProductsPage/>)
    })
})