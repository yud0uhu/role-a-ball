import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import Unity, { MoveRightButton } from "react-unity-webgl";

//const MoveRightButton = new MoveRightButton({
    // <button
    //     type="button"
    //     onClick={(): void => {
    //         unityContent.send("Ball", MoveRight, 1);
    //     }}
    //   >
    //     右へ
    //   </button>
//     );
    
//    const App = () => {
//      return <Unity unityContext={unityContext} />;
//    };
    
  
//  export default Header;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
