import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// import "../style/main.scss";
// import "../style/wrap.scss";
// import "../style/login.scss";
// FontAwesome
import "@fortawesome/fontawesome-pro/css/all.min.css";

import React from "react";
import * as ReactDOM from "react-dom/client";

// import Login from "./Login";

console.log(`

  /$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$$$ /$$$$$$ /$$    /$$ /$$$$$$  /$$$$$$  /$$$$$$  /$$$$$$  /$$   /$$       /$$$$$$ /$$$$$$$$
 /$$__  $$ /$$__  $$| $$__  $$|__  $$__/|_  $$_/| $$   | $$|_  $$_/ /$$__  $$|_  $$_/ /$$__  $$| $$$ | $$      |_  $$_/|__  $$__/
| $$  \\__/| $$  \\ $$| $$  \\ $$   | $$     | $$  | $$   | $$  | $$  | $$  \\__/  | $$  | $$  \\ $$| $$$$| $$        | $$     | $$   
| $$      | $$$$$$$$| $$$$$$$/   | $$     | $$  |  $$ / $$/  | $$  |  $$$$$$   | $$  | $$  | $$| $$ $$ $$ /$$$$$$| $$     | $$   
| $$      | $$__  $$| $$____/    | $$     | $$   \\  $$ $$/   | $$   \\____  $$  | $$  | $$  | $$| $$  $$$$|______/| $$     | $$   
| $$    $$| $$  | $$| $$         | $$     | $$    \\  $$$/    | $$   /$$  \\ $$  | $$  | $$  | $$| $$\\  $$$        | $$     | $$   
|  $$$$$$/| $$  | $$| $$         | $$    /$$$$$$   \\  $/    /$$$$$$|  $$$$$$/ /$$$$$$|  $$$$$$/| $$ \\  $$       /$$$$$$   | $$   
 \\______/ |__/  |__/|__/         |__/   |______/    \\_/    |______/ \\______/ |______/ \\______/ |__/  \\__/      |______/   |__/   

`);

console.log(`

  /$$$$$$  /$$   /$$ /$$      /$$ /$$$$$$ /$$   /$$
 /$$__  $$| $$  | $$| $$$    /$$$|_  $$_/| $$$ | $$
| $$  \\__/| $$  | $$| $$$$  /$$$$  | $$  | $$$$| $$
|  $$$$$$ | $$  | $$| $$ $$/$$ $$  | $$  | $$ $$ $$
 \\____  $$| $$  | $$| $$  $$$| $$  | $$  | $$  $$$$
 /$$  \\ $$| $$  | $$| $$\\  $ | $$  | $$  | $$\\  $$$
|  $$$$$$/|  $$$$$$/| $$ \\/  | $$ /$$$$$$| $$ \\  $$
 \\______/  \\______/ |__/     |__/|______/|__/  \\__/

`)

console.log(`

  /$$$$$$  /$$     /$$ /$$$$$$$$  /$$$$$$  /$$   /$$  /$$$$$$ 
 /$$__  $$|  $$   /$$/| $$_____/ /$$__  $$| $$$ | $$ /$$__  $$
| $$  \\ $$ \\  $$ /$$/ | $$      | $$  \\ $$| $$$$| $$| $$  \\__/
| $$$$$$$$  \\  $$$$/  | $$$$$   | $$  | $$| $$ $$ $$| $$ /$$$$
| $$__  $$   \\  $$/   | $$__/   | $$  | $$| $$  $$$$| $$|_  $$
| $$  | $$    | $$    | $$      | $$  | $$| $$\\  $$$| $$  \\ $$
| $$  | $$    | $$    | $$$$$$$$|  $$$$$$/| $$ \\  $$|  $$$$$$/
|__/  |__/    |__/    |________/ \\______/ |__/  \\__/ \\______/ 

`)

const root = ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement);
root.render(
	// <Login />
	<p>{`하이하이?`}</p>
);