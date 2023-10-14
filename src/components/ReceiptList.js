import { BiWon, BiSolidUserCircle } from "react-icons/bi";

const ReceiptList = ({receipts}) => {

    return (
        receipts.map(receipt => (
            <div className="Template" key={receipt.idx}>
                <div className="user_name"><span className="user_icon"><BiSolidUserCircle/></span> {receipt.name}</div>
                <table>
                    <thead>
                        <tr>
                            <th>내용</th>
                            <th>금액</th>
                        </tr>
                    </thead>
                    <tbody>
                    {receipt.products.map((product, idx) => (
                        <tr key={idx}>
                            <td className="product">{product.product}</td>
                            <td className="price"> {product.price.toLocaleString()}</td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr className="total_price">
                        <td>합계</td>
                        <td className="price"><span className="won"><BiWon/></span> {receipt.totalPrice.toLocaleString()}</td>
                    </tr>
                    </tfoot>
                    

                </table>

            </div>
        ))

    );
};

export default ReceiptList;