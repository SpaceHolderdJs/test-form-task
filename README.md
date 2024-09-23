# test-form-task

This task realization involves custom validation and forms data handling.
Form is getting built reffering to fields.json file, placed in **./src/components/form**
Time spent: **~4hr**

P.S I did not use any libraries like Formik or Yup assuming custom approach. Usage of additional libraries will decrease the spent time nealry twicely :)

This is a form generation project built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. The form is generated dynamically based on configurations and validations.

## Features

- **React 18**: Fast, responsive user interfaces with the latest features of React.
- **Next.js**: Server-side rendering and static site generation.
- **TypeScript**: Strong typing and improved developer experience.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs quickly.
- **ESLint**: Linting for code quality and consistency.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (>= 14)
- **npm** (or **yarn**)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/test-form-task.git
   cd test-form-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will generate the optimized production build.

### Starting the Production Server

After building the project, you can start the production server with:

```bash
npm start
```

### Linting

To lint your code and check for issues, run:

```bash
npm run lint
```

## Technologies Used

- **Next.js**: Framework for React with server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **ESLint**: Linting tool for identifying and fixing problems in your code.

## Folder Structure

```plaintext
.
├── pages/               # Next.js pages
├── public/              # Public static files
├── styles/              # Global and Tailwind CSS styles
├── components/          # Reusable React components
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project configuration and dependencies
```

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run start`**: Start the production server.
- **`npm run lint`**: Run ESLint to check for code quality issues.

## License

This project is licensed under the [MIT License](LICENSE).
