//import logo from './logo.svg';
import './App.css';
import Unity, { UnityContext } from "react-unity-webgl";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const unityContext = new UnityContext({
  // UnityLoaderとjsonを読み込ませる
//  dataUrl: buildUrl + "/build.data",
//  frameworkUrl: buildUrl + "/build.framework.js",
//  codeUrl: buildUrl + "/build.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "Roll a Ball",
  productVersion: "0.1",  
  });
  
  const App = () => {
    return <Unity unityContext={unityContext} />;
  };
  

export default App;
