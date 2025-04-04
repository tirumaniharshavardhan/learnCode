import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products)
    useEffect(() => {

        //dispatch an action 
        dispatch(getProducts())
        //api
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProducts(result))
    }, [dispatch])

    if(products.length === 0){
        return <p>No products available at the moment.</p>
    }

    if(status === 'loading'){
        return <p>Loading...</p>
    }

    if(status === 'error'){
        return <Alert key='danger' variant="danger">Something went wrong! Try again later</Alert>
    }

    const addToCart = (product) => {
        //dispatch add an action
        dispatch(add(product))
    }

    const Cards = products.map(product => {
        return (
            <div className="col-md-3" key={product.id} style={{ marginBottom: '10px' , display: 'flex', justifyContent: 'space-around'}}>
                <Card style={{ width: '18rem' }}  className="h-100">
                    <div className="text-center">
                        <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '100px' }} />
                    </div>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            INR: {product.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    })
    return (
        <>
            <h1>Product dashboard</h1>
            <div className="row" key={products.id}>
                {Cards}
            </div>
        </>
    )
}

export default Product;