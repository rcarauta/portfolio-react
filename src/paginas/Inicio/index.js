import PostCard from "componentes/PostCard"
import styles from './Inicio.module.css'
import posts from 'assets/posts.json'


const Inicio = () => {
    return (
            <ul className={styles.posts}>
                {posts.map((post) => {
                    return (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                    )
                })}
           </ul>     
    )
}

export default Inicio
