import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ManyProducts from './components/ManyProducts'
import AddProduct from './components/AddProduct'
import Footer from './components/Footer'
import About from './components/About'
import EditProduct from './components/EditProduct'

function App() {

  // Global
  // // setProducts variable qui va venir remplacer la product aux changements
  const [products, setProducts] = useState([
    //   données déplacées vers db.json
  ])

    // récupère info du rest, permet de lier avec le hook useState et de changer la donnée dans le dom (une direction) et dans le useState (dans l'autre)
  // autrement, on delete les tacks dans le DOM et au refresh, ils réapparaissent
  useEffect(() => {
    const getProducts = async () => {
      const productFromServer = await fetchProducts()
      setProducts(productFromServer)
    }
    getProducts()
  }, [])

  // fetch et retourne json (SELECT *)
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  }

  // fetch et retourne json(SELECT * WHERE ID=)
  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()
    return data
  }

  // récupère info du rest, permet de lier avec le hook useState et de changer la donnée dans le dom (une direction) et dans le useState (dans l'autre)
  // autrement, on delete les tacks dans le DOM et au refresh, ils réapparaissent
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const productFromServer = await fetchProducts()
  //     setProducts(productFromServer)
  //   }
  //   getProducts()
  // }, [])

  // // fetch et retourne json (SELECT *)
  // const fetchProducts = async () => {
  //   const res = await fetch('http://localhost:5000/products')
  //   const data = await res.json()
  //   return data
  // }

  // // fetch et retourne json(SELECT * WHERE ID=)
  // const fetchProduct = async (id) => {
  //   const res = await fetch(`http://localhost:5000/products/${id}`)
  //   const data = await res.json()
  //   return data
  // }

  // SSH(certificat) -> HTTPS (encrypte la data qu'on transfère) vs HTTP
  // Delete Product
  const deleteProduct = async (id) => {
    // NIVEAU JSON, rest, delete where id is {id}
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE'
    })
    //NIVEAU DOM: retourne un tableau de tous les products qui ne sont pas égales à l'id
    setProducts(products.filter((product) => product.id !== id))
  }

  // Update
  const toggleSale = async (id) => {
    const productToToggle = await fetchProduct(id)
    const updProduct = { ...productToToggle, sale: !productToToggle.sale }
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(updProduct)
    })
    const data = await res.json()
    // si id est le même, utilise la spread syntax (qui récupère et reproduit toutes les prop de product) pour inverser la valeur de la prop sale, sinon, reste pareil (:product)
    setProducts(products.map((product) => product.id === id ? { ...product, sale: !data.sale } : product))
  }

  // Insert - Add Product
  const addProduct = async (product) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(product)
    })
    const newProduct = await res.json()
    // console.log(product)
    // avant l'utilisation de db.json
    // const id = Math.floor(Math.random() * 1000)
    // const newProduct = { id, ...product }
    setProducts([...products, newProduct])
  }

  // Edit Product -->ne fonctionne pas, ajoute seulement un produit plutôt que faire son remplacement
  const editProduct = (product, id) => {
    const editedProduct = { id, ...product}
    setProducts([...products, editedProduct])
  }

  // Toggle Form
  const [showAddProduct, setShowAddProduct] = useState(false)

  // Toggle Edit
  const [showEditProduct, setShowEditProduct] = useState(false)

  return (
    <BrowserRouter>
      <div className="container">

        <Header showAdd={showAddProduct} onAdd={() => setShowAddProduct(!showAddProduct)} />
        {showAddProduct && <AddProduct onAdd={addProduct} />}
        {/* récupère la valeur passée de SingleProduct > ManyProducts > App, deleteProduct correspond à l'id */}

        {products.length > 0 ? (
          <Routes>
            <Route path='/' element={
              <ManyProducts products={products}
                onDeleteMany={deleteProduct}
                onToggleMany={toggleSale}
                onEditToggle={() => setShowEditProduct(!showEditProduct)}
              />}>
            </Route>
          </Routes>
        ) : ('No products')}
        {showEditProduct && <EditProduct onEdit={editProduct}/>}

        <Routes>
          <Route path='/about' element={<About />}></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>

  );
}


export default App;
