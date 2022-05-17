import { useState ,useEffect, createContext } from 'react';
import axios from 'axios';

const BebidasContext = createContext();



const BebidasProvider = ({children}) => {

    //state
    const [bebidas , setBebidas] = useState([]);
    const [modal , setModal] = useState(false);
    const [idBebida , setIdBebida] = useState('');
    const [receta , setReceta] = useState({})


    //effect
    useEffect(() => {

        const consultarBebida = async() => {

            if(!idBebida) return;

            try {
                
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`;

                const {data} = await axios(url);

                setReceta(data.drinks[0]);

            } catch (error) {
                console.log(error)
            }

        }

        consultarBebida()

    }, [idBebida])

    //functions

    const hanldeModalClick = () => {
        setModal(!modal)
    }


    const consultarBebida = async (datos) => {

        try {
            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

            const {data} = await axios(url);

            setBebidas(data.drinks)

        } catch (error) {
            console.log(error)
        }


    }

    

    return (

        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                modal,
                hanldeModalClick,
                setIdBebida,
                receta
            }}
        >
            { children }
        </BebidasContext.Provider>

    )


}


export {
    BebidasProvider

}

export default  BebidasContext;