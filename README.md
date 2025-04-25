# Louie the Corgi Website

A responsive and interactive React SPA for Louie the Corgi, created to spread awareness about senior dog adoption and rescue.

## Description

This project converts a traditional HTML website into a modern React Single Page Application (SPA) for Louie the Corgi, a social media ambassador for senior dog adoption. The site features an engaging design with reusable components, smooth navigation, and interactive elements that showcase Louie's mission to help senior dogs find forever homes.

## Technologies Used

- React
- React Router
- JavaScript (ES6+)
- HTML5
- CSS3
- Google Fonts (Mochiy Pop One, Inter)

## Setup & Installation

1. Clone the repository or download the zip file
```
git clone https://github.com/colnies/louie-react.git
```

2. Navigate to the project directory
```
cd louie-react
```

3. Install dependencies
```
npm install
```

4. Start the development server
```
npm start
```

5. Open `http://localhost:3000` in your browser to view the website locally

## Project Structure

```
louie-react/
├── public/           # All website images     
├── src/
│   ├── components/   # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── BehindTheScenes.jsx
│   │   ├── Adopt.jsx
│   │   └── Shop.jsx
│   ├── css/
│   │   └── styles.css  # Global CSS styles
│   ├── App.jsx       # Main application component
│   └── main.jsx     # Entry point
└── package.json
```

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Features

- **Responsive Design**: Fully responsive layout for all device sizes
- **Component-Based Architecture**: Reusable header and footer components
- **Client-Side Routing**: Smooth navigation without page reloads
- **Interactive Elements**: Dynamic testimonial slider, mobile menu
- **Multiple Pages**: Home, Behind the Scenes, Adopt Don't Shop, and Store

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a Pull Request