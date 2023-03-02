import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { CartProvider } from "./Context/CartContext";
import { BrowserRouter } from 'react-router-dom'
import { CatalogueProvider } from './Context/CatalogueContext';
import { LoaderProvider } from './Context/LoaderContext';
import { OrdersProvider } from './Context/OrdersContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <LoaderProvider>
        <CatalogueProvider>
          <CartProvider>
            <OrdersProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </OrdersProvider>
          </CartProvider>
        </CatalogueProvider>
      </LoaderProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
