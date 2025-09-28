import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Admin Dashboard - Intern Seva",
  description: "Admin dashboard for managing internships and users",
}

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}