import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Addrecipe.css";
import Sidebar from "./Sidebar";
import NavBar from "./DesktopUser/NavBar";

const AddRecipe = () => {
  const [ingredients, setIngredients] = useState([{ id: 1, name: "" }]);
  const [instructions, setInstructions] = useState([{ id: 1, text: "" }]);
  const navigate = useNavigate();

  const addIngredient = () => {
    setIngredients([...ingredients, { id: Date.now(), name: "" }]);
  };

  const addInstruction = () => {
    setInstructions([...instructions, { id: Date.now(), text: "" }]);
  };

  const removeIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  const removeInstruction = (id) => {
    setInstructions(instructions.filter((instruction) => instruction.id !== id));
  };

  return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <NavBar />
        <div className="recipe-card1">
          <header className="recipe-card1-header">
            <button className="back-button" onClick={() => navigate('/chicken-recipe')} style={{ color: "red" }}>
              ← 
            </button>
            <h3 style={{ color: "red",marginLeft:'350px' }}>Create Recipe</h3>
          </header>
        </div>

        <div className="recipe-btn">
          <button className="btn-recipe">Publish</button>
          <button className="btn-recipe">Delete</button>
        </div>

        <div className="video-section">
        
              
           
          <button className="add-video"><span className="youtube-icon">
  <i className="fab fa-youtube"></i>
</span>
  <p>Add Video Recipe</p></button>
        </div>
        

        <div className="form-section">
          <p>Title</p>
          <input
            type="text"
            placeholder="Recipe Title"
            className="input-title"
          />
          <p>Description</p>
          <textarea
            placeholder="Recipe Description"
            className="input-description"
          ></textarea>
          <p>Time Recipe</p>
          <input
            type="text"
            placeholder="1 hour, 30 min..."
            className="input-title"
          />

          <div className="ingredients-section">
            <h2>Ingredients</h2>
            {ingredients.map((ingredient) => (
              <div className="ingredient-class">
              <div key={ingredient.id} className="ingredient-item">
                <strong style={{color:'red'}}>:</strong>
                <input
                  type="text"
                  placeholder="Amt"
                  className="input-title1"
                />
                <input
                  type="text"
                  placeholder="Ingredient"
                  className="input-title1"
                />
                <button
                  className="remove-button"
                  onClick={() => removeIngredient(ingredient.id)}
                >
                  🗑️
                </button>
                </div>
                <div className="ingredient-item">
                <strong style={{color:'red'}}>:</strong>
                <input
                  type="text"
                  placeholder="Amt"
                  className="input-title1"
                />
                <input
                  type="text"
                  placeholder="Ingredient..."
                  className="input-title1"
                />
                <button
                  className="remove-button"
                  onClick={() => removeIngredient(ingredient.id)}
                >
                  🗑️
                </button>
                </div>
              </div>
            ))}
            <button className="add-btn" onClick={addIngredient}>
              + Add Ingredient
            </button>
          </div>
          <div className="ingredients-section">
          
            <h2>Instructions</h2>
            {instructions.map((instruction, index) => (
              <div className="ingredient-class">
              <div key={instruction.id} className="ingredient-item">
              <strong style={{color:'red'}}>:</strong>
                <input
                  type="text"
                  placeholder={`Instruction ${index + 1}`}
                  className="input-title1"
                />
                <button
                  className="remove-button"
                  onClick={() => removeInstruction(instruction.id)}
                >
                  🗑️
                </button>
              </div>
              <div key={instruction.id} className="ingredient-item">
              <strong style={{color:'red'}}>:</strong>
                <input
                  type="text"
                  placeholder={`Instruction ${index + 1}`}
                  className="input-title1"
                />
                <button
                  className="remove-button"
                  onClick={() => removeInstruction(instruction.id)}
                >
                  🗑️
                </button>
              </div>
              <div key={instruction.id} className="ingredient-item">
              <strong style={{color:'red'}}>:</strong>
                <input
                  type="text"
                  placeholder={`Instruction ${index + 1}`}
                  className="input-title1"
                />
                <button
                  className="remove-button"
                  onClick={() => removeInstruction(instruction.id)}
                >
                  🗑️
                </button>
              </div>
              </div>
            ))}
            <button className="add-btn" onClick={addInstruction}>
              + Add Instruction
            </button>
          </div>

          
        </div>
      </main>
    </div>
  );
};

export default AddRecipe;
