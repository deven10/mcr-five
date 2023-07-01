import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Searchbar } from "./components/Searchbar";
import { NewRecipe } from "./components/NewRecipe";
import { ContextRecipe } from "./RecipeContext";

export const Homepage = () => {
  const { allRecipes, handleDelete } = useContext(ContextRecipe);
  const [recipesLocalStorage, setRecipesLocalStorage] = useState([]);

  useEffect(() => {
    console.log(
      "getting allRecipes: ",
      JSON.parse(localStorage.getItem("allRecipes")),
      "allRecipes: ",
      allRecipes
    );
    setRecipesLocalStorage(JSON.parse(localStorage.getItem("allRecipes")));
  }, [allRecipes]);

  return (
    <div>
      <Searchbar />
      <NewRecipe />
      <h3>All Recipes:</h3>
      <div className="all-recipes-wrapper">
        {recipesLocalStorage.map((recipe) => {
          return (
            <Card key={recipe.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt={recipe.name}
                height="140"
                image={recipe.recipeImg}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cuisine Type: {recipe.cuisine}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ingredients:{" "}
                  <Link to={`/recipe/${recipe.id}`}>Check ingredients</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Instructions:{" "}
                  <Link to={`/recipe/${recipe.id}`}>Check instructions</Link>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit</Button>
                <Button onClick={() => handleDelete(recipe.id)} size="small">
                  Delete
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
