
const date = new Date();
// const date = new Date(2024, 9, 8, 17); 
const currentTime = date.getHours();

const meal = ["Noodles", "Pasta", "Porridge", "Soup", "Puddin", "Jollof"];
let list = meal;

if (currentTime > 16 && currentTime < 20) {
  list = meal; 
} else {
  list = [];
}

function ListOfMeal() {
  return (
    <ol className="center" type="a" style={{ listStyleType: "none" /*, marginLeft: "-10%" */}}>
      {list.length > 0 ? (
        list.map((meal, index) => <li key={index}>{meal}</li>)
      ) : (
        <li></li>
      )}
    </ol>
  );
}

export default ListOfMeal;
