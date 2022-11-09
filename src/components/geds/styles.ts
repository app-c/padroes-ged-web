import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 700px;
    background-color: #bccde3;
    padding: 10px;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    margin-top: 3px;

    &:hover {
    background-color: #afc1d8;

    }
`;

export const DeleteContainer = styled.button`
    background-color: #e28e8e;
    max-width: 100px;
    height: 40px;
    align-self: flex-end;

    border-radius: 4px;

    cursor: pointer;

`;