const setHeader = (req, res, next) => {
    if (req && req.header('x-tid')) {
      res.append('x-tid', req.header('x-tid'));
    } else {
      const tid = Date.now();
      req.headers['x-tid'] = tid;
      res.append('x-tid', tid);
    }
    next();
  };
  
  const set = () => setHeader;c
  
  module.exports = { set };