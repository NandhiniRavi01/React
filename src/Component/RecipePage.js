import React from 'react';
import '../css/Recipepage.css';
import Sidebar from './Sidebar';
import NavBar from './DesktopUser/NavBar';

import chickencurry from '../Assessts/chicken-curry.jpeg';
import muttoncurry from '../Assessts/mutton-curry.jpeg';
import grill from '../Assessts/grill.jpeg';
import chickenbriyani from '../Assessts/chi-briyani.jpeg';
import muttonbriyani from '../Assessts/mutt-briyani.jpeg';


const RecipePage = () => {
  const recipes = [
    { id: 1, title: 'Chicken Curry', image: './Image/chicken-curry.jpeg' }, 
    { id: 2, title: 'Grilled Chicken', image:'./Image/grill.jpeg'  },
    { id: 3, title: 'Mutton Curry', image: './Image/mutton-curry.jpeg' },
    { id: 4, title: 'Chicken Biryani', image: './Image/chi-briyani.jpeg' },
    { id: 5, title: 'Mutton Biryani', image: './Image/mutt-briyani.jpeg' },
  ];

  return (
    <div>
      <div className="container">
        <Sidebar />
        <main className="main">
          <header className="header">
            <NavBar />
          </header>

          <div className="recipe-container">
            
            
              <div className="buttons" style={{marginLeft:'730px'}}>
                <button className="export-button">Export</button>
                <button className="add-button">+ Add Recipes</button>
              </div>
            </div>
            <h2 style={{textAlign:'center',color:'red'}}>Recipe Categories</h2>

            <div className="recipe-grid">
  {recipes.map((recipe) => (
    <div
      key={recipe.id}
      className={`recipe-card ${recipe.id === 1 ? 'full-width' : ''}`}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: '100%',
          height: '200px', // Uniform height for all images
        }}
      />
      <p style={{textAlign:'center',color:'black'}}>{recipe.title}</p>
    </div>
  ))}
</div>

   
    </main>
    </div>
    </div>
  );
};

export default RecipePage;
