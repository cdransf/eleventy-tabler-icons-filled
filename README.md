# Eleventy: tabler icons plugin

Shortcodes to add [tabler icons](https://tabler-icons.io) to your [Eleventy](https://11ty.dev) projects

## Get started

Install the package:

```sh
npm i -D @cdransf/eleventy-tabler-icons-filled
```

Then add the plugin to your `.eleventy.js` file:

```js
// .eleventy.js
module.exports = eleventyConfig => {
    eleventyConfig.addPlugin(require('@cdransf/eleventy-tabler-icons-filled'));
}
```

## Usage

This plugin adds the `tablericon-filled` shortcode.

**Note**: These examples use Liquid template syntax, which is the default for Eleventy. If you are using another template engine like Nunjucks, the syntax might be slightly different.

### `tablericon-filled`

Args: `name: string`, `alt?: string`

```md
{% tablericon-filled "archive" %}
{% tablericon-filled "x" "Close menu" %}
```

## Configuration

`eleventy-plugin-tablericons` offers a few options on a configuration object passed to Eleventy's `addPlugin()`:

- `className?: string` Adds a class to all tabler icons
- `errorOnMissing: boolean` (default: `false`) Throw an error when passed an invalid style/name or invalid attribute

Pass the configuration object when adding the plugin:

```js
// .eleventy.js
module.exports = eleventyConfig => {
    eleventyConfig.addPlugin(require('@cdransf/eleventy-tabler-icons-filled'), {
        className: 'icon',
        errorOnMissing: true
    });
}
```

## Styling

The `svg` element receives two data attributes that you can use for styling:

- `data-tablericon-name="string"`

You could add the following to your stylesheets:

```css
/* Arrow down icon */
[data-tablericon-name="arrow-down"] {
    color: darkgreen;
}

/* All icons */
[data-tablericon-name] {
    padding: 2ch;
}
```

If you passed a `className` to the configuration object, then you could use that to select all icons.

## License

[MIT](./LICENSE)
