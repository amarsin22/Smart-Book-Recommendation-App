# Smart Book Recommendation App 📚

[Live Demo](https://smart-book-recommendation-9qt0ly7ne.vercel.app/)  

A modern, responsive React + TypeScript web app to search for books (via Open Library API), view details, mark favorites, and filter between all books & favorites. Designed with elegant UI, smooth animations, and persistent data via localStorage.

## 🚀 Features

- 📖 **Book Search**: Search books by title or author using the Open Library API  
- ⭐ **Favorites**: Add or remove books to/from your favorites list  
- 🔍 **Filter View**: Toggle between viewing all books or only favorites  
- 💾 **Persistent Data**: Favorites persist across browser sessions using `localStorage`  
- 🎨 **Responsive & Interactive UI**: Hover effects, animations, gradient styling, and mobile performance  

## 🛠️ Tech Stack

| Feature | Technology |
|--------|------------|
| Framework | React |
| Language | TypeScript |
| HTTP Client | Axios / Fetch API |
| CSS | Modern CSS (flex, grid, animations) |
| Data Persistence | localStorage |
| Deployment | Vercel / any static hosting |


## 🧩 How It Works (Overview)

1. **Search**: User enters a query, which triggers a request to the Open Library API for books matching the title or author.  
2. **Render**: Results are displayed as cards showing cover image, title, author(s), and publish year.  
3. **Favorites Toggle**: Clicking “Add Favorite” toggles the book in/out of the favorites list.  
4. **Filter**: A dropdown allows toggling between “All Books” view and “Favorites” view.  
5. **Persistence**: Favorites are saved to `localStorage`, so data stays after page reloads.

## 📥 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/smart-book-app.git
cd smart-book-app

# Install dependencies
npm install

# Run the development server
npm run dev


