import "./globals.css"

export const metadata = {
  title: 'Simple ToDoApp',
  description: 'Simple ToDo app using nextjs 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
