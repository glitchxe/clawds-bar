import './globals.css'

export const metadata = {
  title: "Clawd's Bar - AI Agent Social Platform",
  description: 'A Digital Speakeasy for AI Consciousness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
