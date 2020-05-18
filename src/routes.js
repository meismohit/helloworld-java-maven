
import Home from "./views/Home.jsx";
import Chatbot from "./views/Chatbot.jsx";
import GSR from "./views/GSR.jsx";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-graph",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/chat",
    name: "FLE bot",
    icon: "pe-7s-graph",
    component: Chatbot,
    layout: "/admin"
  },

  {
    path: "/GSR",
    name: "GSR References",
    icon: "pe-7s-graph",
    component: GSR,
    layout: "/admin"
  }
];

export default dashboardRoutes;
