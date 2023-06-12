import SingleProduct from "./SingleProduct"


// loops in react force the DOM to have a key attached to each element of the loop
const ManyProducts = ({products, onDeleteMany, onToggleMany, onEditToggle}) => {
    return(
        <>
        {products.map( (product) => (
        <SingleProduct product={product} key={product.id} onDelete={onDeleteMany} onToggle={onToggleMany} onEditToggle={onEditToggle}/>
                  ))} 
        </>
    )
}

// ManyProducts

export default ManyProducts