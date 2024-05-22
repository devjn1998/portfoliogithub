import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 3000)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            <h4 className={styles.name}>Sua lista de repositório:</h4>
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li className={styles.listItem}>
                        <div className={styles.itemName}>
                            <b>Nome: </b> {repositorio.name} <br />
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem: </b> {repositorio.language} <br />
                        </div>
                        <div className={styles.itemLink}>
                            <a href={repositorio.homepage}>link do site</a> <br />
                            <a href={repositorio.html_url}>link do github</a> <br />
                        </div>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default ReposList;