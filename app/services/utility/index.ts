export const convert = (num: number) => {
  if (num < 0.01) return num.toFixed(5);

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
