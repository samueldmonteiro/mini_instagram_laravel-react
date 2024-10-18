import { useState } from 'react'
import { Container } from '../../globals/GlobalStyles'

const Home = () => {

    const [count, setCount] = useState(0);

    return (
        <Container>
            <div>Home</div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count + 1)}>Contar</button>

        </Container>
    )
}

export default Home