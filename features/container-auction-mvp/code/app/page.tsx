
import Link from "next/link"
import { Search, ArrowRight, ShieldCheck, Truck, Clock, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-primary/90 to-teal-900 text-white py-24 lg:py-32 overflow-hidden">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium rounded-full bg-white/10 text-white hover:bg-white/20 border-0 mb-4 transition-colors">
              🚀 #1 Marketplace for Shipping Containers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Buy, Sell & Auction <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">
                Global Inventory
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Connect with verified sellers and buyers worldwide. Secure transactions, verified condition reports, and seamless logistics.
            </p>

            {/* Hero Search Bar */}
            <div className="mt-8 p-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex max-w-lg mx-auto shadow-2xl">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search 20ft, 40ft, Reefer..."
                  className="w-full pl-12 h-12 bg-transparent border-0 text-white placeholder:text-gray-300 focus-visible:ring-0 rounded-l-full"
                />
              </div>
              <Button size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90 text-white font-semibold h-12 border-0">
                Search
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> Verified Sellers</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 24/7 Bidding</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Explore Categories</h2>
              <p className="text-muted-foreground mt-1">Find the perfect container for your needs</p>
            </div>
            <Button variant="link" asChild className="text-primary hidden md:flex">
              <Link href="/marketplace">View All Categories <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Standard Dry', count: '1,240+', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
              { name: 'High Cube', count: '850+', icon: Package, color: 'text-purple-600', bg: 'bg-purple-100' },
              { name: 'Refrigerated', count: '320+', icon: Clock, color: 'text-cyan-600', bg: 'bg-cyan-100' },
              { name: 'Open Top', count: '150+', icon: Truck, color: 'text-orange-600', bg: 'bg-orange-100' },
            ].map((cat, idx) => (
              <Link href="/marketplace" key={idx} className="group block">
                <Card className="hover:shadow-lg transition-all duration-300 border-none shadow-sm hover:-translate-y-1 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                      <cat.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground">{cat.count} listings</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <Button variant="outline" asChild className="w-full mt-6 md:hidden">
            <Link href="/marketplace">View All Categories</Link>
          </Button>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Auctions</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Bid on high-demand containers ending soon. Secure the best deals directly from major depots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mock Featured Cards - Reusing similar layout to ListingCard but inline for simplicity */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-xl overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-red-500 hover:bg-red-600 text-white border-none shadow-md animate-pulse">
                    Ends in 2h 15m
                  </Badge>
                </div>
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  {/* Placeholder Mock Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-white font-bold text-xl drop-shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      40ft High Cube - Grade A
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Current Bid</p>
                      <p className="text-2xl font-bold text-primary">$2,450</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="text-sm font-semibold">Hamburg, DE</p>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/marketplace">Place Bid Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
              <Link href="/marketplace">View All Auctions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST & BENEFITS */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Trade With Us?</h2>
              <p className="text-gray-400 text-lg">
                We streamline the chaotic world of container logistics into a simple, secure marketplace experience.
              </p>

              <ul className="space-y-4 mt-6">
                {[
                  { title: 'Verified Inspections', desc: 'Every container is inspected and graded by independent surveyors.' },
                  { title: 'Secure Escrow', desc: 'Funds are held safely until delivery is confirmed.' },
                  { title: 'Global Network', desc: 'Access inventory in 500+ ports and depots worldwide.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary-foreground">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Graphic Mock */}
            <div className="relative h-[400px] bg-gradient-to-tr from-gray-800 to-gray-700 rounded-2xl border border-gray-700 p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="inline-block p-4 rounded-full bg-primary mb-4 shadow-[0_0_30px_rgba(189,24,116,0.6)]">
                  <Truck className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Logistics Integrated</h3>
                <p className="text-gray-400 max-w-xs mx-auto">
                  Add transport to your checkout instantly. No more phone calls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/file.svg')] opacity-5 bg-repeat bg-center"></div>
        <div className="container relative mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join 10,000+ logistics professionals buying and selling containers daily.
            Create your account in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-bold shadow-xl" asChild>
              <Link href="/inventory/create">Start Selling</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-bold border-white text-white hover:bg-white/10 bg-transparent" asChild>
              <Link href="/marketplace">Browse Inventory</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
