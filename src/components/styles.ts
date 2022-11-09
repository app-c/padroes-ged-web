import styled from 'styled-components'

interface Props {
    select: boolean
}

export const Box = styled.button<Props>`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    width: 60px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${({select: h}) => h ? '#1c3979' : '#6e8bdb'};
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    border-radius: 7px;

    &:hover {
        background-color: #1c3979
    }
`;

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

    &:hover {
        background-color: #0f154b
    }
`;

export const Circle = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 8px;
    background-color: #f2f2f2;
    border-width: 3px;
`;