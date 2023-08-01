// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { isConformant } from "../test-utils/isConformant";
import { ExampleComponent } from "./ExampleComponent";

describe("ExampleComponent", () => {
  isConformant({
    Component: ExampleComponent,
  });

  it("check react", () => {
    const React = require("react");
    if (!React.version.startsWith("18")) {
      throw new Error(
        `Wrong React version. Expected ^18, got ${React.version}`
      );
    }
  });
});
