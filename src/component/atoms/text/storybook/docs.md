# Text Component

Text Component digunakan untuk generate text berupa heading maupun paragraph sesuai dengan style guide.

## Cara Penggunaan
berikut adalah cara penggunaan icon component

```jsx
// Import Component
import Text from 'text.component.js'

// Implementasi di method render
return (
    <Text
      type="h1"
  >
      Heading H1
  </Text>
)
```

## Props
berikut adalah dokumentasi props component

| Props | PropTypes | Default | Deskripsi |
|-------|-----------|---------|-----------|
|color|String / Number|`#3e4246`|Anda dapat menggubah warna  secara spesifik. Bisa menggunakan warna css `(#033 atau rgba(255, 0, 0, 0.5))`.|
|fontWeight|String|`null`|Anda dapat mengatur ketebalan font. Untuk saat ini hanya tersedia 5 type yaitu `light`, `normal`, `medium`, `semibold` dan `bold`.|
|type|String|`normal`|Anda dapat memilih type button. Untuk saat ini hanya tersedia 9 type yaitu `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `normal`, `featured`, `meta` dan `caption`|
