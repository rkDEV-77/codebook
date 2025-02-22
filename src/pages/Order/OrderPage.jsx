import { useLocation } from "react-router-dom"
import { OrderFail } from "./components/OrderFail"
import { OrderSuccess } from "./components/OrderSuccess"
import { useTitle } from "../../hooks/useTitle"


export const OrderPage = () => {
    const {state} = useLocation()
    useTitle("Order Summary")
    // console.log(state.data);
    
    // const status = 'true'
  return (
    <main>
        { state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  )
}


