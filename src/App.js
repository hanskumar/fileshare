import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Form from './Components/FileSharForm/Form';
import Layout from './Components/Layout'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import FileDetails from './Pages/FileDetails';
import Setting from './Pages/Setting';
//import toast, { Toaster } from 'react-hot-toast';
import PrivateRoute from './Components/Routes/PrivateRoute';
import { useLoginRefresh } from './Hooks/useLoginRefresh'
import  Loader  from './Components/Loader'
import FileInput from './Pages/FileInput'

function App() {

  // call refresh endpoint
  const { loading } = useLoginRefresh();

  return loading ? (
      <Loader/> ) : (
    
      <Router>
            {/* <Toaster
              position="top-right"
              reverseOrder={false}
            /> */}
         <Switch>
  
          <Route exact path="/">
              <Layout><Form /> </Layout>
          </Route>

          <Route exact path="/login">
                <Layout><Login /> </Layout>
          </Route>

          <Route exact path="/register">
                <Layout><Register /> </Layout>
          </Route>

          <PrivateRoute  path="/dashboard">
                <Dashboard /> 
          </PrivateRoute>

          <PrivateRoute  path="/settings">
                <Setting /> 
          </PrivateRoute>

          <PrivateRoute path="/file-details">
              <FileDetails /> 
          </PrivateRoute>

          <Route path="/test">
              <FileInput /> 
          </Route>

        </Switch>
       </Router>
  );
}

export default App;
