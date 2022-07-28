import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>

                <Avatar 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQF2U4EBgApC7Q/profile-displayphoto-shrink_800_800/0/1586458218311?e=1664409600&v=beta&t=rA6SwTz3QdNEC5_En4R2Nubkn4HvR_1LFgETATM6RYo" 
                />

                <strong>Vinicius Machioni</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>

        </aside>
    );
}