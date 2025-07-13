import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Browse from "./components/Browse";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Profile from "./components/Profile";
import Navbar from "./components/shared/Navbar";
import JobDescription from "./components/JobDescription";
import PageNotFound from "./components/PageNotFound";
import ErrorBoundary from "./components/ErrorBoundry";
// import { RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ______________
// < happy coding >
//  --------------
//   \
//    \
//        (\/)
//       (_o |
//        /  |
//        \  \______
//         \        )o
//          /|----- |
//          \|     /|

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    ),
  },
  {
    path: "/login",
    element: (
      <ErrorBoundary>
        <Login />
      </ErrorBoundary>
    ),
  },
  {
    path: "/signup",
    element: (
      <ErrorBoundary>
        <Signup />
      </ErrorBoundary>
    ),
  },
  {
    path: "/jobs",
    element: (
      <ErrorBoundary>
        <Jobs />
      </ErrorBoundary>
    ),
  },
  {
    path: "/description/:id",
    element: (
      <ErrorBoundary>
        <JobDescription />
      </ErrorBoundary>
    ),
  },
  {
    path: "/browse",
    element: (
      <ErrorBoundary>
        <Browse />
      </ErrorBoundary>
    ),
  },
  {
    path: "/profile",
    element: (
      <ErrorBoundary>
        <Profile />
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: (
      <ErrorBoundary>
        <PageNotFound />
      </ErrorBoundary>
    ),
  },
]);
function App() {
  return (
    <>
     <ErrorBoundary>
      <RouterProvider router={appRouter} />
    </ErrorBoundary>
      {/* <RouterProvider router={appRouter} /> */}
    </>
  );
}

export default App;
