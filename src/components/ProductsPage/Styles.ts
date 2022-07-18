import styled from "styled-components";
export const ProductCard = styled.div`
    background-color: #FFF; 
    margin: .5rem; 
    max-width: 200px;
    max-height: 300px; 
    text-align: center; 
    padding: .5rem;
    border-radius: 1rem;
`;
export const AddRemove = styled.button`

    font-size: 1rem;
    color: #fff;
    background: var(--yellow);
    border: 0;
    padding: 0 0.2rem;
    border-radius: 0.25rem;
    height: 2rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
`