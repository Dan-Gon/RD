import './BlogPost.css';

interface BlogData {
    title: string,
    blogImage: string,
    bodyText: string
}

const BlogPost = (props: BlogData) => {
    return(
        <div className={'blog-post-container'}>
            <h1>{props.title}</h1>
            <img src={props.blogImage} alt=""/>
            <p>{props.bodyText}</p>
        </div>
    )
}
export default BlogPost;