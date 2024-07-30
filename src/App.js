// src/App.js
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import Store from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        index: true, // This specifies that this is the default child route for "/"
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <Head />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
