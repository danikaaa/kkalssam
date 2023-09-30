import ContentTemplate from "./ContentTemplate";
import UserTemplate from "./UserTemplate";
import '../styles/Home.scss';
import Calculate from "../components/Calculate";
import { useState, useCallback, useRef } from "react";


const Home = () =>{

    // user list start
    const [users, setUsers] = useState([
        { id : 1, name : '수연'},
        { id : 2, name : '나미'},
    ]);

    const nextId = useRef(4);

    const onInsert = useCallback(name => {
        const user = {id: nextId.current, name};
        setUsers(users.concat(user));
        nextId.current += 1;
    },[users]);
    // user list end 


    // contents start
    const [contents, setContents] = useState([
        {idx: 1, product: '아이스크림', price:2000, users:['수연','나미']},
        {idx: 2, product: '떡볶이', price:5000, users:['수연']},
        {idx: 3, product: '어묵' , price:1000, users:['수연','나미']}
    ]);
    //contents end


    return (
        <div>
            <UserTemplate users={users} onInsert={onInsert}/>
            <ContentTemplate contents={contents} userlist={users}/>
            <Calculate />
        </div>
    );

};

export default Home;