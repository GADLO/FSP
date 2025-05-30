import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import detailStyle from '../../styles/postDetail.module.css';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

const PostDetail = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchPost = async () => {
        try {
            const response = await fetch(`http://localhost:3000/blog/post/postDetail/${slug}`);
            if (!response.ok) throw new Error('文章加载失败');
            const data = await response.json();


            setPost(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {

        fetchPost();
    }, [slug]);

    if (isLoading) return <div className="loading">加载中...</div>;
    if (error) return <div className="error">{ error }</div>;

    return (
        <div className={ detailStyle["post-detail"] }>
            <article className={ detailStyle["post-content"] }>
                {/* 文章头图 */ }
                { post.featured_image && (
                    <img
                        src={ post.featured_image }
                        alt={ post.title }
                        className={ detailStyle["featured-image"] }
                    />
                ) }

                {/* 文章标题 */ }
                <h1 className={ detailStyle["post-title"] }>{ post.title }</h1>
                <Stack direction="row" spacing={ 1 } sx={ { mt: '10px' } }>

                    { JSON.parse(post.tags).map(tag => (

                        <Chip key={ tag } label={ tag } variant="outlined" color="success" />

                    )) }
                </Stack>
                {/* 作者信息 */ }
                <div className={ detailStyle["author-info"] }>
                    <img
                        src={ post.avatar_base64 }
                        alt={ post.author_name }
                        className={ detailStyle["author-avatar"] }
                    />
                    <div>
                        <div className={ detailStyle["author-name"] }>{ post.author_name }</div>
                        <div className={ detailStyle["post-meta"] }>
                            { format(new Date(post.created_at), 'yyyy年MM月dd日') } ·
                            { Math.ceil(post.body.length / 500) }分钟阅读
                        </div>
                    </div>
                </div>

                <Typography variant="body1" gutterBottom>
                    { post.body.map((item, ind) => (item.length > 15 ? <p key={ 'p' + ind }>{ item }</p> : <h5 key={ 'p' + ind }>{ item }</h5>)) }
                </Typography>

            </article>


        </div>
    );
    export default PostDetail;