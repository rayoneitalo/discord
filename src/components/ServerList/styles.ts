import styled from 'styled-components';

export const Container = styled.div`
    grid-area: SL;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--tertiary);
    padding: 11px 0;
    height: 100vh;
    overflow-y: scroll;


    scrollbar-width: none; /* Firefox */
    /* Google Chrome */
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Separator = styled.div`
    width: 32px;
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 8px;
`;

export const BtnAdd = styled.button`
    display: flex;
    align-items: center;
    justify-content : center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
    background-color: var(--btnAdd);
    color: var(--white);
    border-radius: 50%;
    transition: .1s all;
    cursor: pointer;

    &.active, &:hover {
        border-radius: 16px;
        background-color: var(--btnAdd-hover);
    }
`;
