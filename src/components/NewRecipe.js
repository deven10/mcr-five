import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import TextField from "@mui/material/TextField";
import { ContextRecipe } from "../RecipeContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const NewRecipe = () => {
  const { newRecipe, handleChange, handleNewRecipe } =
    useContext(ContextRecipe);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add new Recipe</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Add New Recipe information:</h3>
          <div className="new-recipe-wrapper">
            <TextField
              id="standard-basic"
              label="Recipe Name"
              variant="standard"
              name="name"
              value={newRecipe.name}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Cuisine"
              variant="standard"
              name="cuisine"
              value={newRecipe.cuisine}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Image URL"
              name="recipeImg"
              value={newRecipe.recipeImg}
              onChange={(e) => handleChange(e)}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Ingredients"
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={(e) => handleChange(e)}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Instructions"
              name="instructions"
              value={newRecipe.instructions}
              onChange={(e) => handleChange(e)}
              variant="standard"
            />
          </div>
          <div className="new-recipe-buttons-wrapper">
            <Button onClick={() => handleClose()} variant="outlined">
              Discard
            </Button>
            <Button
              onClick={() => {
                handleNewRecipe();
                handleClose();
              }}
              variant="outlined"
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
