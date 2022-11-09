import { Container, DeleteContainer } from "./styles";

interface Props {
    title: string
    pres: () => void
}

export function Geds({title, pres}: Props) {
    return (
        <Container>
            <p>{title}</p>

            <DeleteContainer onClick={pres} >Deletear</DeleteContainer>
        </Container>
    )
}