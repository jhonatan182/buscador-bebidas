import { Container } from "react-bootstrap";
import Formulario from "./Formulario";
import ListadoBebidas from './ListadoBebidas';
import ModalBebida from './ModalBebida';

const AppBebidas = () => {


    return (
      <>
        <header className="py-5" >
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">

          <Formulario />

          <ListadoBebidas />

          <ModalBebida />
        </Container>

      </>

    )
}

export default AppBebidas;