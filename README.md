# My Developer Portfolio

This is a personal portfolio project built using **Next.js**, **Bootstrap**, **D3.js**, and **Axios**. It showcases who I am as a developer, my technical stack, my coding activity, and the public projects I’ve worked on. The goal of this project is to present both my journey and my technical skills in a simple, responsive, and visually appealing way.

## Live Demo
This site can be viewed live on GitHub

---

## Tech Stack

- **Next.js** – for building a responsive and SEO-friendly React application.
- **Bootstrap** – for responsive layouts and styling with minimal custom CSS.
- **D3.js** – for creating interactive and customizable charts and visualizations.
- **Axios** – to simplify API requests to GitHub.

---

## Design Choices

- **Color Palette**: I opted for a clean and accessible palette—**black** and **white** for clarity, with accent colors like **red** and a **shade of green** for contrast and highlights.
- **Responsive Design**: The site was built with Bootstrap to ensure a smooth experience across both desktop and mobile devices.
- **Minimal CSS**: By leveraging Bootstrap, I reduced the amount of custom CSS needed, allowing me to focus on functionality.

---

## Structure

The site is split into two main pages:

### 1. Landing Page
Divided into four main sections:
- **Hero Section**: A short welcome and hook.
- **Technical Skills**: A visual breakdown of my tech stack using D3 bar charts.
- **My Journey**: A brief overview of how I got into tech and what I’m currently working on.
- **Projects**: Publicly available projects with short descriptions and links.

### 2. Data Analysis Page
Provides an analysis of my GitHub profile through dynamic charts:
- **Commit Frequency**: Displays how often I commit code over time.
- **Language Breakdown**: Shows lines of code written per language across public repositories.
- **Stars & Forks**: Highlights any interaction my repos receive (stars/forks), although currently minimal.

---

## Hooks & API Calls

- I used React Hooks such as `useEffect` and `useState` to fetch and store API data.
- All API calls are made through a central Axios instance located in `/lib`, which allows easy reuse and cleaner code.

---

## Separation of Concerns & Component Structure

To ensure maintainable and modular code, I created reusable components. This approach helps in:

- **Separation of Concerns**: Components are responsible for their specific task, making the code easier to manage.
- **Code Reusability**: With the separation of concerns, components can be reused across different parts of the site.
- **Reduced Complexity**: By splitting the code into smaller components, the amount of code in each component is reduced, leading to improved readability and easier debugging.

---

## File Structure
```txt

├── public/               # Photos used
├── src/
│   ├── components/       # Reusable components
│   ├── lib/              # Axios configuration and utility functions
│   ├── pages/            # Next.js page components (Landing & Data Analysis)
│   └── styles/           # CSS files
```
---

## How to Run

1. Clone this repo  
   `git clone https://github.com/your-username/your-repo-name.git`

2. Navigate into the project folder  
   `cd client`

3. Install dependencies  
   `npm install`

4. Start the development server  
   `npm run dev`

---

## Contact Info

You can find my contact information in the footer of the site, including:
- **Name**
- **Email**
- **GitHub**
- **GitLab**

---

## Note

This portfolio is a work-in-progress and will continue to evolve as I grow in my journey as a developer. The stats and interactions displayed (like stars and forks) may not reflect my actual level of skill or effort—some of my most meaningful work exists in private or academic repositories.
