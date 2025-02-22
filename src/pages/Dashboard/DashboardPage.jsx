import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty"
import { getUserOrders } from "../../services";
import { useTitle } from "../../hooks/useTitle";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([])

  useTitle("Dashboard")

  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  useEffect(() => {

    async function fetchOrders(){
      try {
        const data = await getUserOrders()
        setOrders(data)
      } catch (error) {
        toast.error(error.message, {
                  closeButton: true,
                  position: "bottom-center",
                  autoClose: 5000,
                });
      }
      // const response = await fetch(`http://localhost:8000/660/orders?user.id=${cbid}`, {
      //   method: "GET",
      //   headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}` }
      // })
      // const data = await response.json()

      // console.log(data);
      
    }

    fetchOrders()

  }, [])

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}