import { Blog } from "./Blog/Blog"

import styles from '../Blogs/blogs.module.css'

export const Blogs= () => {

    return(
        <section className={styles.blogs}>     
            <h1>Blogs Page</h1>
            <div className={styles.blogsContainer}>
                <Blog />
                <Blog />
                <Blog />
                
            </div>
        </section>
        
    )
}