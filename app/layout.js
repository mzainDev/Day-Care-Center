// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Rawdhat Portal Website",
  description: "Rawdhat offers childcare management solutions.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" }, // Optional PNG fallback
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}