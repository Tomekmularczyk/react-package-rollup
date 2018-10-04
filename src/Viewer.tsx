import { ArcRotateCamera, Engine, SceneLoader, Vector3 } from "babylonjs";
import "babylonjs-loaders";
import React from "react";

interface IProps {
  modelDirectory: string;
  modelFileName: string;
}

class Viewer extends React.Component<IProps> {
  canvas = React.createRef<HTMLCanvasElement>();

  componentDidMount() {
    const { modelDirectory, modelFileName } = this.props;

    const engine = new Engine(this.canvas.current, true);

    SceneLoader.Load(modelDirectory, modelFileName, engine, newScene => {
      // Register a render loop to repeatedly render the scene
      const camera = new ArcRotateCamera(
        "Camera",
        Math.PI / 2,
        Math.PI / 2,
        2,
        new Vector3(0, 0, 5),
        newScene
      );
      camera.attachControl(this.canvas.current, true);
      engine.runRenderLoop(() => {
        newScene.render();
      });

      newScene.createDefaultEnvironment({
        enableGroundMirror: true
      });
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }

  render() {
    return (
      <canvas style={{ width: "100%", height: "100%" }} ref={this.canvas} />
    );
  }
}

export default Viewer;
