'use client';

import '../styles/index.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Use Router - Bug</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className="bg-gray-900">
        {children}
      </body>
    </html>
  )
}
