import {
  Mark,
  // markInputRule,
  // markPasteRule,
  mergeAttributes,
} from '@tiptap/core'

export interface MarkerOptions {
  HTMLAttributes: Record<string, any>,
  classes: Array<string>,
  tag: string,
  excludes: string,
  shortcuts: Array<string>,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    marker: {
      /**
       * Set a marker
       */
      setMarker: (attributes?: { class: string }) => ReturnType,
      /**
       * Toggle a marker
       */
      toggleMarker: (attributes?: { class: string }) => ReturnType,
      /**
       * Unset a marker
       */
      unsetMarker: () => ReturnType,
    }
  }
}

// export const inputRegex = /(?:^|\s)((?:==)((?:[^~]+))(?:==))$/
// export const pasteRegex = /(?:^|\s)((?:==)((?:[^~]+))(?:==))/g

export const Marker = Mark.create<MarkerOptions>({
  name: 'marker',

  addOptions() {
    return {
      tag: 'span',
      classes: [''],
      excludes: 'marker',
      HTMLAttributes: {},
      shortcuts: []
    }
  },

  addAttributes() {
    // console.log("available marker classes", this.options.classes);
    return {
      "class": {
        default: this.options.classes[0],
        parseHTML: element => element.getAttribute('class'),
        renderHTML: attributes => {
          if (!attributes.class) {
            return {}
          }
          return {
            'class': attributes.class,
          }
        },
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: this.options.tag,
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [this.options.tag, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

  addCommands() {
    return {
      setMarker: attributes => ({ commands }) => {
        // console.log("set attrs", attributes);
        return commands.setMark(this.name, attributes)
      },
      toggleMarker: attributes => ({ commands }) => {
        // console.log("toggle attrs", attributes);
        return commands.toggleMark(this.name, attributes)
      },
      unsetMarker: () => ({ commands }) => {
        return commands.unsetMark(this.name)
      },
    }
  },

  addKeyboardShortcuts() {
    return Object.fromEntries(
      this.options.classes
        .slice(0, this.options.shortcuts.length)
        .flatMap((x, i) => this.options.shortcuts[i] ? [[this.options.shortcuts[i], () => this.editor.commands.toggleMarker({ class: x })]] : [])
    );
  },

  // addInputRules() {
  //   return [
  //     markInputRule({
  //       find: inputRegex,
  //       type: this.type,
  //     }),
  //   ]
  // },
  //
  // addPasteRules() {
  //   return [
  //     markPasteRule({
  //       find: pasteRegex,
  //       type: this.type,
  //     }),
  //   ]
  // },
})
