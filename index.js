exports.plugins = {
  // Official rules
  "remark-lint-heading-increment": true,
  "remark-lint-no-auto-link-without-protocol": true,
  "remark-lint-no-blockquote-without-marker": true,
  "remark-lint-no-duplicate-definitions": true,
  "remark-lint-no-duplicate-headings": true,
  "remark-lint-no-duplicate-headings-in-section": true,
  "remark-lint-no-empty-url": true,
  "remark-lint-no-file-name-consecutive-dashes": true,
  "remark-lint-no-file-name-outer-dashes": true,
  "remark-lint-no-inline-padding": true,
  "remark-lint-no-multiple-toplevel-headings": true,
  "remark-lint-no-reference-like-url": true,
  "remark-lint-no-shortcut-reference-image": true,
  "remark-lint-no-shortcut-reference-link": true,
  "remark-lint-no-undefined-references": true,
  "remark-lint-no-unused-definitions": true,

  // External rules
  "remark-lint-match-punctuation": true,
  "remark-lint-no-dead-urls": [true, { skipLocalhost: true, skipOffline: true }],

  // Plugins
  "remark-gfm": true,
};
