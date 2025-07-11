# EatMap Food - Restaurant Discovery Platform

A modern restaurant discovery platform built with Next.js Page Router, TypeScript, and Styled Components.

## Features

- **Modern Layout**: Clean header and footer with responsive design
- **Page Router**: Uses Next.js Page Router for navigation
- **Styled Components**: Modern styling with CSS-in-JS
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Mock Data**: Includes sample restaurant data for demonstration

## Project Structure

```
src/
├── components/
│   ├── header/
│   │   └── index.tsx          # Header component with navigation
│   ├── footer/
│   │   └── index.tsx          # Footer component with links
│   └── Layout.tsx             # Main layout wrapper
├── pages/
│   ├── _app.tsx              # App component with global styles
│   ├── index.tsx             # Home page
│   ├── about.tsx             # About page
│   ├── restaurants.tsx       # Restaurants listing page
│   └── contact.tsx           # Contact page
```

## Components Overview

### Layout System
- **Layout.tsx**: Main layout component that wraps all pages
- **Header**: Sticky navigation with logo, menu, search, and sign-in button
- **Footer**: Multi-column footer with links, social media, and contact info

### Pages
- **Home**: Hero section with features showcase
- **About**: Company information and statistics
- **Restaurants**: Restaurant listings with filters and cards
- **Contact**: Contact form with company information

## Key Features

### Header Component
- Responsive navigation menu
- Search functionality
- Mobile-friendly hamburger menu
- Sticky positioning
- Styled with styled-components

### Footer Component
- Multi-column layout
- Social media links
- Company information
- Quick links and support sections
- Copyright and legal links

### Layout Component
- Consistent page structure
- SEO-friendly with Head component
- Flexible content area
- Proper HTML semantics

## Installation & Setup

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Run the development server:**
   ```bash
   yarn dev
   ```

3. **Build for production:**
   ```bash
   yarn build
   ```

4. **Start production server:**
   ```bash
   yarn start
   ```

## Requirements

- Node.js 18.18.0 or higher
- Yarn package manager

## Technologies Used

- **Next.js**: React framework with Page Router
- **TypeScript**: Type safety and better developer experience
- **Styled Components**: CSS-in-JS styling solution
- **React**: Component-based UI library

## Navigation Structure

- `/` - Home page with hero section and features
- `/about` - About page with company information
- `/restaurants` - Restaurant listings with filters
- `/contact` - Contact form and company details

## Styling Approach

The project uses styled-components for styling with the following benefits:
- Component-scoped styles
- Dynamic styling based on props
- TypeScript support
- No CSS class name conflicts
- Theme support capability

## Mock Data

The restaurants page includes mock data to demonstrate the layout and functionality:
- Sample restaurant cards
- Filter options
- Rating systems
- Tag-based categorization

## Future Enhancements

- Database integration
- User authentication
- Real-time search
- Restaurant reviews system
- Location-based filtering
- Online reservations

## License

This project is for demonstration purposes.
