import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false);
    const [mensagemErro, setMensagemErro] = useState('');

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Usuário não encontrado. Verifique o nome de usuário.');
                }
            })
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch(error => {
                setDeuErro(true);
                setMensagemErro(`Erro ao carregar repositórios do usuário ${nomeUsuario}. Verifique se o nome de usuário é válido.`);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            <h4 className={styles.name}>Sua lista de repositórios:</h4>
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <div className={styles.itemName}>
                                <b>Nome: </b> {repositorio.name} <br />
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b> {repositorio.language} <br />
                            </div>
                            <div className={styles.itemLink}>
                                <a href={repositorio.homepage}>link do site</a> <br />
                                <a href={repositorio.html_url}>link do GitHub</a> <br />
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {deuErro && (
                <div className={styles.error}>
                    <p>{mensagemErro}</p>
                </div>
            )}
        </div>
    );
};

export default ReposList;