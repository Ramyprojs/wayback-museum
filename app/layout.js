import "./globals.css";
import { FooterBar } from "@/components/footer-bar";
import { Taskbar } from "@/components/taskbar";

export const metadata = {
  title: "Wayback Museum",
  description: "A Museum for the Internet That Was"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell animate-flicker">
          <Taskbar />
          <main className="mx-auto w-full max-w-[1200px] px-3 pb-14 sm:px-5">{children}</main>
          <FooterBar />
        </div>
      </body>
    </html>
  );
}
