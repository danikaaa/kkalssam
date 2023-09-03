import { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { BiWon } from "react-icons/bi";
import '../styles/ContentTemplate.scss';

const ContentList = () => {

    const [contents, setContents] = useState([
        {idx: 1, product: '아이스크림', price:2000, users:['수연','다니카']}
    ]);

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
            <div className="content-button"><BsPlusCircleDotted /></div>
        </div>
    );

};

export default ContentList;
