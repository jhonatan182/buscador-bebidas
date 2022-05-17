import { useState } from "react"
import { Form , Row ,Col , Button , Alert } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";

const Formulario = () => {

    //state
    const [busqueda , setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });
    

    // context
    const {categorias } =  useCategorias();
    const { consultarBebida } = useBebidas();


    const [alerta , setAlerta] = useState('')


    const handleChangeBusqueda =  e => {
        
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmitBusqueda = e => {

        e.preventDefault();


        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los datos son obligatorios')
            return;
        }

        setAlerta('');
        consultarBebida(busqueda);
    }

  return (
    <Form onSubmit={handleSubmitBusqueda}>

        {alerta && <Alert variant="danger" className="text-center"> { alerta } </Alert>}

        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="bebida">Nombre Bebida</Form.Label>
                    <Form.Control 
                        id="bebida"
                        type='text'
                        placeholder="Ejm: Tequila, Vodka, etc"
                        name='nombre'
                        value={busqueda.bebida}
                        onChange={handleChangeBusqueda}
                    />
                </Form.Group>
            </Col>

            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
                    <Form.Select
                        name="categoria"
                        id='categoria'
                        onChange={handleChangeBusqueda}
                        value={busqueda.categoria}
                    >
                        <option value='' >- Seleciona Categoria -</option>
                        { categorias.map(categoria => (
                            <option 
                                value={categoria.strCategory}
                                key={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        )) }

                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>

        <Row className="justify-content-end">
            <Col md={3} sm={12}>
                <Button 
                    variant="danger"
                    className="text-uppercase w-100 mb-4"
                    type="submit"
                >
                    Buscar Bebidas
                </Button>
            
            </Col>
        </Row>

    </Form>
  )
}

export default Formulario