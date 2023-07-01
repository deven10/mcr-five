import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextRecipe } from "./RecipeContext";

export const SingleRecipe = () => {
  const { allRecipes } = useContext(ContextRecipe);
  const { recipeId } = useParams();
  const [singleRecipe, setSingleRecipe] = useState({});

  useEffect(() => {
    setSingleRecipe(
      allRecipes?.find((recipe) => recipe.id === Number(recipeId))
    );
  }, []);

  return (
    <div className="single-recipe-page">
      <h1>{singleRecipe?.name}</h1>
      <div className="single-recipe-wrapper">
        <img src={singleRecipe?.recipeImg} alt={singleRecipe?.name} />
        <div className="single-recipe-details">
          <p>Cuisine: {singleRecipe?.cuisine}</p>
          {/* <p>
            Ingredients: {singleRecipe?.ingredients?.map((e) => e).join(" ,")}
          </p> */}
          <p>Ingredients: {singleRecipe?.ingredients}</p>
          <p>Instructions: {singleRecipe?.instructions}</p>
          {/* <p>
            Instructions:
            <ol>
              {singleRecipe?.instructions?.map((e, idx) => (
                <li key={idx}>{e}</li>
              ))}
            </ol>
          </p> */}
        </div>
      </div>
    </div>
  );
};
