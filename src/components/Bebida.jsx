import { Col , Card , Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
import ModalBebida from "./ModalBebida";

const Bebida = ({bebida}) => {

    const {modal , hanldeModalClick , setIdBebida} = useBebidas();


    return (
        <Col md={2} lg={4}>
            <Card className="mb-4">
                <Card.Img 
                    variant="top"
                    src={bebida.strDrinkThumb}
                    alt={`bebida de ${bebida.strDrink}`}
                />

                <Card.Body className="text-center">
                    <Card.Title>{bebida.strDrink}</Card.Title>

                    <Button
                        className="w-100 text-uppercase mt-2"
                        variant="warning"
                        onClick={ () => {
                            hanldeModalClick()
                            setIdBebida(bebida.idDrink)
                        }}

                    >
                        Ver Receta
                    </Button>
                </Card.Body>
            </Card>



        </Col>
    )
}

export default Bebida;