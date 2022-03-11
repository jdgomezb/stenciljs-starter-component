# mc-modal



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type      | Default     |
| ------------ | ------------ | ----------- | --------- | ----------- |
| `appearance` | `appearance` |             | `string`  | `undefined` |
| `buttons`    | `buttons`    |             | `string`  | `undefined` |
| `closeIcon`  | `close-icon` |             | `string`  | `'x.svg'`   |
| `header`     | `header`     |             | `string`  | `undefined` |
| `isopen`     | `isopen`     |             | `boolean` | `undefined` |


## Events

| Event    | Description | Type               |
| -------- | ----------- | ------------------ |
| `action` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [mc-button](../mc-button)

### Graph
```mermaid
graph TD;
  mc-modal --> mc-button
  style mc-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
