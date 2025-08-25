import './globals.css';

export const metadata = {
  title: 'Alvedo AI',
  description: ' AI Chatbot in Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
