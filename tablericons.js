import ICONS from './icons.js'

const tablericons = (eleventyConfig, config = {}) => {
  const { className = '', errorOnMissing = false } = config

  const renderIcon = (context = this, name, alt, attrs) => {
    const contents = ICONS[name]
    if (!contents) {
      handleMissingIcon(name, context.page.inputPath)
      return ''
    }

    return `${head(alt, className, name, attrs)}${contents}${ICONS.TAIL}`
  }

  const handleMissingIcon = (name, inputPath) => {
    const message = `No tablericons found for name '${name}'`
    if (errorOnMissing) {
      throw new Error(message)
    } else {
      console.warn(`${message} in ${inputPath}`)
    }
  }

  // Register shortcode for Eleventy 3.0
  eleventyConfig.addShortcode('tablericon', (name, alt, attrs) => {
    return renderIcon(this, name, alt, attrs)
  })
}

const head = (alt, className, iconName, attrs) => {
  let output = `${ICONS.HEAD.slice(0, -1)} aria-hidden='true'`

  if (className) output += ` class='${className}'`
  output += ` data-tablericon-name='${iconName}'`

  if (typeof attrs === 'string') {
    output += ` ${attrs}`
  } else if (attrs && typeof attrs === 'object') {
    output += Object.entries(attrs)
      .map(([property, value]) => (property && value ? ` ${property}='${value}'` : ''))
      .join('')
  }

  return `${output}>`
}

export default tablericons