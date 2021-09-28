const defaultHtmlFontSize = 16;

/**
 * Convert px to rem
 * @param data
 * @param htmlFontSize - Important: change divider to html tag font size
 * @returns {string}
 */
export const rem = (
  data: string,
  htmlFontSize = defaultHtmlFontSize
): string => {
  // Split all values
  const dataArray = data.split(" ");
  const convertedArray = [] as string[];
  dataArray.forEach((element) => {
    // parse pixel value
    const pixels = parseInt(element);
    // Convert to rem.
    let remString: string;
    if (pixels !== 0) {
      remString = pixels / htmlFontSize + "rem";
    } else {
      remString = "0";
    }
    convertedArray.push(remString);
  });
  return convertedArray.join(" ");
};
