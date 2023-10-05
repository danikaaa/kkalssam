import { render } from "@testing-library/react";
import '../styles/Home.scss';
import '../styles/Receipt.scss';

const Receipt = () => {

    render(
        <div className="Template">
            <div className="user_name">나미</div>
            <table>
                <thead>
                    <tr>
                        <th>내용</th>
                        <th>금액</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>아이스아메리카노</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>떡볶이</td>
                        <td>3500</td>
                    </tr>
                    <tr className="total_price">
                        <td>합계</td>
                        <td>5500</td>
                    </tr>
                </tbody>
                
            </table>

        </div>

    );
        
};

export default Receipt