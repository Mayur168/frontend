// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { AppLayout } from "./Layout/Layout";
// import { Index } from "./pages/Index";
// import { Contact } from "./pages/Contact";
// import { Project } from "./pages/Project";
// import { ProjectIndv } from "./pages/ProjectIndv"
// import { ContectDetails } from "./pages/ContectDetails";
// import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const queryClient = new QueryClient();
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Index />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/project",
//         element: <Project />,
//       },
//         {
//         path: "/project/:id",
//         element: <ProjectIndv />,
//       },
//       {
//         path: "/contactdetails",
//         element: <ContectDetails />,
//       },
//     ],
//   },
// ]);
// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <RouterProvider router={router}></RouterProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;



import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AppLayout } from "./Layout/Layout";
import { Index } from "./pages/Index";
import { Contact } from "./pages/Contact";
import { Project } from "./pages/Project";
import { About } from "./pages/About";
import { ProjectIndv } from "./pages/ProjectIndv";
import { ContactDetails } from "./pages/ContectDetails";
import { Login } from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from "./context/AuthContext";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project/:id",
        element: <ProjectIndv />,
      },
      {
        path: "/contactdetails",
        element: (
          <ProtectedRoute>
            <ContactDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;