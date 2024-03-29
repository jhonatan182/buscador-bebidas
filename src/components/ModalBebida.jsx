import { useState } from "react";
import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {

    const {modal , hanldeModalClick , receta} = useBebidas();

    console.log(receta)


    const mostrarIngredientes = () => {

        let ingredientes = [];

        for( let i=1 ; i< 16 ; i++) {

            if( receta[`strIngredient${i}`] ) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }

        }

        return ingredientes;

    }

    return (
        <Modal show={modal} onHide={hanldeModalClick}>
            <Image 
                src={receta.strDrinkThumb} 
                alt={'iamgen receta'}
            />

            <Modal.Header closeButton>
                <Modal.Title>{receta.strDrink}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="p-3">
                    <h2>Instrucciones</h2>
                    {receta.strInstructions}
                    <h2>Ingredientes y Cantidades</h2>
                    { mostrarIngredientes() }
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalBebida;