# Recipe Finder App

## Overview

The **Recipe Finder App** is a web application that allows users to search for recipes based on various filters like text query (recipe name), cuisine type, and preparation time. The app fetches recipe data from the Spoonacular API and displays relevant results on the `RecipesViewer` page.

This application is built with the following technologies:
- **Next.js 15.1.7**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Daisy UI** (adds component class names to Tailwind CSS)

---

## Features

- **Search Recipes:** Search for recipes by text query, cuisine, and preparation time.
- **Async Data Fetching:** Fetch recipe data from Spoonacular API asynchronously.
- **Responsive Design:** Fully responsive UI using Tailwind CSS.

---

## Architecture

- **Next.js Pages & Routing:**
  - The app uses dynamic routing to display a list of recipes based on the user’s search parameters.
  - Pages include `Home` (landing page) and `Recipes` (results page) and `[recipe-id]` slug for specific recipes.
  
- **Data Fetching:**
  - The app interacts with the Spoonacular API to fetch recipe data.
  - `Suspense` is used for handling async operations and loading states.

- **Styling:**
  - Tailwind CSS is used for utility-based styling.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sirdachello/recipe-finder-app.git
   cd recipe-finder-app

   ```bash
   npm install

## Running the App

   ```bash
   npm run dev

   
## Building the Application

   ```bash
   npm run build

