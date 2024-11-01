# Grem

Access **Grem** at [grem.vercel.app](https://grem.vercel.app)

**Grem** is a video calling application built with Next.js 15. It leverages modern tools and libraries to provide a smooth and user-friendly video communication experience. With **Grem**, users can initiate video calls, interact with a dynamic UI, and enjoy a sleek theme.

## 🚀 Features

- **Real-time Video Calling**: Powered by Stream's Video SDK, enabling seamless video interactions.
- **Customizable Themes**: Users can switch between themes, enhancing the user experience.
- **Responsive UI**: Optimized for all screen sizes and devices.
- **Interactive Components**: Includes interactive dialogs, dropdowns, and toasts for better user engagement.

## 📚 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - The React framework for production.
- **Video SDK**: [Stream Video SDK](https://getstream.io/) - For managing video calls.
- **Authentication**: [Clerk](https://clerk.dev/) - For user authentication and session management.
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Provides accessible and customizable UI components.
- **Icons**: [Lucide Icons](https://lucide.dev/) - Modern icon library for React.
- **CSS**: [Tailwind CSS](https://tailwindcss.com/) with `tailwind-merge` for custom styling.

## 📦 Dependencies

| Dependency                   | Version | Description                                 |
|------------------------------|---------|---------------------------------------------|
| `@radix-ui/react-dialog`     | 1.1.2   | Dialog components                           |
| `@radix-ui/react-dropdown-menu` | 2.1.2 | Dropdown menu components               |
| `@radix-ui/react-icons`      | 1.3.0   | Icons for Radix UI components               |
| `@radix-ui/react-slot`       | 1.1.0   | Slot component for flexible component layouts |
| `@radix-ui/react-toast`      | 1.2.2   | Toast components for notifications          |
| `@stream-io/node-sdk`        | 0.4.4   | Stream SDK for server interactions          |
| `@stream-io/video-react-sdk` | 1.7.2   | Video SDK for real-time calls               |
| `class-variance-authority`   | 0.7.0   | Utility for managing class variance         |
| `clsx`                       | 2.1.1   | Utility for conditionally combining classes |
| `inter`                      | 2.1.0   | Inter font for UI styling                   |
| `lucide-react`               | 0.453.0 | Modern icon library for React               |
| `next`                       | 14.2.15 | React framework for building web applications |
| `next-themes`                | 0.3.0   | Theme management in Next.js                 |
| `react`                      | 18      | Core library for building UIs               |
| `react-datepicker`           | 7.5.0   | Datepicker component for React              |
| `react-dom`                  | 18      | React's DOM package                         |
| `tailwind-merge`             | 2.5.4   | Merges Tailwind CSS classes                 |
| `tailwindcss-animate`        | 1.0.7   | Animation utility for Tailwind CSS          |


## 🛠 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/grem.git
cd grem
npm install
