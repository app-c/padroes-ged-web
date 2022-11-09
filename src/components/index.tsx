import { Box, Circle, Container } from "./styles";

interface Props {
    title: string
    pres: () => void
    select: boolean
}

export function Select({title, pres, select}: Props) {
    return ( 
        <Box select={select} onClick={pres} >
            <p>{title}</p>

        </Box>
    )
}