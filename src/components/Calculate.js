// 계산 컴포넌트
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


const Calculate = () => {

    return (
        <Link to={"Receipt"}>
            <button className="calculate-button" >
                계산 <BsArrowRight />
            </button>
        </Link>
    );
};

export default Calculate;