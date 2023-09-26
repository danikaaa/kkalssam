import {useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";

const UserList = () => {

    const [users, setUsers] = useState([
        { id : 1, name : '수연'},
        { id : 2, name : '다니카'},
    ]);

    // user add 클릭시 토글
    const userOnToggle = () => {
        document.getElementById('user_input_box').classList.toggle('none');
    };
    
    const userAdd = () =>  {
        console.log('user add');
        
        
    };

    const onChange  = (e) => {
        
       
    };

    return(
        <div className="UserList">
            <div className="title">함께하는 사람</div>
            <ul>
                {users.map(user => (<li className="user-icon">{user.name}</li>))}
                <div className="user_add" onClick={userOnToggle}><BsPlusCircleDotted /></div>
            </ul>
            <div id="user_input_box" className="none">
                <div className="user_input_box">
                    <input type="text" name="username" placeholder="ex) 홍길동" onChange={onChange}></input>
                    <div className="add_btn" onClick={userAdd}>추가</div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
