import { BebidasProvider } from "./context/BebidasProvider";
import { CategoriasProvider } from "./context/CategoriasProvider";
import AppBebidas from "./components/AppBebidas";


function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <AppBebidas />
      </BebidasProvider>
    </CategoriasProvider>

  )
}

export default App
