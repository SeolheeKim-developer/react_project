import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import TextBoxOnChangeEventHandler from "./components/TextBoxOnChangeEventHandler";
import TodoListInMemory from "./components/TodoListInMemory";
import FetchApiPractice from "./components/FetchApiPractice";//Note that there is no need for curly braces when importing the default export.

const AppRoutes = [
  {
    index: true,
    element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/TodoListInMemory',
        element: <TodoListInMemory />
    },
    {
        path: '/FetchApiPractice',
        element: <FetchApiPractice />
    },
    {
        path: '/TextBoxOnChangeEventHandler',
        element: <TextBoxOnChangeEventHandler />
    },
  {
    path: '/contact',
    element: <Contact />
  }
];

export default AppRoutes;
