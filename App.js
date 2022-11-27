import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import indexScreen from "./src/screens/indexScreen";
import showScreen from "./src/screens/showScreen";
import createScreen from "./src/screens/createScreen";
import editScreen from "./src/screens/editScreen";

const navigator = createStackNavigator(
  {
    Index: indexScreen,
    Show: showScreen,
    Create: createScreen,
    Edit: editScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
