import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import styles from './SideBar.module.css'

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
         
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1617900906639-cab7adceb499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        alt="" 
      />
         
      <div className={styles.profile}>
        <Avatar hasBorder  src='https://github.com/guicondee.png'/>
        <strong>Guilherme Condé</strong>
        <span>Front|End Developer</span>
      </div>

      <footer className={styles.footer}>
      <a href="#">
        <PencilLine size={18} />
        Editar seu Perfil
      </a>
      </footer>

    </aside>
    
  )
}