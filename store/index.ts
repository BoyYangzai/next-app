import { createContext, useContext } from "react";
import Global from "./global";

class Store {
  global = new Global();
}

const StoreInstance = new Store(); // 创建单例
const StoreContext = createContext<Store>(StoreInstance);

const useStore = () => {
  const store = useContext(StoreContext);
  return store;
};

export { StoreContext, StoreInstance as Store, useStore };
