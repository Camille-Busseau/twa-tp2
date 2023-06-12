import { FaTimes } from 'react-icons/fa'
const SingleProduct = ({ product, onDelete, onToggle, onEditToggle }) => {

    return (
        <div className="product" onDoubleClick={() => onToggle(product.id)}>
            <div className='p-description'>
                <h4>{product.productName}</h4>
                <p>{product.description ? product.description : 'No description'}</p>
                <code>{product.category}</code>
            </div>
            <div className='p-suite'>
                <div className='p-price'>
                    <p className={`price ${product.sale ? 'sale' : ''}`}>{product.price}</p>
                    {product.sale && <span>Sale</span>}
                </div>
                <FaTimes style={{ color: "#d93e0f" }} onClick={() => onDelete(product.id)} />
                <button className="btn btn-sm" onClick={onEditToggle}>Edit</button>
            </div>
        </div>
    )
}

export default SingleProduct