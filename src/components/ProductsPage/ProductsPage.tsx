import { gql, useQuery } from "@apollo/client"
import { Header } from "../Header";
import { GlobalStyle } from "../../styles/global";
//import CategoryButtons from "../CatergoryButtons/CategoryButtons"
import CategoryButtons from "../CatergoryButtons/CategoryButtons"
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
export default function ProductsPage(props: ProductsPageProps) {
  const { vendorId } = props
  const { loading, error, data } = useQuery(POC, { variables: { pocId: vendorId } })
  console.log(data)
  if (loading) return <h1>Is loading</h1>
  if (error) return <h1>error</h1>
  function productsRender(products: Array<ProductsList>) {
    const batata = products.map((product) =>
      <div key={product.id} style={{
        backgroundColor: '#FFF', margin: '1rem', maxWidth: '200px',
        maxHeight: '300px'
      }}>
        <img src={product.image} alt={product.title} width='200px' height='200px'></img>
        <h3 style={{
          textAlign: 'center'
        }}>{product.title}</h3>
      </div>
    )
    return batata
  }

  return (
    <div>
      <Header />
      <CategoryButtons />
      <div className="Products_wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/*  <div style={{ backgroundColor: '#FFF' }}>
          <img src={data.poc.products[0].image}></img>
          <h3>{data.poc.products[0].title}</h3>
        </div>
        <div style={{ backgroundColor: '#FFF' }}>
          <img src={data.poc.products[1].image}></img>
          <h3>{data.poc.products[1].title}</h3>
        </div> */}
        {productsRender(data.poc.products)}
        <GlobalStyle />
      </div>
    </div>
  )

}