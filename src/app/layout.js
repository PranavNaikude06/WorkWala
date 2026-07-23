import "./globals.css";

export const metadata = {
  title: "WorkWala — Work For Everyone. Jobs For Everyone.",
  description: "Hyperlocal marketplace connecting skilled workers with everyday jobs nearby.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fafaf5] text-[#1a1c19]">
        <main className="flex-1 w-full max-w-md mx-auto relative bg-[#fafaf5] shadow-xl min-h-screen overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}

