import ContentTemplate from "./ContentTemplate";
import UserTemplate from "./UserTemplate";
import '../styles/Home.scss';
import Calculate from "../components/Calculate";
import { useState, useCallback, useRef } from "react";


const Home = () =>{

    // user list start
    const [users, setUsers] = useState([]);
    const nextId = useRef(1);

    const onUserInsert = useCallback(name => {
        const user = {idx: nextId.current, name};
        setUsers(users.concat(user));
        nextId.current += 1;
    },[users]);
    // user list end 


    // contents start
    const [contents, setContents] = useState([
    
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
            <Calculate  userlist={users} contents={contents} />
        </div>
    );

};

export default Home;