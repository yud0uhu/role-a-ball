import React from "react";
import Header from "./Header.js";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  // UnityLoaderとjsonを読み込ませる
  loaderUrl: "Build/build.loader.js",
  dataUrl: "Build/build.data",
  frameworkUrl: "Build/build.framework.js",
  codeUrl: "Build/build.wasm",
});

unityContext.on("debug", (message) => {
  console.log(message);
});

function MoverightButton() {
  return (
    <button
      type="button"
      onClick={() => {
        console.log("右へ");
        unityContext.send("Sphere", "MoveRight", 1);
      }}
    >
      右へ
    </button>
  );
}
function MoveleftButton() {
  return (
    <button
      type="button"
      onClick={() => {
        console.log("左へ");
        unityContext.send("Sphere", "MoveLeft", -1);
      }}
    >
      左へ
    </button>
  );
}

const App = () => {
  return (
    <div>
      <Header />
      <MoverightButton />
      <MoveleftButton />
      <br />
      <Unity
        unityContext={unityContext}
        style={{
          height: "100%",
          width: 950,
          border: "2px solid black",
          background: "grey",
        }}
      />
    </div>
  );
};

export default App;
