# My Recipe Book

## Project Title and Description
My Recipe Book is a React Native application that allows users to explore and manage recipes with an easy-to-use interface. The app provides features like recipe categories, detailed views, and favorite recipes management.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/b63eba49-17db-4003-98d6-e84473b3c15d" width="250" alt="My Recipe Book App Demo">

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
- Responsive UI for Android.

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

## Screenshots

<table>
  <tr>
    <th>Categories Screen</th>
    <th>Category List</th>
    <th>Recipe Details</th>
    <th>Option Window</th>
    <th>Favorites Screen</th>
  </tr>
  <tr>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/f7509fc8-8cc7-4160-9fd5-51e6de750105" target="_blank">
        <img src="https://github.com/user-attachments/assets/f7509fc8-8cc7-4160-9fd5-51e6de750105" width="130" height="300" alt="Categories Screen">
      </a>
    </td>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/acdc16bc-466c-48bf-a171-c7c6ad23c9d9" target="_blank">
        <img src="https://github.com/user-attachments/assets/acdc16bc-466c-48bf-a171-c7c6ad23c9d9" width="130" height="300" alt="Recipe Details">
      </a>
    </td>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/3ebf04c3-2b84-4c67-b982-2cb7cd758563" target="_blank">
        <img src="https://github.com/user-attachments/assets/3ebf04c3-2b84-4c67-b982-2cb7cd758563" width="130" height="300" alt="Favorites Screen">
      </a>
    </td>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/b5181b85-4481-4acf-90dd-e85256035815" target="_blank">
        <img src="https://github.com/user-attachments/assets/b5181b85-4481-4acf-90dd-e85256035815" width="130" height="300" alt="Favorites Screen">
      </a>
    </td>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/127465c5-74f3-4134-8fc8-e2ead2614704" target="_blank">
        <img src="https://github.com/user-attachments/assets/127465c5-74f3-4134-8fc8-e2ead2614704" width="130" height="300" alt="Favorites Screen">
      </a>
    </td>
    
  </tr>
</table>

## Demo (for End Users)

### 1. Try the App with Expo Go or Web Preview
You have two options to try the app:

1. **Web Preview (Launch Snack)**:
   - Simply click this link: [Open in Snack](https://snack.expo.dev/@petrmichal0/my-recipe-book-v1?platform=android).
   - The page will open with the **Android** tab selected.
   - Click the **Launch Snack** button to instantly run the app in the web-based Expo Snack environment.

2. **Expo Go on Your Mobile Device**:
   - Download the [Expo Go](https://expo.dev/client) app on your mobile device.
   - Open the Snack link: [Open in Snack](https://snack.expo.dev/@petrmichal0/my-recipe-book-v1?platform=android).
   - Select the **My Device** tab.
   - Scan the QR code with the **Expo Go** app on your mobile device to launch the app on your phone.

### 2. Download the App Directly

You can also download the app's installation file directly to your device:

- [Download APK for Android](https://1drv.ms/u/s!Atg7bg8FYV5vpMlCtHrfRUr2t3Jnng?e=a33GGN)

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

## Technologies Used

[![React Native Badge](https://img.shields.io/badge/-React_Native-61DAFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DAFB)](#)
[![Expo Badge](https://img.shields.io/badge/-Expo-000020?style=for-the-badge&labelColor=black&logo=expo&logoColor=white)](#)

## Third-Party Libraries

- **React Navigation**: Provides navigation capabilities.
- **Redux Toolkit**: Manages state using a Redux store.
- **React Native Reanimated**: Enables animations and gestures.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.

