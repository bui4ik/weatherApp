import React from 'react'
import { Global, css } from '@emotion/core'

const styles = css`
  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    border: 0;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before {
    content: none;
  }

  q:after,
  q:before {
    content: none;
  }

  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
  }

  a:active,
  a:hover,
  a:focus {
    outline: none;
    text-decoration: none;
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  b,
  optgroup,
  strong {
    font-weight: 700;
  }

  dfn {
    font-style: italic;
  }

  mark {
    background: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    top: -0.5em;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  img {
    border: 0;
    vertical-align: middle;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
  }

  pre,
  textarea {
    overflow: auto;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button {
    overflow: visible;
    text-transform: none;
  }

  select {
    text-transform: none;
  }

  button,
  html input[type='button'] {
    cursor: pointer;
    -webkit-appearance: button;
  }

  input[type='reset'],
  input[type='submit'] {
    cursor: pointer;
    -webkit-appearance: button;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input {
    line-height: normal;
  }

  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  input[type='search'] {
    box-sizing: content-box;
    -webkit-appearance: textfield;
  }

  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    border: 0;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  input:focus,
  textarea:focus,
  select:focus,
  button:focus,
  div:focus {
    outline: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  html {
    font-size: 14px;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: #fff;
    color: #333;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    margin: 0;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: scrollbar;
    -webkit-font-smoothing: antialiased;
  }
`

const GlobalStyle = () => <Global styles={styles} />

export default GlobalStyle
