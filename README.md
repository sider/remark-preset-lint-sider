# remark-preset-lint-sider

[![npm version](https://badge.fury.io/js/remark-preset-lint-sider.svg)](https://badge.fury.io/js/remark-preset-lint-sider)

This is an opinionated [remark-lint](https://github.com/remarkjs/remark-lint) preset by [Sider](https://sider.review/).

This preset focuses on possible errors or mistakes, not stylistic issues.

## Getting started

Install,

```shell-session
$ npm install --save-dev remark-cli remark-preset-lint-sider
```

Then run,

```shell-session
$ npx remark --use remark-preset-lint-sider .
```

## Releasing

1. Run [`npm version`](https://docs.npmjs.com/cli/version).
2. Run [`git push --follow-tags`](https://git-scm.com/docs/git-push).
3. Create a new release on the [release page](https://github.com/sider/remark-preset-lint-sider/releases).

Publishing to npm will be performed automatically.

## License

[MIT](LICENSE) © Sleeek Corporation
