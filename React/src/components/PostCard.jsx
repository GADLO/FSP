import React from 'react';
import { format } from 'date-fns';
import postStyle from '../styles/postPage.module.css'


const PostCard = ({ post }) => {



    return (
        <div className={ postStyle["post-card"] }>
            <h3 className={ postStyle["post-title"] }>{ post.title }</h3>
            <div className={ postStyle["post-meta"] }>
                <span className={ postStyle["author"] }>作者ID: { post.user_id }</span>
                <span className={ postStyle["date"] }>
                    { format(new Date(post.created_at), 'yyyy-MM-dd HH:mm') }
                </span>
                <span className={ `status ${post.status}` }>{ post.status }</span>
            </div>
            <p className={ postStyle["post-preview"] }>{ post.preview }</p>
            <a href={ `/posts/${post.slug}` } className={ postStyle["read-more"] }>阅读全文 →</a>
        </div>
    );
};

export default PostCard;