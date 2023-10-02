import { withAuthenticator, Button, Heading,} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import applogo from "./pages/assets/barista.png";
import Footer from "./pages/components/Footer";
import AddRecipes from './pages/components/AddRecipes';
import "./App.css"

function App({signOut}){

  return (
    <div className="main_div">
      <Button onClick={signOut} className="signoutbutton"> Sign Out</Button>
      <img src={applogo} alt="applogo" className="baristalogo"/>
      <Heading level={1}>Welcome .. <br></br> You can keep a track of all your recipes!</Heading>
      <AddRecipes/>
      <Footer/>
    </div>
);}

export default withAuthenticator(App);