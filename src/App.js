import { withAuthenticator, Button, Heading,} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import applogo from "./pages/assets/barista.png";
import Recipes from "./pages/components/Recipes";
import Footer from "./pages/components/Footer";
import "./App.css"

function App({signOut}){
  return (
    <>
      <Button onClick={signOut} className="signoutbutton"> Sign Out</Button>
        <img src={applogo} alt="applogo" className="baristalogo"/>
        <Heading level={1}>Welcome barista. <br></br> You can add all your recipes here.</Heading>
      <Recipes/>
      <Footer/>
    </>
  );}

export default withAuthenticator(App);