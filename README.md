# extension-marker
[![Version](https://img.shields.io/npm/v/@tiptap/extension-marker.svg?label=version)](https://www.npmjs.com/package/@tiptap/extension-marker)
[![Downloads](https://img.shields.io/npm/dm/@tiptap/extension-marker.svg)](https://npmcharts.com/compare/tiptap?minimal=true)
[![License](https://img.shields.io/npm/l/@tiptap/extension-marker.svg)](https://www.npmjs.com/package/@tiptap/extension-marker)

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

####  exclusive

Boolean value defining whether setting this mark excludes assigning other marks to the same node. 

Default: `false`

#### tag

The name of the tag into which the mark is rendered

Default: `'span'`

It is better not to set something fancy, however, for example I use `var` tag in one of my projects.

##### How to set class via button click

Set handler like this:

`editor.chain().focus().toggleMarker({ class: 'superclass' }).run()`



:space_invader: