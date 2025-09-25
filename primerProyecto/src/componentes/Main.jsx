import styles from './../css/Main.module.css'

const Main = () =>{
    return <main className={styles.main}>
        <h2>Lista de cosas por hacer:</h2>
        <ul>
            <li>Aprender React</li>
            <li>Practicar con vite</li>
            <li>Construir proyectos increibles</li> 
        </ul>
    </main>
}

export default Main