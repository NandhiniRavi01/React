import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Chickenrecipe.css";
import NavBar from "./DesktopUser/NavBar";
import Sidebar from "./Sidebar";
import "@fortawesome/fontawesome-free/css/all.css";

const ChickenRecipe = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev); // Toggle the favorite state
  };

  const handleImageClick = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const recipe = {
    title: "Chicken Curry",
    image: "./Image/youtube.png",
    videoId: "YOUR_YOUTUBE_VIDEO_ID",
    time: "30 min",
    rating: 5,
    views: 28,
    description:
      `Chicken curry is a classic dish that’s popular for its rich, flavorful
            sauce and tender chicken. Here’s a step-by-step guide to help you prepare
            a delicious chicken curry at home.`,
            footer:`Enjoy your flavorful home made chicken curry!`,
    ingredients: {
      marination: [
        "500 grams of chicken (bone-in or boneless, cut into pieces)",
        "1 tablespoon ginger-garlic paste",
        "½ teaspoon turmeric powder",
        "1 teaspoon red chili powder",
        "Salt to taste",
        "1 tablespoon lemon juice or yogurt (optional)",
      ],
      curry: [
        "2 tablespoons oil (vegetable, sunflower, or mustard oil)",
        "1 large onion, finely chopped",
        "2 medium tomatoes, chopped or blended into a puree",
        "1 tablespoon ginger-garlic paste",
        "2 green chilies (optional, for extra heat)",
        "1 teaspoon cumin seeds",
        "1-2 bay leaves",
        "1-2 cardamom pods",
        "1 small cinnamon stick",
        "4-5 black peppercorns (optional)",
        "1 teaspoon turmeric powder",
        "1½ teaspoons red chili powder (adjust to taste)",
        "2 teaspoons coriander powder",
        "1 teaspoon cumin powder",
        "1 teaspoon garam masala powder",
        "1 teaspoon kasuri methi (dried fenugreek leaves)",
        "Salt to taste",
        "1 cup water (for desired consistency)",
        "Fresh cilantro (coriander) leaves for garnish",
      ],
    },
    stepsTitle: "7 Easy Steps",
    steps: [
      {
        title: "Marinate the Chicken:",
        description:
          "Combine the chicken pieces with ginger-garlic paste, turmeric powder, red chili powder, salt, and lemon juice. Marinate for 30 minutes.",
      },
      {
        title: "Prepare the Curry Base:",
        description:
          "Heat oil, sauté spices, add onions, and cook until golden brown. Add tomatoes and other ingredients.",
      },
      {
        title: "Cook Chicken:",
        description: "Add marinated chicken to the curry base and cook thoroughly.",
      },
      {
        title: "Simmer and Season:",
        description:
          "Add water and simmer. Adjust seasonings and let flavors blend.",
      },
    ],
    tips:[{
      title:"For richer flavor",
      description:"You can add 2-3 tablespoons of cream or yogurt toward the end of Cooking.",
    },{
      title:"For a Thickker curry",
      description:"Reduce the amount of water and the curry simmer for longer, or add a tablespoon of ground cashews or aimonds"
    }
    ],

  };

  // Separate even and odd steps
  const evenSteps = recipe.steps.filter((_, index) => index % 2 === 0);
  const oddSteps = recipe.steps.filter((_, index) => index % 2 !== 0);

  return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <header className="header">
          <NavBar />
        </header>

        <div className="recipe-card">
          <header className="recipe-card-header">
            <button className="back-button" onClick={() => navigate('/recipe')}>
              ←
            </button>
            <h2 style={{ color: "red" }}>{recipe.title}</h2>
            <div className="header-icons">
              <button
                className="icon"
                onClick={toggleFavorite}
                style={{
                  color: "red",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px",
                  cursor: "pointer",
                }}
                aria-label="Save to favorites"
              >
                ❤
              </button>
              <button
                className="icon"
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
                aria-label="Share link"
              >
                <i className="fas fa-share-alt"></i>
              </button>
            </div>
          </header>

          <div className="recipe-image" onClick={handleImageClick}>
            <img src={recipe.image} alt={recipe.title} />
            <div className="play-overlay">
              <span className="play-icon">▶</span>
            </div>
          </div>

          {showVideo && (
            <div className="video-modal">
              <div className="video-container">
                <button className="close-button" onClick={closeVideo}>
                  ✖
                </button>
                <iframe
                  width="100%"
                  height="400px"
                  src={`https://www.youtube.com/embed/${recipe.videoId}`}
                  title={recipe.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <div className="recipe-details">
            <h2 style={{fontSize:'20px',color:'white',marginLeft:'20px'}}>{recipe.title}</h2>
            <div className="card-footer">
        <span className="icon">⭐ 5</span>
        <span className="icon">💬 28</span>
      </div>
      </div>
            <div className="card-content">
       
        <div className="card-details">
          <div className="card-time">
          <p style={{color:'#e85d65'}}>Details</p>
          <p >⏱️ 30 min</p>
          </div>
          <p className="details-description">{recipe.description}
          </p>
        </div>
      </div>
            <div className="recipe-ingredients">
              <h3>Ingredients</h3>
              <h4>For marination:</h4>
              <ul>
                {recipe.ingredients.marination.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h4>For the curry:</h4>
              <ul>
                {recipe.ingredients.curry.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="recipe-steps">
  <h3>{recipe.stepsTitle}</h3>
  <div className="recipe-steps-container">
    {recipe.steps.map((step, index) => {
      const stepNumber = index + 1; // Start index from 1
      return (
      <div
        key={index}
        className={`recipe-step-box ${index % 2 === 0 ? "even" : "odd"}`}
      >
       
        <b>{stepNumber}. {step.title}</b>
        <li className="recipe-step">
        <p>{step.description}</p>
        </li>
       
      </div>
    )})}
  </div>
  <h3>Tips</h3>
  <div className="tips-container" style={{ backgroundColor: "pink", borderRadius: "8px" ,padding: '15px'}}>
  
  {recipe.tips.map((tip, index) => (
    <p key={index}>
      <b>{tip.title}</b>: {tip.description}
    </p>
  ))}
</div>
<p style={{textAlign:'center',color:'black'}}>{recipe.footer}</p>



 </div>
 </main>
        </div>
      
    
  );
};

export default ChickenRecipe;
