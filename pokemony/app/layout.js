import Navigation from "./components/Navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
				<title>Pokédex</title>
			</head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
