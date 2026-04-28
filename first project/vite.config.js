export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production'
    ? '/online-study-program/'
    : '/',
})