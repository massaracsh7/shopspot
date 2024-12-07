# ShopSpot

This project is a single-page application (SPA) built using **TypeScript**, **React**, and **Redux**. The app showcases a product listing page where users can interact with product cards by liking, deleting, and filtering them. It also includes functionality for viewing detailed product information and creating new products.

***************************

## Deploy ##

* [https://massaracsh7.github.io/shopspot/](https://massaracsh7.github.io/shopspot/)

***************************

## About the Project

### 1. Product List Page (`/products`)
- **Product Cards**:
  - Each card displays an image and basic information about the product.
  - Contains a **like icon** to toggle likes, with a visual indication of the liked state.
  - Contains a **delete icon** to remove the product from the list.
  - Contains a **edit icon** to edit the product from the list.
  
- **Filters**:
  - View all products or only products marked as favorites.
  - Additional filters for enhanced product by category.
- **Interactive Navigation**:
  - Clicking anywhere on the card (except the like or delete icons) navigates to the product detail page.

  - Allows editing existing product details through a form.
  - Supports pagination to handle large product lists.


### 2. Product Detail Page (`/products/:id`)
- **Detailed Information**:
  - Displays comprehensive details of the selected product.
- **Navigation**:
  - Includes a button to return to the main product list page.

### 3. Product Creation Page (`/create-product`)
- **Product Creation Form**:
  - Users can create a new product by filling out a form.
  - The form includes required fields with minimal validation.
  - Submitting the form saves the new product to the global store.

---

## Stack
- **React**: For building the user interface.
- **TypeScript**: For type safety and improved developer experience.
- **Redux Toolkit**: For state management.
- **SCSS Modules**: For styling components.
- **React Hook Form**: Utilized for form validation and management.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/massaracsh7/shopspot.git
   ```

2. Navigate to the project folder:
   ```bash
   cd shopspot
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application in development mode:
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

---

## Available Scripts

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build locally.
- **`npm run lint`**: Runs ESLint to check for code quality.
- **`npm run format`**: Formats the code using Prettier.

---

## API

The application uses the [Fake Store API](https://fakestoreapi.com/) to fetch initial product data. Additionally, user-created data is stored in the application's internal Redux store.

---

## Example Use Case
ShopSpot allows users to:
- Discover a curated selection of products, including fashion, electronics, and jewelry.
- Like or remove products from their favorites.
- Add new products with ease through a user-friendly form.

