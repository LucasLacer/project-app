import {gql, useQuery} from '@apollo/client'
const CATEGORIES = gql`
query Categories {
  categories {
    id
    title
  }
}
`
interface CategoryList {
    id:string,
    title:string
}
export default function CategoryButtons(){

    function categoryRender(categorys: Array<CategoryList>) {
        const batata = categorys.map((category) =>
          <div key={category.id} style={{
            backgroundColor: '#FFF', margin: '1rem', maxWidth: '200px',
            maxHeight: '200px'
          }}>
            <button>{category.title}</button>
          </div>
        )
        return batata
      }
    const {loading, error, data} = useQuery(CATEGORIES)
    if (loading) return <h1>Loading</h1>
    if (error) return (<div><h1>error</h1></div>);
    return (
        <div style={{flexDirection: 'row',
            display: 'flex'} }>{categoryRender(data.categories)}</div>
    )
}