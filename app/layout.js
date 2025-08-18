// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Automatically picks favicon.ico from /public */}
        <link rel="icon" href='/favicon.ico' type="image/x-icon" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}