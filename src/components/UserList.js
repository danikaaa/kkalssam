import { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";

const UserList = () => {

    const [users, setUsers] = useState([
        { id : 1, name : '수연'},
        { id : 2, name : '다니카'},
    ]);


    return(
        <div className="UserList">
            <div className="title">함께하는 사람</div>
            <ul>
                {users.map(user => (<li className="user-icon">{user.name}</li>))}
                <div><BsPlusCircleDotted /></div>
            </ul>
        </div>
    );
};

export default UserList;
