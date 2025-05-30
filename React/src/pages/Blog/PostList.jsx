import React, { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard';
import postStyle from '../../styles/postPage.module.css'

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:3000/posts?page=${page}&limit=5`);
            if (!response.ok) throw new Error('数据加载失败');
            const { data, pagination } = await response.json();
            // const data2 = await response.json();

            // console.log(data2);

            setPosts(data);
            setTotalPages(pagination.totalPages);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    return (
        <div className={ postStyle["post-list"] }>
            <h2>最新文章</h2>

            { error && <div className="error">{ error }</div> }

            { isLoading ? (
                <div className="loading">加载中...</div>
            ) : (
                <>
                    <div className={ postStyle["posts-container"] }>
                        { posts.map(post => (
                            <PostCard key={ post.post_id } post={ post } />
                        )) }
                    </div>

                    <div className={ postStyle["pagination"] }>
                        <button
                            onClick={ () => setPage(p => Math.max(1, p - 1)) }
                            disabled={ page === 1 }
                        >
                            上一页
                        </button>
                        <span>第 { page } 页 / 共 { totalPages } 页</span>
                        <button
                            onClick={ () => setPage(p => p + 1) }
                            disabled={ page >= totalPages }
                        >
                            下一页
                        </button>
                    </div>
                </>
            ) }
        </div>
    );
};

export default PostList;