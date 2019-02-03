import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "dv4all-base",
  outputTargets: [
    { type: "dist" },
    { type: "docs" },
    {
      type: "www",
      // disable service workers
      serviceWorker: null
    }
  ],
  globalStyle: "./src/index.css",
  devServer: {
    // do not open browser
    openBrowser: false
  }
};
