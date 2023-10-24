import { useLocation } from "react-router-dom";
import ReceiptList from "../components/ReceiptList";
import '../styles/Home.scss';
import '../styles/Receipt.scss';

const Receipt = () => {

    // useLocation으로 데이터 받기
    const location = useLocation();
    const users = location.state.userlist;
    const contents = location.state.contents;


    // 더치페이 계산 후, receipt만드는 함수
    const mergeData = (users, contents) => {
        const receipt = [];
      
        // users 배열 순회
        users.forEach(user => {
            // 각 사용자가 contents 배열의 users에 포함되어 있는지 확인
            const userContents = contents.filter(content => content.users.includes(user.name));
        
      
            // 해당 사용자의 product와 price를 배열에 추가
            const userData = {
            idx: user.idx,
            name: user.name,
            products: userContents.map(content => ({
                product: content.product,
                price: content.price / content.users.length.toFixed(2), // contents의 price를 users.length로 나눠줌
                })),
            };

            // 각 사용자의 products의 가격을 모두 더한 값
            const totalPrice = userData.products.reduce((total, product) => total + product.price, 0).toFixed(2);

            userData.totalPrice = totalPrice;
      
            // 새로운 데이터 배열에 추가
            receipt.push(userData);
        });
      
        return receipt;
      };
      
    const receipt = mergeData(users, contents);

    return(
        <ReceiptList receipts={receipt}/>
    );
        
};

export default Receipt;