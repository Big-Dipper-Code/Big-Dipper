const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: "page-",
    },
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/main.scss";
        `,
      },
    },
  },
});
