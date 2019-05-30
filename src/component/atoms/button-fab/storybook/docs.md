# Button FAB Component

## Cara Penggunaan
berikut adalah cara penggunaan button component

```jsx
// Import Component
import ButtonFab from 'button-fab.component.js'

// Implementasi di method render
return (
    <ButtonFAB
      buttonType="primary"
  >
      edit
  </ButtonFAB>
)
```

## Props
berikut adalah dokumentasi props component

| Props | PropTypes | Default | Deskripsi |
|-------|-----------|---------|-----------|
|disable|Boolean|`false`|Anda dapat mengatur apakah tag button / a ini dapat di click atau tidak.|
|display|String|`flex`|Untuk mengubah attribute display pada tag button / a, anda dapat memilih `block`, `inline`, `flex`, dll.|
|outline|Boolean|`false`|Jika anda ingin menggunakan button yang terdiri dari border dan text saja, maka anda bisa mengubah props outline menjadi `true`.|
|shadow|Boolean|`false`|Jika anda ingin menambahkan box-shadow pada tag button / a, maka anda bisa mengubah props shadow menjadi `true`.|
|size|String / Number|`default`|Anda dapat mengatur ukuran button di component. Anda dapat memilih `default` atau `small`|
