import styles from './Perfil.module.css';


const Perfil = (props) => {
    const { nomeUsuario } = props // desestruturação
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>Seja bem-vindo, {nomeUsuario}</h1>
            
        </header>
    )
}

export default Perfil;


// export default Perfil;
// export default function 
// const Perfil = () => {