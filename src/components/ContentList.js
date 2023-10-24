import { useState, useCallback } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { BiWon } from "react-icons/bi";
import '../styles/ContentTemplate.scss';

const ContentList = ({contents, userlist, onContentInsert}) => {


    const initialFormState = {
        idx: '',
        product: '',
        price: '',
        users: [],
    };
    
    const [value, setValue] = useState(initialFormState);


    const onChange = useCallback(e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    }, [setValue, value]);


    
    const contentAdd = useCallback(e => {
    
        // 예외처리
        if(document.getElementById('product').value === ''){
            alert("내역을 입력하세요.");
        }else if(document.getElementById('price').value === ''){
            alert("금액을 입력하세요.");
        }else if(value.users.length === 0){
            alert("사용자를 선택해주세요.");
        }else{
            onContentInsert(value);
            setValue(initialFormState); // 초기 상태로 리셋
            e.preventDefault(); // 새로고침 방지용
            document.getElementById('product').value = '';
            document.getElementById('price').value ='';
            console.log(value);

        }
        
    }, [onContentInsert, value]);



    const handleUserCheckboxChange = useCallback(e => {
        const { checked, value } = e.target;
        if (checked) {
            setValue(prevValue => ({
                ...prevValue,
                users: [...prevValue.users, value],
            }));


        } else {
            setValue(prevValue => ({
                ...prevValue,
                users: prevValue.users.filter(user => user !== value),
            }));
        }
    }, [setValue]);



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
                        <div className="price"><span className="won"><BiWon /></span> {content.price.toLocaleString()}</div>
                        <div className="users">{content.users.join(', ')}</div>
                    </li>
                ))}
            </ul>
            <div className="content-button" onClick={contentOnToggle}><BsPlusCircleDotted /></div>
            <div id="content_input_box" className="none">
                <div className="content_input_box">
                    <div className="sub_content_list">
                        <div className="sub_title">내용</div>
                        <input type="text" name="product" id="product" placeholder="ex) 아이스아메리카노" onChange={onChange}></input>
                    </div>
                    <div className="sub_content_list">
                        <div className="sub_title">금액</div>
                        <input type="text" name="price" id="price" placeholder="ex) 4000" onChange={onChange}></input><span className="text_won">원</span>
                    </div>
                    <div className="sub_content_list">
                        <ul className="user_ul">{userlist.map(user => (<li className="user-icon" key={user.idx}><input type="checkbox" name="users" value={user.name} id={user.idx} onChange={handleUserCheckboxChange} checked={user.checked}/><label htmlFor={user.idx}>{user.name}</label></li>))}</ul>
                    </div>
                    <div className="add_btn" onClick={contentAdd}>추가</div>
                </div>
            </div>
        </div>
    );

};

export default ContentList;
