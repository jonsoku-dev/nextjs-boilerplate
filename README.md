# Next.js
## _app.tsx
* https://nextjs.org/docs/basic-features/typescript#custom-app
* https://stackoverflow.com/questions/64722812/what-typescript-type-should-nextjs-app-tsx-component-and-pageprops-be

## _document.tsx
* https://nextjs.org/docs/advanced-features/custom-document#typescript
* https://www.youtube.com/watch?v=FTLHqyQ9NqY

## server-side-rendering
* https://nextjs.org/docs/basic-features/typescript#static-generation-and-server-side-rendering

### getStaticProps
* https://www.youtube.com/watch?v=MxlmfI9IxVs

### getServerSideProps
* https://www.youtube.com/watch?v=61TngxLrP_0&t=965s

## SSO
* 
## ENV
* https://www.youtube.com/watch?v=Mh9BJNfAVsM

# emotion
## starter
* https://github.com/vercel/next.js/tree/canary/examples/with-emotion
## theme
* https://emotion.sh/docs/theming
* https://emotion.sh/docs/theming#themeprovider-reactcomponenttype
```typescript
// define your theme
const theme = {
  colors: {
    blue: "blue",
    brand: "hotpink",
  },
  spacing: {
    small: "8px",
    medium: "16px",
  },
}

// define your theme type (that you can import and reuse everywhere)
type Theme = typeof theme
```

# storybook
## starter
* https://storybook.js.org/docs/react/get-started/install

