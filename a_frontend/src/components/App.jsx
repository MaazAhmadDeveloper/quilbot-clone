import React, {useContext} from "react";
import MainComponent from "./MainComponent/MainComponent";
import DataContext from "../context/DataByContext"
import { GoogleOAuthProvider } from '@react-oauth/google';



const App = () => {

    const clientId = "1031795808060-b7nc1650v94gqicnq0s76jt848s62a2s.apps.googleusercontent.com";

    return <div>
        <GoogleOAuthProvider clientId={clientId}>
            <DataContext> 
                <MainComponent />
            </DataContext>
        </GoogleOAuthProvider>;
    </div>
}

export default App;