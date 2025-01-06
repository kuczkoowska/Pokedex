import './globals.css';
import NavBar from './components/NavBar';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Pokedex</title>
        </head>
        <body>
          <header>
            <NavBar />
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }
  