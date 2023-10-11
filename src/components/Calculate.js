// 계산 컴포넌트
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Calculate = ({userlist, contents}) => {

    const navigate = useNavigate();

    const onClick = () => {

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