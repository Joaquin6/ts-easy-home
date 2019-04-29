export default function addConfigToRequest(config: Object) {
  return (req: any, _: any, next: any) => {
    req.config = config;
    return next();
  };
}
