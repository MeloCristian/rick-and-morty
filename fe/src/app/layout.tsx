import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import BoyIcon from "@mui/icons-material/Boy";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick & Morty",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar position="fixed" className="custom-app-bar">
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              className="text-center"
            >
              <HomeIcon></HomeIcon> <h3>Advertencia</h3>
            </Typography>
            <Typography
              variant="h6"
              component={Link}
              href="/characters"
              className="text-center"
            >
              <BoyIcon></BoyIcon> <h3>Lista blanca</h3>
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ margin: "4.5rem" }}>{children}</div>
      </body>
    </html>
  );
}
