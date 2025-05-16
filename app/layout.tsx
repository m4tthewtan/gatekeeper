import Nav from "@/components/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import { Exo } from "next/font/google";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const exo = Exo({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${exo.className}`}>
        <ClerkProvider>
          <main>
            <Nav />
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
