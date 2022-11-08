import styled from 'styled-components'

interface Props {
    select: 'sed' | ''
}

export const Container = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 16px;
    background-color: #3b34d0;
    border-width: 3px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: -15px;
`;

export const Circle = styled.div`
    width: 13px;
    height: 13px;
    border-radius: 7px;
    background-color: #f2f2f2;
    border-width: 3px;
`;