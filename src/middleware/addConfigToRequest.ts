export default const addConfigToRequest = (config: Object) => (req: any, _: any, next: any) => {
  req.config = config;
  return next();
};
