declare module "*.svg" {
  const React = require("react");
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}
