import styles from '../Blog/blog.module.css'

export const Blog = () => {

    return(
        <article className={styles.blog}>
            <h2>BLOG TITLE</h2>
            <p>By: Aleksandar Vartolomeev March 9th 2023</p>
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum modi ad at earum aliquid voluptatibus inventore autem. Amet, repudiandae rem modi qui voluptate atque nulla.</p>
            <button>READ MORE</button>
        </article>
    )

}