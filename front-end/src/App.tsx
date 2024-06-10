import { useState } from "react"
import { InputLink } from "./components/InputLink"

function App() {
  const [link, setLink] = useState("")
  return (
    <>
      <h1>Hello word</h1>
      <InputLink setInfo={setLink}/>
      <p>Resultado: {link}</p>
    </>
  )
}

export default App
