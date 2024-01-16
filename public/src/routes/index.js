import Home from "../pages/Home";
import Introduce from "../pages/Introduce";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/introduce", component: Introduce, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
