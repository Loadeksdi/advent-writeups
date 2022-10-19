import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        darkbg: "#1f1e26",
      },
      fontFamily: {
        'advent': ['Advent Pro', 'sans-serif'],
        'inconsolata': ['Inconsolata', 'monospace']
      }
    },
  },
} as Options;
