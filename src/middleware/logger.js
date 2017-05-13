export default store => next => action => {
  console.log("before");
  next(action)
  console.log("after");
};
