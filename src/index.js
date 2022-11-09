// export default str => str.split('').reverse().join('');

const fill = (coll, value, start = 0, end = coll.length) => {
  if(!value) return coll;

  const output = [...coll];
  const collLength = coll.length;

  const startIndex = (coll, start) => {
    const length = coll.length;

    if(start >= 0) return start;

    if(start + length >= 0) return start + length;

    return 0;
  };


  const endIndex = (coll, end) => {
    const length = coll.length;

    if(end > length) return length;

    if(end > 0) return end;

    return end + length;
  };

  for (let i = startIndex(coll, start); i < endIndex(coll, end); i += 1) {
    output[i] = value;
  }

  return output;
};

export default fill;
