# Oakenfold.ca 0.0.2 - HTML

## Requirement
`browser-sync` installed globally:

- `npm install -g browser-sync`

## Tools

- [Critical](https://www.npmjs.com/package/critical) for inlining the .css required for a specified viewport, updates remaining `<link>`s with `rel="preload"`
- [Browsersync](https://browsersync.io/) for Livereload during HTML development

## Commands

- `npm run start` launches browsersync
- `npm run build` optimizes build, creates `/deploy` directory
- `npm run buildServe` run an `http-server` from the `/deploy` directory