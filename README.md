# extension-marker
[![Version](https://img.shields.io/npm/v/@yaskevich/extension-marker.svg?label=version)](https://www.npmjs.com/package/@yaskevich/extension-marker)
[![Downloads](https://img.shields.io/npm/dm/@yaskevich/extension-marker.svg)](https://www.npmjs.com/package/@yaskevich/extension-marker)
[![License](https://img.shields.io/npm/l/@yaskevich/extension-marker.svg)](https://www.npmjs.com/package/@yaskevich/extension-marker)

Tiptap extension for setting custom class of the [mark](https://tiptap.dev/api/marks).


# Installation

`npm install @yaskevich/extension-marker`

## Settings

#### classes

The list of the classes available to be set via the extension.

Default: none

#### shortcuts

The list of the keyboard shortcuts in the same order as the classes.

Default: none

Example: `['Mod-q']` will set Ctrl+Q shortcut for first item.

If you would like to omit shortcut for an item, but set it for next one in list, put there an empty string.

####  excludes

This option works in the same manner, as it is described in [Schema](https://tiptap.dev/api/schema#excludes) documentation. 

`'_'` excludes all other marks, `'bold'` excludes only Bold mark.

Default: `marker` (excludes setting itself more than once).

#### tag

The name of the tag into which the mark is rendered

Default: `'span'`

It is better not to set something fancy, however, for example I use `var` tag in one of my projects.

##### How to set class via button click

Set handler like this:

`editor.chain().focus().toggleMarker({ class: 'superclass' }).run()`



:space_invader: