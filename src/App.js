import "./App.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer.js";
import WatchPage from "./components/WatchPage.js";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children :[
    {
      path : "/",
      element : <MainContainer/>

    },
    {
      path:"/watch",
      element : <WatchPage/>
    }
  ]
}])
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
        {/**
         *
         * Header
         * body
         *  Sidebar
         *    menuitems
         *  Main Container
         *    Buttonlist
         *    Video Container
         *      Video Card
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
