# My Recipe Book

## Project Title and Description
My Recipe Book is a React Native application that allows users to explore and manage recipes with an easy-to-use interface. The app provides features like recipe categories, detailed views, and favorite recipes management.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/590b7692-f9f0-4392-be4b-18aa8eefd2f6" width="250" alt="My Recipe Book App Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation (for Development)](#installation-for-development)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo (for End Users)](#demo-for-end-users)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- View and explore various recipe categories.
- Detailed recipe views with ingredients and preparation steps.
- Mark recipes as favorites and access them easily.
- Smooth transitions and animations throughout the app.
- Responsive UI for both Android and iOS.

## Installation (for Development)

> **Note:** This section is intended for developers who want to run the app locally on their development environment (e.g., Visual Studio Code).

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v8.x or higher
- **Expo CLI**: v6.x

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/my-recipe-book.git
    ```

2. Navigate to the project directory:
    ```bash
    cd my-recipe-book
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### 1. Starting the Development Server
To start the development server, run:
```bash
npm start
```

### 2. Running the App on a Device

To run the app on a simulator or physical device:

- For Android:
    ```bash
    npm run android
    ```

- For iOS:
    ```bash
    npm run ios
    ```

## Screenshots

<table>
  <tr>
    <th>Categories Screen</th>
    <th>Recipe Details</th>
    <th>Favorites Screen</th>
  </tr>
  <tr>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/646112af-a883-4ac8-9756-2c6049e56ddc" target="_blank">
        <img src="https://github.com/user-attachments/assets/646112af-a883-4ac8-9756-2c6049e56ddc" width="130" height="300" alt="Categories Screen">
      </a>
    </td>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/866db1f7-3285-42e1-b282-1390e822759c" target="_blank">
        <img src="https://github.com/user-attachments/assets/866db1f7-3285-42e1-b282-1390e822759c" width="130" height="300" alt="Recipe Details">
      </a>
    </td>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/018125fb-0fa4-413d-86a4-c1cb108edd43" target="_blank">
        <img src="https://github.com/user-attachments/assets/018125fb-0fa4-413d-86a4-c1cb108edd43" width="130" height="300" alt="Favorites Screen">
      </a>
    </td>
  </tr>
</table>

## Demo (for End Users)

### 1. Try the App with Expo Go

The easiest way to try the app is by using **Expo Go**. Simply download the [Expo Go](https://expo.dev/client) app on your mobile device and scan the QR code below to launch the app:

<img src="https://github.com/user-attachments/assets/8236b2c1-abfa-4462-a00c-c1f4adb40948" alt="QR Code for Expo" width="200">

Alternatively, you can open the app directly in Snack using this link: [Open in Snack](https://snack.expo.dev/@petrmichal0/my-recipe-book).

### 2. Download the App Directly

You can also download the app's installation file directly to your device:

- [Download APK for Android](link-to-apk)

## Project Structure

```css
My Recipe Book/
├── assets/
│   ├── adaptive-icon.png
│   ├── icon.png
│   ├── splash.png
├── components/
│   ├── MealDetail/
│   │   ├── List.tsx
│   │   ├── Subtitle.tsx
│   ├── MealsList/
│   │   ├── MealItem.tsx
│   │   ├── MealList.tsx
│   │   ├── CategoryGridTile.tsx
│   │   ├── IconButton.tsx
│   ├── MealDetails.tsx
├── data/
│   ├── dummy-data.js
├── screens/
│   ├── CategoriesScreen.tsx
│   ├── FavoritesScreen.tsx
│   ├── MealDetailScreen.tsx
│   ├── MealsOverViewScreen.tsx
├── store/
│   ├── context/
│   │   ├── favorites-context.tsx
│   ├── redux/
│   │   ├── favorites.ts
│   │   ├── store.ts
├── styles/
│   ├── sharedStyles.js
├── App.tsx
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
├── tsconfig.json
└── .gitignore
```
