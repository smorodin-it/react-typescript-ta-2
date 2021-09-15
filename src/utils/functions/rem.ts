/**
 * Convert px to rem
 * @param data
 * @returns {string}
 */
export const rem = (data: string): string => {
  // Split all values
  const dataArray = data.split(" ");
  const convertedArray = [] as string[];
  dataArray.forEach((element) => {
    // parse pixel value
    const pixels = parseInt(element);
    // Convert to rem. Important: change divider to html tag font size
    let rem: string;
    if (pixels !== 0) {
      rem = pixels / 16 + "rem";
    } else {
      rem = "0";
    }
    convertedArray.push(rem);
  });
  return convertedArray.join(" ");
};
