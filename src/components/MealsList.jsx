import Meal from './Meal';

export default function MealsList(props) {
  const { meals } = props;
  return (
    <div className="list">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}
