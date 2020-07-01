import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;

  > div {
    display: flex;
    align-items: center;
    padding: 0 17px;
  }
`;

export const HashtagIcon = styled.span`
  font-size: 18pt;
  font-weight: bold;
  color: var(--symbol);
  /* margin-right: 4px; */
`;
export const Title = styled.h1`
    margin-left: 9px;
    font-size: 16px;
    font-weight: bold;
    color: var(--white);
`;
export const Separator  = styled.div`
    height: 24px;
    width: 1px;
    background-color: var(--white);
    opacity: 0.2;
    margin: 0 13px;
`;
export const Description = styled.span`
    font-size: 15px;
    color: var(--gray);
`;
