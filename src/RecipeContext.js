import React, { createContext, useState, useEffect } from "react";
import { initialData } from "./initialData";

export const ContextRecipe = createContext();

export const RecipeContext = ({ children }) => {
  const [allRecipes, setAllRecipes] = useState(initialData);

  if (!localStorage.getItem("allRecipes")) {
    localStorage.setItem("allRecipes", JSON.stringify(allRecipes));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [newRecipe, setNewRecipe] = useState({
    id: getRandomInt(10000000),
    name: "",
    cuisine: "",
    recipeImg: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setNewRecipe({
      id: getRandomInt(10000000),
      name: "",
      cuisine: "",
      recipeImg: "",
      ingredients: "",
      instructions: "",
    });
  };

  const handleDelete = (recipeID) => {
    const temp = allRecipes.filter((recipe) => recipe.id !== recipeID);
    localStorage.setItem("allRecipes", JSON.stringify(temp));
    setAllRecipes(temp);
  };

  const handleNewRecipe = () => {
    if (
      newRecipe.name === "" ||
      newRecipe.cuisine === "" ||
      newRecipe.recipeImg === "" ||
      newRecipe.ingredients === "" ||
      newRecipe.instructions === ""
    ) {
      alert("Please fill all fields!");
    } else {
      const getRecipes = JSON.parse(localStorage.getItem("allRecipes"));
      getRecipes.push(newRecipe);
      localStorage.setItem("allRecipes", JSON.stringify(getRecipes));
      setAllRecipes((prev) => [...prev, newRecipe]);
      handleClear();
    }
  };

  return (
    <ContextRecipe.Provider
      value={{
        name: "deven",
        allRecipes,
        newRecipe,
        handleChange,
        handleNewRecipe,
        handleDelete,
      }}
    >
      {children}
    </ContextRecipe.Provider>
  );
};
