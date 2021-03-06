import styled from "styled-components";

export const Container = styled.div`

table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td {
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        border-radius: 0.25rem;

        &:first-child {
            color: var(--text-title);
        }

    }
}
`