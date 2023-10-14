// 계산 컴포넌트
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Calculate = ({userlist, contents}) => {

    const navigate = useNavigate();

    const onClick = () => {

        if(userlist.length === 0 && contents.length === 0){
            alert("등록이 되지 않아 계산을 진행 할 수 없습니다.");
            return false;
        }

        navigate('/Receipt',{state:{
            userlist: userlist,
            contents: contents
        }});

    };
    return (
        <button className="calculate-button" onClick={onClick}>
            계산 <BsArrowRight />
        </button>
    );
};

export default Calculate;