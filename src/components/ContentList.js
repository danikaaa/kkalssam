import { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { BiWon } from "react-icons/bi";
import '../styles/ContentTemplate.scss';

const ContentList = ({contents, userlist}) => {

    const {idx, product, price, users} = contents;

    const {id, name} = userlist;



     // content add 클릭시 토글
     const contentOnToggle = () => {
        document.getElementById('content_input_box').classList.toggle('none');
    };

    const contentAdd = () => {
        console.log('content add');
    }

    return (
        <div className="ContentList">
            <div className="title">내역</div>
            <ul>
                {contents.map(content => (
                    <li className="content-item">
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
                        <input type="text" placeholder="ex) 아이스아메리카노"></input>
                    </div>
                    <div className="sub_content_list">
                        <div className="sub_title">가격</div>
                        <input type="text" placeholder="ex) 4000"></input>원
                    </div>
                    <div className="sub_content_list">
                        {userlist.map(user => (<li className="user-icon">{user.name}</li>))}
                    </div>
                    <div className="add_btn" onClick={contentAdd}>추가</div>
                </div>
            </div>
        </div>
    );

};

export default ContentList;
