
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { AuthProvider } from "@/lib/auth-context";

export const metadata: Metadata = {
  title: "Container Auction Marketplace",
  description: "Global marketplace for shipping container auctions and sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-body bg-background text-foreground min-h-screen flex flex-col">
        <AuthProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="border-t bg-white py-12 mt-auto">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-6 w-6 bg-gradient-to-br from-magenta to-teal rounded"></div>
                    <span className="text-lg font-bold tracking-tight">Container Marketplace</span>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    The world's leading marketplace for shipping container trading, auctions, and maintenance services.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Marketplace</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="/marketplace" className="hover:text-primary transition-colors">Browse All</Link></li>
                    <li><Link href="/marketplace" className="hover:text-primary transition-colors">Auctions</Link></li>
                    <li><Link href="/marketplace" className="hover:text-primary transition-colors">Buy it Now</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Services</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="/maintenance" className="hover:text-primary transition-colors">Maintenance</Link></li>
                    <li><Link href="/inventory/create" className="hover:text-primary transition-colors">List a Container</Link></li>
                  </ul>
                </div>
              </div>
              <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                <p>© 2026 ContainerMarket. All rights reserved.</p>
                <div className="flex gap-6">
                  <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
                </div>
              </div>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}

import Link from "next/link";
