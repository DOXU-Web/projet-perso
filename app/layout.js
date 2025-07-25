import "./globals.css";

export const metadata = {
  title: "DOXU",
  description: "DOXU-TAG FIGHTER 2V2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
