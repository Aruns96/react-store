

import Maincontent from "./components/Maincontent"
import ProductPage from "./components/ProductPage"
import Sidebar from "./components/Sidebar"
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"

function App() {
 

  return (
    <BrowserRouter>
    <div className="flex h-screen">
    <Sidebar />
     <div className="rounded w-full flex justify-center flex-wrap">
      <Switch>
         <Route  path="/" exact>
             <Maincontent />
         </Route>
         <Route  path="/product/:id" >
             <ProductPage />
         </Route>
      </Switch>
      </div> 
    </div>
    
    </BrowserRouter>
  )
}

export default App
