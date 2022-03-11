import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

export default function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { idMeal } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(idMeal).then((data) => setRecipe(data.meals[0]));
  }, [idMeal]);
  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Назад
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Категория: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Метоположение: {recipe.strArea}</h6> : null}
          <p>Рецепт: {recipe.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ингредиент</th>
                <th>Количество</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('strIngredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className="row">
              <h5>Видео рецепта:</h5>
              <iframe
                title={idMeal}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
