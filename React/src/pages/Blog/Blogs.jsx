import { useEffect, useState, Fragment } from 'react';  // Add useState
import blogStyle from '../../styles/blogPage.module.css'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';


import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Blogs = () => {
    const [post, setPost] = useState([]);  // Use state instead of regular variable

    async function fetchPost() {
        try {
            const response = await fetch('http://localhost:3000/blog/post/list/10');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const posts = await response.json();
            console.log(posts
            );

            setPost(posts.data)
        } catch (error) {
            console.error('Fetch error:', error);
            setUser([]);  // Set default value to prevent crashes
        }
    }

    const handleDelete = async (slug) => {


        const response = await fetch(`http://localhost:3000/blog/post/delete/${slug}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
            fetchPost();
        }
    }

    useEffect(() => {
        fetchPost();
    }, []);  // Add empty dependency array to run once on mount

    return (
        <div className={ blogStyle.blogs }>
            <Typography sx={ { mt: '20px', mb: '50px' } } variant="h4" gutterBottom>
                理论的基础是实践，又转过来为实践服务。
            </Typography>


            { post?.map(item => (
                <Box key={ item.title } sx={ { flexGrow: 1, p: 2, border: '1px dashed grey', width: '50%', height: '140px' } }>

                    <Grid container spacing={ 2 } sx={ {
                        justifyContent: "center",
                        alignItems: "center",
                    } }>
                        <Grid size={ 9 }>
                            <Typography sx={ {} } variant="h6" gutterBottom>
                                { item.title }
                            </Typography>
                            <Typography sx={ {} } variant="body2" gutterBottom>
                                { item.preview }
                                <Link href={ `/posts/${item.slug}` } underline="none">
                                    read more
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid size={ 3 }>
                            <Chip
                                label="Delete"
                                color='error'
                                variant="outlined"
                                onClick={ () => handleDelete(item.slug) }
                                onDelete={ handleDelete }
                            />
                        </Grid>


                    </Grid>


                </Box>

            )) }


        </div >
    )
}

export default Blogs;