import { useState } from "react"
const AddProduct = ({ onAdd }) => {
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [sale, setSale] = useState(false)
    const [category, setCategory] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log({text, date, reminder})
        if (!productName) {
            alert('Please add a product')
            return
        }
        onAdd({ productName, description, price, sale, category })
        setProductName('')
        setDescription('')
        setPrice('')
        setSale(false)
        setCategory('')
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <h2>Add a product</h2>
            <div className="form-control">
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder='Add the name of a product'
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Product Description</label>
                <textarea
                    placeholder='Add the description of the product'
                    style={{ width: '100%', fontSize: "17px", padding: "3px 7px" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="5"></textarea>
            </div>
            <div className="set-price">
                <div className="form-control">
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className="form-control form-control-check">
                    <label>On Sale</label>
                    <input
                        type="checkbox"
                        checked={sale}
                        onChange={(e) => setSale(e.currentTarget.checked)}
                    />
                </div>
            </div>
            <select className="form-control mb-4" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option selected>Select a category</option>
                <option value="Headphones, Speakers & Audio">Headphones, Speakers & Audio</option>
                <option value="Video Games & VR">Video Games & VR</option>
                <option value="Cell Phones & Accessories">Cell Phones & Accessories</option>
                <option value="Computers, Tablets & Accessories">Computers, Tablets & Accessories</option>
            </select>
            <input type="submit" className="btn btn-block" value="Save Product" />
        </form>
    )

}

export default AddProduct