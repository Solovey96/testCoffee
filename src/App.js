
import { useEffect, useState } from 'react';
import CoffeeList from './components/CoffeeList';
import Header from './components/Header';
import Loader from './components/Loader';
import CoffeAPI from './components/API/CoffeAPI';
import { useFetching } from './hooks/useFetching';



function App() {
  const [coffee, setCoffee] = useState([])
  const [fetchCoffee, isLoader, coffeeError] = useFetching(async () => {
    const coffee = await CoffeAPI.getAll()
    setCoffee(coffee)
  })


  useEffect(() => {
    fetchCoffee()
  }, [])

  return (
    <div className="App">
      <Header />
      {coffee.length !== 0
        ? <CoffeeList coffee={coffee} />
        : <h2>Кофе не найдено</h2>
      }
      {coffeeError &&
        <h2>Ошибка {coffeeError}</h2>
      }
      {isLoader
        ? <Loader />
        : <CoffeeList coffee={coffee} />

      }


    </div>
  );
}

export default App;
