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
       name: "Guilherme Condé", 
       role: "Web Developer"
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
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
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
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
         {posts.map(posts => {
          return (
            <Post 
            key={posts.id}
            author={posts.author}
            content={posts.content}
            publishedAt={posts.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </div>
   )
}

 
