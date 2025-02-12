import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "COEP Boat Club",
    description: "Offical Site for COEP Technological University's Boat Club",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/bclogo.webp" />
                <script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id="839ae4ee-a791-4a56-8a8c-80a3a0fff4e8"
                ></script>
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

