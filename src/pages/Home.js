import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <div>
      <main>
        <SearchForm />
        <CocktailList />
      </main>
    </div>
  );
};

export default Home;
