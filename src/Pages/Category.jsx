import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import Preloader from '../components/Preloader';
import MealsList from '../components/MealsList';

export default function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Назад
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
}
