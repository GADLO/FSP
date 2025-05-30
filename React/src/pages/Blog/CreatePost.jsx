import React, { useState } from 'react';
import createStyle from '../../styles/createPost.module.css';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';


const tagsModel = ['React', 'Vue', 'Express', 'Material', 'Node', 'Sqlite', 'Thoughts', 'Mao']

const CreatePost = ({ onPostCreated }) => {
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        intro: '',
        body: '',
        status: 'published',
        user_id: 0,
        tags: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [tags, setTags] = useState([])

    const handleTags = (e) => {

        const curTag = e.target.innerText;
        const tagInd = tags.findIndex((element) => element === curTag)


        if (tagInd > -1) {
            tags.splice(tagInd, 1)
            setTags([...tags])
        } else {
            setTags([...tags, curTag])

        }

        console.log(curTag, tags);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        formData.slug = `blog${Date.now()}`
        formData.tags = JSON.stringify(tags)
        console.log(tags);
        console.log(formData);

        try {
            // 使用 fetch 发送 POST 请求
            const response = await fetch('http://localhost:3000/blog/post/createpost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // 处理 HTTP 错误状态码（如 400, 500）
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP 错误: ${response.status}`);
            }

            // 解析 JSON 数据
            const data = await response.json();
            console.log('文章创建成功:', data);

            if (onPostCreated) onPostCreated();
            setFormData({ title: '', slug: '', body: '', user_id: 0, status: 'published', tags: '', intro: '' });

        } catch (err) {
            setError(err.message || '提交失败，请检查网络');
            console.error('请求失败:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e) => {


        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className={ createStyle.container }>
            <h4>新建文章</h4>
            <Stack
                component="form"
                onSubmit={ handleSubmit }
                sx={ { width: '85ch' } }
                spacing={ 4 }
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-basic"
                    label="标题"
                    name='title'
                    variant="filled"
                    defaultValue={ formData.title }
                    onChange={ handleInputChange }
                />
                <Stack direction="row" spacing={ 1 } sx={ { mt: '10px' } }>

                    { tagsModel.map(tag => (

                        <Chip onDelete={ handleSubmit } deleteIcon={ tags.find(t => t === tag) ? <DoneIcon /> : '' } key={ tag } onClick={ handleTags } label={ tag } variant="outlined" color={ tags.find(t => t === tag) ? "success" : 'default' } />

                    )) }
                </Stack>
                <TextField
                    id="standard-basic"
                    label="简介"
                    name='intro'
                    variant="filled"
                    defaultValue={ formData.tag }
                    onChange={ handleInputChange }
                />
                <TextField
                    rows={ 12 }
                    multiline
                    name='body'
                    id="standard-basic"
                    label="文章"
                    variant="filled"
                    defaultValue={ formData.body }
                    onChange={ handleInputChange }
                />
            </Stack>
            <Stack direction="row" spacing={ 1 } sx={ { mt: '50px' } }>
                <Chip label={ isSubmitting ? '提交中...' : '发布文章' } color={ isSubmitting ? '' : 'primary' } variant="filled" onClick={ handleSubmit } />
            </Stack>

            {/* <form onSubmit={ handleSubmit }>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                <div className={ createStyle["form-group"] }>
                    <label>标题</label>
                    <input
                        type="text"
                        name="title"
                        value={ formData.title }
                        onChange={ handleInputChange }
                        required
                        minLength="5"
                    />
                </div>

                <div className={ createStyle["form-group"] }>
                    <label>URL标识 (slug)</label>
                    <input
                        type="text"
                        name="slug"
                        value={ formData.slug }
                        onChange={ handleInputChange }
                        required
                        pattern="[a-z0-9-]+"
                    />
                </div>

                <div className={ createStyle["form-group"] }>
                    <label>正文</label>
                    <textarea
                        name="body"
                        value={ formData.body }
                        onChange={ handleInputChange }
                        rows="8"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={ isSubmitting }
                    className={ createStyle["submit-button"] }
                >
                    { isSubmitting ? '提交中...' : '发布文章' }
                </button>
            </form> */}
        </div>
    );
};

export default CreatePost;