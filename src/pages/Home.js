import ContentTemplate from "./ContentTemplate";
import UserTemplate from "./UserTemplate";
import '../styles/Home.scss';
import Calculate from "../components/Calculate";
import { useState, useCallback, useRef } from "react";


const Home = () =>{

    // user list start
    const [users, setUsers] = useState([
        { idx : 1, name : '수연'},
        { idx : 2, name : '나미'},
    ]);
    const nextId = useRef(4);
    const onUserInsert = useCallback(name => {
        const user = {idx: nextId.current, name};
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

    const onContentInsert = useCallback(data=>{
        const content = {idx: nextId.current, product: data.product, price: data.price, users:data.users};
        setContents(contents.concat(content));
        nextId.current += 1;
    },[contents]);
    //contents end


    return (
        <div>
            <UserTemplate users={users} onUserInsert={onUserInsert}/>
            <ContentTemplate contents={contents} userlist={users} onContentInsert={onContentInsert}/>
            <Calculate />
        </div>
    );

};

export default Home;