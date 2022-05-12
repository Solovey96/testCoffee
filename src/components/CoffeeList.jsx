import CoffeeItem from "./CoffeeItem";

const CoffeeList = ({coffee}) => {
  return ( 
    <div>
      {coffee.map((cofe) => 
            <CoffeeItem cofe={cofe} key={cofe.id}/>
          )}
    </div>
   );
}
 
export default CoffeeList;
