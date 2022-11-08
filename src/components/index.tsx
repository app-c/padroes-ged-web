import { Circle, Container } from "./styles";

interface Props {
    title: string
}

export function Select() {
    return ( 
        <div style={{display: "flex", flexDirection: 'column', marginLeft: 25}} >
            <p>sed</p>
            <Container>
                <Circle />
            </Container>

        </div>
    )
}