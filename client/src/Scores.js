import React, { useEffect } from 'react'

const Scores = () => {
    const [scoreData, setSD] = useState([])
    const [name, setname] = useState('John')
    useEffect(async () => {
        setSD(await fetch(`/hello/${name}`)
        .then(res => res.json()))
    },[])
  return (
    <div>Scores:
        {scoreData.map(e => <DataItem score={e.score} name={e.name} key={e.id}/>)}
    </div>

  )
}

export default Scores