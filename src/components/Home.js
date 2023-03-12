import { Alert, Container } from "react-bootstrap";

export function Home(){
    return(
        <>
            <Container className="mt-5 text-center">
                <Alert>Welcome to product app</Alert>
                <p> In this app, you can perform CURD operations on product</p>
            </Container>
        </>
    )
}