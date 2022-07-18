import { gql, useQuery } from '@apollo/client'
import { useContext } from 'react'
import { categoryFunction } from "../ProductsPage/ProductsPage"
import { Content } from './Styles'
export const CATEGORIES = gql`
query Categories {
  categories {
    id
    title
  }
}
`
export interface CategoryList {
  id: string,
  title: string
}
export default function CategoryButtons() {
  const context = useContext(categoryFunction)

  function categoryRender(categorys: Array<CategoryList>) {
    const batata = categorys.map((category) =>
      <Content key={category.id} >
        <button onClick={() => { context?.passCategory(category.id) }}>{category.title}</button>
      </Content>
    )
    return batata
  }
  const { loading, error, data } = useQuery(CATEGORIES)
  if (loading) return <h1>Carregando</h1>
  if (error) return (<div><h1>error</h1></div>);
  return (
    <div style={{
      flexDirection: 'row',
      display: 'flex'
    }}>{categoryRender(data.categories)}
      <Content>
        <button onClick={() => { context?.passCategory('') }} >Limpar filtro</button></Content>
    </div>
  )
}