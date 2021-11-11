import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListProducts from "./hooks/ListProducts";


export default function App() {

  return (
    <Container className="container" >
      <ListProducts/>
    </Container>
  )
}