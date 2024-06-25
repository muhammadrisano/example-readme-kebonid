import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import {MenuProvider} from 'react-native-popup-menu';
import {store, persistor} from './src/public/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
// screens
import BottomNavbar from './src/screens/BottomNavbar';
import Home from './src/screens/Home';
import Wishlist from './src/screens/Wishlist';
import Cart from './src/screens/Cart';
import Profile from './src/screens/Profile';
import Sort from './src/screens/Sort';
import Filter from './src/screens/Filter';
import Product from './src/screens/Product';
import Start from './src/screens/Start';
import Login from './src/screens/Login';
import Register from './src/screens/SignUp';
import EditPhotoUser from './src/screens/EditPhotoUser';
import AddProduct from './src/screens/AddProduct';
import EditProduct from './src/screens/EditProduct';
import ProductStore from './src/screens/ProductStore';
import EditUser from './src/screens/EditUser';
import AddStoreAccount from './src/screens/AddStoreAccount';
import Splash from './src/screens/Splash';
import RequestForgotPassword from './src/screens/RequestForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import Transaction from './src/screens/Transaction';
import Invoice from './src/screens/Invoice';
import EditStore from './src/screens/EditStore';
import EditPhotoStore from './src/screens/EditPhotoStore';
import GoToLogin from './src/screens/GoToLogin';
import AddCart from './src/screens/AddCart';
const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Start: {
      screen: Start,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    RequestForgotPassword: {
      screen: RequestForgotPassword,
    },
    ResetPassword: {
      screen: ResetPassword,
    },
    Invoice: {
      screen: Invoice,
    },
    Transaction: {
      screen: Transaction,
    },
    EditUser: {
      screen: EditUser,
    },
    EditPhotoUser: {
      screen: EditPhotoUser,
    },
    AddStoreAccount: {
      screen: AddStoreAccount,
    },
    EditPhotoStore: {
      screen: EditPhotoStore,
    },
    EditStore: {
      screen: EditStore,
    },
    BottomNavbar: {
      screen: BottomNavbar,
    },
    Home: {
      screen: Home,
    },
    Wishlist: {
      screen: Wishlist,
    },
    Cart: {
      screen: Cart,
    },
    Profile: {
      screen: Profile,
    },
    Sort: {
      screen: Sort,
    },
    Filter: {
      screen: Filter,
    },
    Product: {
      screen: Product,
    },
    AddProduct: {
      screen: AddProduct,
    },
    EditProduct: {
      screen: EditProduct,
    },
    ProductStore: {
      screen: ProductStore,
    },
    GoToLogin: {
      screen: GoToLogin,
    },
    AddCart: {
      screen: AddCart,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

// wrap all component with redux Provider and the store
export default class App extends Component {
  render() {
    return (
      <MenuProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      </MenuProvider>
    );
  }
}
