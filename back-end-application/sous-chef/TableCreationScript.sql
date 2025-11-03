START TRANSACTION;

-- Drop any tables that may already exist
DROP TABLE IF EXISTS Recipes, Ingredients, Instructions, Users;

-- Create 'Users' Table & Columns
CREATE TABLE Users (
	id int,
    user_name varchar(45),
    email varchar(100)
);

-- Create 'Recipe' Table & Columns
CREATE TABLE Recipes (
	id int NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
    recipe_name varchar(100),
    calories int,
    servings int,
    prep_time int,
    cook_time int
-- 	user_id int,
-- 	FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Create 'Ingredients' Table & Columns
CREATE TABLE Ingredients (
	ingredients_id int NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
    recipe_id int,
    quantity int,
    unit_of_measure varchar(45),
    ingredient_name varchar(45),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id)
);

-- Create 'Instructions' Table & Columns
CREATE TABLE Instructions (
	instructions_id int NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
    recipe_id int,
    step_number int,
    step_text varchar(255),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(id)
);

ROLLBACK
-- COMMIT