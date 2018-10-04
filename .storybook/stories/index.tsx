import { storiesOf } from "@storybook/react";
import React from "react";
import Viewer from "../../src";

const modelDirectory = "/gltf2/monster/";
const modelFileName = "Monster.gltf";

storiesOf("Viewer", module).add("default", () => (
  <Viewer modelDirectory={modelDirectory} modelFileName={modelFileName} />
));
