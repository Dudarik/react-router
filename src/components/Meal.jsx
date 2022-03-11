import { Link } from 'react-router-dom';

export default function Meal(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt="strCategory" />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
        <div className="card-action">
          <Link to={`/meal/${idMeal}`} className="btn">
            Открыть рецепт
          </Link>
        </div>
      </div>
    </div>
  );
}
