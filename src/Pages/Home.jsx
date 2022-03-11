import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import { useLocation, useNavigate } from 'react-router-dom';

import Search from '../components/Search';

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())),
    );
    navigate(`${pathname}?search=${str}`);
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.toLowerCase().split('=')[1].toLocaleLowerCase()),
            )
          : data.categories,
      );
    });
  }, [search]);
  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
    </>
  );
}
