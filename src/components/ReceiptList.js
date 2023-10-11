
const ReceiptList = ({receipts}) => {

    return (
        receipts.map(receipt => (
            <div className="Template" key={receipt.idx}>
                <div className="user_name">{receipt.name}</div>
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
                            <td>{product.product}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr className="total_price">
                        <td>합계</td>
                        <td>5500</td>
                    </tr>
                    </tfoot>
                    

                </table>

            </div>
        ))

    );
};

export default ReceiptList;