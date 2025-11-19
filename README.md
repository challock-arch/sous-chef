# Welcome to sous-chef!

## Overview

Sous chef was created to help at-home chefs be more organized and make cooking they're favorite recipes easy! The main focus of the project is giving users the ability to create and store recipes in the digital cookbook and provide them with step-by-step walkthroughs to easily follow recipe steps. Additionally, the application provides a planning space for users to create a queue of recipes for identifying items for a shopping list[^1].

## Technologies Used

### Front-End

- React + Vite
- TailwindCSS

### Back-End

- Spring Boot
- Project Lombok
- MySQL Workbench

## Installation Steps

To get started, **fork and clone this repository** to your local computer using the following command in your terminal:

` git clone https://github.com/challock-arch/sous-chef.git `

Install dependencies utilizing:

` npm install `

Additionally, you'll have to install tailwind. If utilizing npm:

` npm install tailwind `

Navigate to the 'front-end-application' folder and run:

`npm run dev`

to start your local server and:

`o + return`

to open in a browser. This should start the front end of the application up.

For the back-end, open your back-end application and MySQL workbench. You'll need to set up a username, password, and schema for the application. The variables for referencing your local database are set up as environmental variables in the back end applications application properties file.

To create the reference for this, create an *app.env* file in the *sous-chef* folder, and insert the information for each of the following variables:

```
DB_USER = 
DB_PASSWORD = 

DB_HOST = 
DB_PORT = 
DB_NAME = 
```

After these are added to the `app.env` folder, you should be good to start the back-end application up and the necessary table structures should be created.

## WireFrames & ERD Diagram

<img width="498" height="695" alt="Screenshot 2025-10-16 at 5 00 39 PM" src="https://github.com/user-attachments/assets/cde85fc1-df69-40a7-b4ff-ec33c40529db" />
<img width="494" height="637" alt="Screenshot 2025-10-16 at 5 00 47 PM" src="https://github.com/user-attachments/assets/b4d68ae2-9105-45b2-8dca-17b99ae06450" />
<img width="589" height="681" alt="Screenshot 2025-10-16 at 5 01 08 PM" src="https://github.com/user-attachments/assets/a77c4278-bd16-43fa-8e3f-b00db2022093" />
<img width="433" height="796" alt="Screenshot 2025-10-16 at 5 01 24 PM" src="https://github.com/user-attachments/assets/1634169f-80db-4741-aaab-ad1ab5628970" />
<img width="318" height="793" alt="Screenshot 2025-10-16 at 5 01 41 PM" src="https://github.com/user-attachments/assets/436e78fb-c560-479f-a2aa-3427eb3f7fdc" />

<img width="960" height="603" alt="Screenshot 2025-11-18 at 9 27 08 PM" src="https://github.com/user-attachments/assets/992d62a4-e65b-4b5f-8e62-515da6197916" />

## Current Unsolved Problems
1. Data isn't persistant on meal planning page.
2. Values for ingredients can only be whole numbers.
3. If Instruction is missing a step number, will not populate on instructions page.

## Future Features
1. Categories for classifying recipes
2. Categories for ingredient types
3. Seperate shopping list organized by sections at store
4. Sort and Filter methods for recipe page.
5. Adding images for recipes to improve visual cues.

[^1]: Meal Planning features do not persist beyond refreshes. This will be resolved in future iterations.
