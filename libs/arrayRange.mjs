function arrayRange (start = 0, end = 10) {
  return [...Array(end - start + 1)].map((item, index) => start + index)
};

export default arrayRange
