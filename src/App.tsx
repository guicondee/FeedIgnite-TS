import { Header } from "./Components/Header/Header"
import { Post } from "./Components/Post/Post"
import { SideBar } from "./Components/SideBar/SideBar"

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
       avatar_url: "https://github.com/guicondee.png", 
       name: "Guilherme CondΓ©", 
       role: "Web Developer"
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa π'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
        {type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2022-12-08 20:46:00')
  },
  {
    id: 2,
    author: {
       avatar_url: "https://github.com/diego3g.png", 
       name: "Diego Fernandes", 
       role: "Educator @ Rocketseat"
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa π'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
        {type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2022-12-09 23:12:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
       <SideBar />

        <main>
         {posts.map(post => {
          return (
            <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </div>
   )
}

 
