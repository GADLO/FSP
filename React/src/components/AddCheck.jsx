import { useState, useEffect } from "react";
import checkStyle from '../styles/style.module.css'


const AddCheck = ({ addCheck }) => {

    const [name, setName] = useState('');
    const [info, setInfo] = useState('');

    return (
        <form onSubmit={ (e) => {
            e.preventDefault()
            addCheck({ name, info })
            setName('')
            setInfo('')

        } } className={ checkStyle.addCheck }>
            <label htmlFor="newItem">项目名称</label>
            <input type="text" name="newItem" id="newItem" value={ name } onChange={ (e) => setName(e.target.value) } placeholder="输入新项目" />

            <label htmlFor="itemInfo">详细信息</label>
            <input type="textarea" name="newItem" id="itemInfo" value={ info } onChange={ (e) => setInfo(e.target.value) } placeholder="输入新项目检查内容" />
            <button >提交</button>
        </form>
    )
}


export default AddCheck;