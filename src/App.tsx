import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Siderbar'


import './global.css'
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQF2U4EBgApC7Q/profile-displayphoto-shrink_800_800/0/1586458218311?e=1664409600&v=beta&t=rA6SwTz3QdNEC5_En4R2Nubkn4HvR_1LFgETATM6RYo',
      name: 'Vinicius Machioni',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-25 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-25 22:35:10')
  },
];



export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* Percorrendo o array de posts criado */}
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}


