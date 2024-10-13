import { useEffect, useState } from "react"

function App() {

    const [name, setName] = useState(null);

    useEffect(() => {

        fetch('http://localhost/api', {
            method: 'GET', // or 'POST', 'PUT', etc.
        }).then(resp => resp.json()).then(json => {

           setName(json.name)
        });
    }, []);

    return (
        <>
            <h2>Nome: {name}</h2>
        </>
    )
}

export default App
