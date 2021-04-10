/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [names];
  const res = [];
  let count = 1;
  const count2 = 1;
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (names[i] === res[j]) {
        const after = (`${names[i]}(${count})`);
        res.push(after);
        count++;
        break;
      } else if (`${res[j]}(${count2})` === `${names[i]}`) {
        res.push(`${names[i]}(${count2})`);
      } else {
        res.push(names[i]);
      }
    }
  }
  return res;
}

module.exports = renameFiles;
