import { useState } from "react";
import { Alert, Button, Container, Form, Row ,Col} from "react-bootstrap";
import { saveProduct } from "../services/ProductService";


export function AddProduct() {
    const [formData, setFormData] = useState({});
    const [isInserted, setIsInserted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value });

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await saveProduct(formData)
        console.log(response.data)
        if (response.status == 201) {
            setIsInserted(true)
            setTimeout(() => {
                setIsInserted(false);
            }, 2000);
        }
    }

    return (
        <>
            <Container className="mt-5 text center">
                <Alert>Add a new product</Alert>
            </Container>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" name='pId' placeholder="enter id" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='pName' placeholder="enter name" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name='pPrice' placeholder="enter price" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                {/* <Form.Label>Quantity</Form.Label> */}
                                {/* <Form.Control type="text" name='pQty' placeholder="enter avalible quantity" onChange={handleChange}/> */}
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name='pDescription' placeholder="enter description" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button type="submit" variant="success">Add Product</Button>
                </Form>
            </Container>
            {
                isInserted ? 
                <Container className="mt-5">
                    <Row>
                        <Col lg={4}>
                            <Alert variant="success">Product added successfully...! </Alert>
                        </Col>
                    </Row>
                </Container>:null
            }
        </>
    );
}