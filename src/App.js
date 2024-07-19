import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Johannesburg" />

        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/salome-mosikare-b558b724b/"
            target="_blank"
            rel="noreferrer"
          >
            Salome Mosikare
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SMosikare/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-smosikare.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
