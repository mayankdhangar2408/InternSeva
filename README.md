# Intern Seva Website

Your Gateway to PM Internship Scheme - A modern React/Next.js application for managing government internship programs.
<img width="1898" height="919" alt="image" src="https://github.com/user-attachments/assets/83274b80-ee4b-4430-9c6a-564fcf46b283" />


## 🚀 Tech Stack

- **Frontend**: React 19, Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4, Radix UI Components
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Animations**: Tailwind CSS Animate
  <img width="1900" height="854" alt="image" src="https://github.com/user-attachments/assets/80c2d308-75e9-4560-adaa-ace3e0d8d338" />


## 📋 Prerequisites

Before running this project locally, make sure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn** or **pnpm**

You can check your versions by running:
\`\`\`bash
node --version
npm --version
\`\`\`

## 🛠️ Local Setup Instructions

### 1. Clone the Repository
\`\`\`bash
git clone <your-repository-url>
cd intern-seva-website
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

Or if you prefer yarn:
\`\`\`bash
yarn install
\`\`\`

Or if you prefer pnpm:
\`\`\`bash
pnpm install
\`\`\`

### 3. Run the Development Server
\`\`\`bash
npm run dev
\`\`\`

Or with yarn:
\`\`\`bash
yarn dev
\`\`\`

Or with pnpm:
\`\`\`bash
pnpm dev
\`\`\`

### 4. Open in Browser
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

\`\`\`
intern-seva-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── dashboard/         # Dashboard pages
│   ├── internships/       # Internships listing
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── resources/         # Resources page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.jsx           # Homepage
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── header.jsx        # Site header
│   ├── footer.jsx        # Site footer
│   ├── hero-section.jsx  # Hero section
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional stylesheets
└── README.md            # This file
\`\`\`

## 🎨 Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional interface with Radix UI components
- **Interactive Elements**: Smooth animations and transitions
- **Form Handling**: Robust form validation with React Hook Form
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized with Next.js 14 App Router

## 📄 Available Pages

- **Homepage** (`/`) - Landing page with hero, features, and CTA
- **About** (`/about`) - Information about the PM Internship Scheme
- **Internships** (`/internships`) - Browse available internships
- **Dashboard** (`/dashboard`) - User dashboard (requires authentication)
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - User registration
- **Contact** (`/contact`) - Contact form and information
- **Resources** (`/resources`) - Helpful resources and guides

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build files and node_modules
- `npm run reinstall` - Clean install dependencies

## 🌐 Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

\`\`\`env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
1. Run `npm run build`
2. Upload the `.next` folder and other necessary files
3. Set up your hosting environment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

1. **Port already in use**
   \`\`\`bash
   # Kill process on port 3000
   npx kill-port 3000
   # Or use a different port
   npm run dev -- -p 3001
   \`\`\`

2. **Module not found errors**
   \`\`\`bash
   # Clear cache and reinstall
   npm run reinstall
   \`\`\`

3. **Build errors**
   \`\`\`bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   \`\`\`

### Getting Help

If you encounter any issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Open an issue in this repository

## 📞 Support

For support and questions, please contact the development team or open an issue in the repository.
