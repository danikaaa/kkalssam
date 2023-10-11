import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import ReceiptList from "../components/ReceiptList";
import '../styles/Home.scss';
import '../styles/Receipt.scss';

const Receipt = () => {


    // const [receipt, setReceipt] = useState([]);


    // const receipts = {
    //     idx: '',
    //     name: '',
    //     recontents: []
    
    // };

    // const recontents = {
    //     product: '',
    //     price: '',
    // }


    const location = useLocation();

    const userlist = location.state.userlist;
    const contents = location.state.contents;


    // const receipt = {
    //     idx: userlist.idx,
    //     name : userlist.name,
    //     recontents : []
    // }

    // userlist.map(user => (console.log(user.name)));

    console.log(userlist);
    console.log(contents);
    // console.log(receipt);

    return(

        <ReceiptList userlist={userlist} contetns={contents}/>
    );
        
};

export default Receipt;