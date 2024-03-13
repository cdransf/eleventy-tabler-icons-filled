const ICONS = require("./icons");

const initialConfig = {
  className: "",
  errorOnMissing: false,
};

module.exports = function tablericons(eleventyConfig, config = initialConfig) {
  function tablericons(context = this, name, alt) {
    const contents = ICONS[name];
    if (!contents) {
      const message = `No tablericons found for name "${name}"`;
      if (config.errorOnMissing) {
        throw new Error(message);
      } else {
        console.warn(message + ` in ${context.page.inputPath}`);
        return "";
      }
    }

    if (!contents) return "";

    return `${head(alt, config.className, name)}${contents}${
      ICONS.TAIL
    }`;
  }

  eleventyConfig.addShortcode("tablericon", function (name, alt, attrs) {
    return tablericons(this, name, alt, attrs);
  });
};

function head(alt, className, iconName, attrs) {
  let output = ICONS.HEAD.slice(0, -1); // Open tag
  if (!alt) output += ` aria-hidden="true"`;
  if (className) output += ` class="${className}"`;
  output += ` data-tablericon-name="${iconName}"`;

  if (attrs) {
    if (typeof attrs === "string") {
      output += ` ${attrs}`;
    } else {
      Object.entries(attrs).forEach(([property, value]) => {
        if (property && value) {
          output += ` ${property}="${value}"`;
        }
      });
    }
  }

  output += ">"; // Close tag
  if (alt) output += `<title>${alt}</title>`;

  return output;
}
