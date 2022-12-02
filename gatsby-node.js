const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/constants": path.resolve(__dirname, "src/constants"),
        "@/pages": path.resolve(__dirname, "src/pages"),
        "@/layouts": path.resolve(__dirname, "src/layouts"),
        "@/hooks": path.resolve(__dirname, "src/hooks"),
        "@/types": path.resolve(__dirname, "src/types"),
        "@/schemas": path.resolve(__dirname, "src/schemas"),
        "@/images": path.resolve(__dirname, "src/images"),
        "@/config": path.resolve(__dirname, "src/config"),
        "@/helpers": path.resolve(__dirname, "src/helpers"),
        "@/utils": path.resolve(__dirname, "src/utils"),
        "@/styles": path.resolve(__dirname, "src/styles"),
        "@/contexts": path.resolve(__dirname, "src/contexts"),
      },
    },
  });
};
