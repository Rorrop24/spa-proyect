import{ useEffect, useState }from "react"

function App() {
  const[planes , setPlanes] = useState([])
  const[error,SetError] = useState(null)
  const[loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch("httpp//localhost:8080/api/planes")
    .then(response=>{
      if(!response.ok) throw new Error("Error al obtener planes")
        return response.json()
    })
    .then(data=>{
      setPlanes(data)
      setLoading(false)

    })
    .catch(err=>{
      SetError(err.message)
      setLoading(false)

    })


  },[])

  return (
    <div>
      <h1>Spa Relax</h1>
      {loading && <p>Cargando Planes. . .</p>}
      {error && <p>Error:{error}</p>}
      <ul>
      {planes.map(plan=>{

        <li key={plan.id}>
      <h3>{plan.nombre}</h3>
      <p>{plan.descripcion}</p>
      <strong>${planes.precio}</strong>

      </li>

      })}
      


      </ul>

    </div>
  )
}

export default App
