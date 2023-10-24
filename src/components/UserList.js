import React, { useState, useCallback } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";

const UserList = ({ users, onUserInsert }) => {
    const [username, setUsername] = useState('');

    const onChange = useCallback(e => {
        setUsername(e.target.value);
    }, []);

    const userAdd = useCallback(() => {

        // 예외처리
        if(document.getElementById('username').value === ''){
            alert('사용자를 입력하세요.');
        }else{
            onUserInsert(username);
            setUsername('');
            document.getElementById('username').value = '';
        }

        
    }, [onUserInsert, username]);


    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            userAdd();
        }
    }

    const userOnToggle = () => {
        document.getElementById('user_input_box').classList.toggle('none');
    };

    return (
        <div className="UserList">
            <div className="title">함께하는 사람</div>
            <ul className="user_ul">
                {users.map(user => (<li className="user-icon" key={user.idx}>{user.name}</li>))}
                <div className="user_add" onClick={userOnToggle}><BsPlusCircleDotted /></div>
            </ul>
            <div id="user_input_box" className="none">
                <div className="user_input_box">
                    <input type="text" name="username" id="username" placeholder="ex) 홍길동" onChange={onChange} onKeyDown={onKeyDown}></input>
                    <div className="add_btn" onClick={userAdd}>추가</div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
