import { useEffect, useState } from "react"

function App() {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => {

        fetch('http://localhost/api').then(resp => resp.json()).then(json => {

           setName(json.name)
           setEmail(json.email)
        });
    }, []);

    return (
        <>
            <h2>Nome: {name}</h2>
            <h2>Email: {email}</h2>

        </>
    )
}

export default App
