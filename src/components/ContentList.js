import { useState, useCallback } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { BiWon } from "react-icons/bi";
import '../styles/ContentTemplate.scss';

const ContentList = ({contents, userlist, onContentInsert}) => {

    // const {idx, product, price, users} = contents;

    // const {idx, name} = userlist;

    const [value, setValue] = useState({
        idx: '',
        product: "",
        price: "",
        users: "",
    });

    const onChange = useCallback(e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    });

    const contentAdd = useCallback(e =>{
        onContentInsert(value);
        setValue('');
        e.preventDefault(); // 새로고침방지용 
    },[onContentInsert,value]);

     // content add 클릭시 토글
     const contentOnToggle = () => {
        document.getElementById('content_input_box').classList.toggle('none');
    };

    return (
        <div className="ContentList">
            <div className="title">내역</div>
            <ul>
                {contents.map(content => (
                    <li className="content-item" key={content.idx}>
                        <div className="product">{content.product}</div>
                        <div className="price"><BiWon /> {content.price}</div>
                        <div className="users">{content.users}</div>
                    </li>
                ))}
            </ul>
            <div className="content-button" onClick={contentOnToggle}><BsPlusCircleDotted /></div>
            <div id="content_input_box" className="none">
                <div className="content_input_box">
                    <div className="sub_content_list">
                        <div className="sub_title">내용</div>
                        <input type="text" name="product" placeholder="ex) 아이스아메리카노" onChange={onChange}></input>
                    </div>
                    <div className="sub_content_list">
                        <div className="sub_title">가격</div>
                        <input type="text" name="price" placeholder="ex) 4000" onChange={onChange}></input>원
                    </div>
                    <div className="sub_content_list">
                        <ul className="user_ul">{userlist.map(user => (<li className="user-icon" key={user.idx}><input type="checkbox" name="users" value={user.name} id={user.idx} onChange={onChange}/><label htmlFor={user.idx}>{user.name}</label></li>))}</ul>
                    </div>
                    <div className="add_btn" onClick={contentAdd}>추가</div>
                </div>
            </div>
        </div>
    );

};

export default ContentList;
