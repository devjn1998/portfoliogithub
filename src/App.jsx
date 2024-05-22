// 1. importação, 2. codigo do componente
import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import './global.css';


function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
      {nomeUsuario.length === 0 && (
        <div className="containerInput">
        <h1>Perfil do github:</h1>
        <input className="input" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      </div>
      )}
      

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App

