import { withAuthenticator, Button, Heading, View, Card } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({signOut}){
  return (
    <View className="App">
      <Card>
        <Heading level={1}>Welcome barista. <br></br> You can add all your recipes here.</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );}

export default withAuthenticator(App);