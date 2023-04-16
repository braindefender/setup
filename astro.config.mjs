import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), solidJs()]
});