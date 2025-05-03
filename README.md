# Cyna - Cybersecurity Solutions Mobile App

This is a React Native mobile app for Cyna, a cybersecurity solutions provider. The app has been built using Expo and React Native, transformed from a Next.js web application.

## Features

- **Home Screen**: Showcasing cybersecurity services with animated typewriter effect and featured solutions
- **Services Screen**: Displaying the complete range of cybersecurity services offered
- **Contact Screen**: Providing options to get in touch with different departments
- **Account Screen**: User profile management and settings

## Technology Stack

- React Native with Expo
- TypeScript
- React Navigation
- i18next for internationalization
- Custom UI components

## Getting Started

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Start the app

   ```bash
   pnpm start
   ```

   This will open the Expo development server, allowing you to run the app on:

   - iOS Simulator
   - Android Emulator
   - Physical device using Expo Go app
   - Web browser

## Key Components

The app includes several custom components:

- **Button**: A flexible button component with multiple variants
- **Typewriter**: An animated text component for engaging content
- **GlowingEffect**: A touchable glowing effect for interactive elements
- **ThemeProvider**: Dark and light mode support

## Internationalization

The app supports multiple languages (English and French) using i18next. Language is detected automatically based on device settings.

## Architecture

- **/app**: Main application screens and routing using Expo Router
- **/components**: Reusable UI components
- **/constants**: Theme colors and other constants
- **/lib**: Utilities like internationalization
- **/assets**: Fonts, images, and other static assets

## Transformation from Web to Mobile

This app was transformed from a Next.js web application to preserve:

- Design language and branding
- Content structure
- Key features
- Internationalization support

While adapting for mobile-specific interactions and optimizations.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
