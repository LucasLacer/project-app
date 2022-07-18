import { gql, useQuery } from "@apollo/client"
import { Header } from "../Header";
import { GlobalStyle } from "../../styles/global";
import CategoryButtons from "../CatergoryButtons/CategoryButtons"
import { createContext, Dispatch, SetStateAction, useState } from "react";
import ShoppingChart from "../ShoppingChart/ShoppingChart"
import { useLocation } from "react-router-dom"
import { ProductCard, AddRemove } from "./Styles"
interface ProductsPageProps {
  vendorId: string,
}
interface ProductsList {
  product: string,
  id: string,
  title: string,
  image: string,
  price: number
}

interface cartProducts extends ProductsList {
  quantity: number
}

const POC = gql`
query Poc($pocId: String!, $productsSearch: String, $productsCategoryId: String) {
    poc(id: $pocId) {
      id
      status
      name
      products(search: $productsSearch, categoryId: $productsCategoryId) {
        id
        title
        image
        price
        category {
          id
          title
        }
      }
    }
  }
`
interface CategoryContext {
  passCategory: Dispatch<SetStateAction<string>>
}
export const categoryFunction = createContext<CategoryContext | null>(null)
export const ProductsOnChart = createContext<Array<cartProducts> | null>(null)

export default function ProductsPage() {
  const location = useLocation()

  const { vendorId } = location.state as ProductsPageProps
  const [category, setCategory] = useState('')
  const [productsList, setProductsList] = useState<Array<cartProducts>>([])

  const { loading, error, data } = useQuery(POC, { variables: { pocId: vendorId, productsCategoryId: category } })
  console.log(data)

  function handleCartList(product: ProductsList, action: string) {
    let tempList = null
    if (action === 'add') {
      if (productsList?.length) {
        tempList = [...productsList]

        let disney = { ...product, quantity: 1 }
        const item = tempList.find((p) => p.id === product.id)
        if (item) {
          const index = tempList.indexOf(item)
          tempList[index].quantity += 1
        } else { tempList.push?.(disney) }
      } else {
        tempList = [{ ...product, quantity: 1 }]
      }
      setProductsList?.(tempList)
    } else {
      tempList = [...productsList]

      const item = tempList.find((p) => p.id === product.id)
      if (item) {
        if (item.quantity > 1) {
          const index = tempList.indexOf(item)

          tempList[index].quantity -= 1
          setProductsList?.(tempList)
        } else {
          const removedItem = tempList.filter((p) => p.id !== product.id)
          setProductsList?.(removedItem)
        }
      }
    }

  }
  if (loading) return <div><Header title='Produtos' /><h1>Carregando</h1></div>
  if (error) return <div><Header title='Produtos' /><h1>error</h1></div>
  function productsRender(products: Array<ProductsList>) {
    const batata = products.map((product) =>
      <ProductCard key={product.id} >
        <img src={product.image} alt={product.title} width='96px' height='96px'></img>
        <h3 style={{
          textAlign: 'center',
          fontSize: '14px'
        }}>{product.title}</h3>
        <AddRemove onClick={() => handleCartList(product, 'add')}> Adicionar</AddRemove>
        <AddRemove onClick={() => handleCartList(product, 'remove')}> Remover</AddRemove>
      </ProductCard>

    )
    return batata
  }

  return (
    <div className="ProductsPageWrapper">
      <Header title='Produtos' />
      <div className="Display" style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <categoryFunction.Provider value={{ passCategory: setCategory }}>
            <CategoryButtons />
          </categoryFunction.Provider>
          <div className="Products_wrapper" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, auto)'
          }}>
            {productsRender(data.poc.products)}
            <GlobalStyle />
          </div>
        </div>
        <div>
          <ProductsOnChart.Provider value={productsList}>
            <ShoppingChart />
          </ProductsOnChart.Provider>
        </div>
      </div>
    </div>
  )

}