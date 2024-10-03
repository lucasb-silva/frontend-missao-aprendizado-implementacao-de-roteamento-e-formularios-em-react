import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Api } from './api/api'

function App() {

  const [devmons, setDevmons] = useState([])

  async function fetchData() {
    const apiURL = Api.personagem.readAll()

    const response = await Api.buildApiGetRequest(apiURL)

    if (response.ok) {
      const data = await response.json()

      setDevmons(data)
    } else {
      toast.error('Erro ao carregar lista de Devmon')
    }

  }

  useEffect(function () {
    fetchData()
  }, [])

  return (
    <>
      Lista de Cards com Map: <br />
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div >
      <ToastContainer />
    </>
  )
}

export default App
