# React Counter App with Hooks

A simple, clean counter application built with React hooks. Perfect for learning React fundamentals and state management.

## 🎯 Lab Experiment - React Hooks Counter

This project demonstrates:
- `useState` hook for state management
- Event handling in React
- Component lifecycle
- Basic props and component structure

## 📁 Files

- `Counter.jsx` - Main counter component
- `Counter.css` - Styling for the counter
- `App.jsx` - Example of how to use the component

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-counter-app.git
cd react-counter-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
react-counter-app/
├── src/
│   ├── Counter.jsx          # Counter component
│   ├── Counter.css          # Counter styles
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   └── index.js             # React entry point
├── public/
│   └── index.html           # HTML template
├── package.json             # Dependencies
├── package-lock.json
└── README.md
```

## 🎮 Features

- ➕ Increment counter
- ➖ Decrement counter
- 🔄 Reset counter to zero
- 📱 Responsive design
- ♿ Accessible (ARIA labels)

## 💻 Component API

### Counter Component

```jsx
import Counter from './Counter';

function App() {
  return <Counter />;
}
```

**Props**: None (self-contained)

**State**:
- `count` - Current counter value (number)

**Functions**:
- `increment()` - Increases count by 1
- `decrement()` - Decreases count by 1
- `reset()` - Sets count to 0

## 🧪 Learning Points

### useState Hook
```javascript
const [count, setCount] = useState(0);
```
- First argument: current state value
- Second argument: function to update state
- Initial value: 0

### Event Handling
```javascript
<button onClick={() => setCount(count + 1)}>+</button>
```
- Attach click handlers with `onClick`
- Use arrow functions or method references
- Prevent default behavior if needed

### Conditional Rendering & Display
```javascript
<p>{count}</p>
```
- JSX expressions with curly braces
- Direct variable interpolation

## 📝 Extending the App

Ideas for enhancement:
- Add increment/decrement by custom amounts
- Set min and max values
- Store count in localStorage
- Add history of count changes
- Create a custom hook for counter logic
- Add animations or transitions

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode

### `npm run build`
Builds the app for production

### `npm test`
Runs the test suite

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a React Hooks lab experiment

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

---

**Happy coding!** 🚀
