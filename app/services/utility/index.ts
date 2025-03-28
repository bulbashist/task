export const convertToFixed = (num: number) => {
  if (num < 1) {
    const pow = Math.floor(Math.abs(Math.log10(num)));
    if (pow > 10) return num.toString();
    return num.toFixed(pow + 2);
  }

  const exts = ["", "тыс.", "млн.", "млрд.", "трлн."];
  let ext = 0;
  let temp = num / 1000;
  while (temp > 1 && ext < exts.length) {
    ext++;
    num = temp;
    temp = num / 1000;
  }
  return num.toFixed(2) + exts[ext];
};

export const graphConvertToFixed = (num: number, add = 0) => {
  if (num < 10) {
    const pow = Math.floor(Math.abs(Math.log10(num)));
    if (pow > 10) return num.toString();
    return (num + add * 10 ** (-pow - 2)).toFixed(pow + 2);
  }

  return add > 0 ? Math.ceil(num) : Math.floor(num);
};
