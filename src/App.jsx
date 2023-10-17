
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
function App() {

const loadedCoffees = useLoaderData();
const [coffees, setCoffees] = useState(loadedCoffees);  
  return (

      <div className="px-12">
      
      <h1 className="text-center text-3xl font-semibold my-8 ">Our Popular Products</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
       {
        coffees.map(coffee => <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>) 
       }
       </div>
    </div>
  )
}

export default App
