import React, { useState } from 'react';
import createStyle from '../../../styles/createPost.module.css'

const formModel = [
    'title',
    'price',
    'referrer',
    'content',
    'url',
    'base64',
]

const CreateAccessory = ({ onPostCreated }) => {


    const [formData, setFormData] = useState({
        title: '',
        price: '',
        referrer: '',
        content: '',
        url: '',
        base64: '',

    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        console.log(formData);

        try {
            // 使用 fetch 发送 POST 请求
            const response = await fetch('http://localhost:3000/car/check/createaccessory', {
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
            console.log('新增周边成功', data);

            if (onPostCreated) onPostCreated();
            setFormData({
                title: '',
                price: '',
                referrer: '',
                content: '',
                url: '',
                base64: '',
            });

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
        <div className={ createStyle.createform }>

            { error && <div className={ createStyle["error-message"] }>{ error }</div> }

            <form onSubmit={ handleSubmit }>
                {
                    formModel.map(item => {



                        return <div className={ createStyle["form-group"] }>
                            <label>{ item }</label>

                            { item === 'base64' ? <textarea
                                name={ item }
                                value={ formData[item] }
                                onChange={ handleInputChange }
                                rows="6"
                                required
                            /> : <input
                                type='text'
                                name={ item }
                                value={ formData[item] }
                                onChange={ handleInputChange }
                                required
                                minLength="2"
                            /> }


                        </div>
                    }


                    )
                }






                <button
                    type="submit"
                    disabled={ isSubmitting }
                    className={ createStyle["submit-button"] }
                >
                    { isSubmitting ? '提交中...' : '点击新增' }
                </button>
            </form>
        </div>
    );
};

export default CreateAccessory;