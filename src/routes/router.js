import useLocation from "wouter-preact/use-location";

const makeUseBasepathLocation = basepath => () => {
  const [location, setLocation] = useLocation();

  const normalized = location.startsWith(basepath)
    ? location.slice(basepath.length)
    : location;

  return [normalized, to => setLocation(basepath + to)];
};

export { makeUseBasepathLocation };
