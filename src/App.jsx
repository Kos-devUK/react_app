import { Route, Routes } from "react-router-dom";

import { Authenticator, View, Image, useTheme, Text} from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";

import HomePage from "./pages/components/HomePage";
import SiteNav from "./pages/components/SiteNav";
import ViewRecipes from './pages/components/ViewRecipes';
import Footer from "./pages/components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import { Amplify } from 'aws-amplify';
Amplify.configure(awsExports);


function App(){
  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image alt="barista logo" src="/assets/barista.png" className="baristalogo"/>
        </View>
      );
    },
  
  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; kos-dev.co.uk
        </Text>
      </View>
    );
  },
};

  return (
    

    <Authenticator loginMechanisms={['email']} components={components}>
      {({signOut, user}) =>(
    <div className="main_div">
      <SiteNav logOut={signOut} />
      <Routes>
        <Route path="*" element={<HomePage />}/>
        <Route path="/" exact={true}  element={<HomePage/>} />
        <Route path="/recipes" element={<ViewRecipes/>} />
      </Routes>
      <Footer />
    </div>
    )}
    </Authenticator>
);}

export default (App);