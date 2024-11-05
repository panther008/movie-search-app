# Movie Search App
A single-page application that allows users to search for movies using the OMDb API, displaying the top 3 results with movie posters, titles, and a link to the movie's IMDb page.
This app showcases efficient API usage, modern design trends, and code structure.

### Features
- Search movies by title using the OMDb API
- Display top 3 search results with movie posters and links to IMDb pages
- Responsive and clean design using React and TypeScript

### Tech Stack
- Frontend: React, TypeScript, Axios
- API: OMDb API (https://www.omdbapi.com/)

### Setup and Installation
#### 1. Clone the repository:
```
git clone https://github.com/yourusername/movie-search-app.git
cd movie-search-app
```
#### 2.Install dependencies:
```
npm install
```
#### 3.Set up OMDb API Key:
- Sign up at OMDb API to get an API key.
- Create a .env file in the root of the project and add your API key
```
REACT_APP_BASEURL='https://www.omdbapi.com/'
REACT_APP_API_KEY='your api key'

```

#### 4. Run the application:
```
npm start
```

### Project Structure
- src/components: Contains reusable components such as SearchBar and MovieCard.
- src/api: Configures Axios with an interceptor for API requests to the OMDb API.
- src/types: Defines TypeScript interfaces for movie data.

### Key Files
- SearchBar.tsx: A component for handling user input and search functionality.
- MovieCard.tsx: Displays each movie result with a poster, title, and link.
- movieService.ts: Contains API call functions and error handling logic.

### API Usage
- The app communicates with the OMDb API for fetching movie data based on user input.
- It filters results to show only the top 3 movies by relevance.

### Available Scripts
- npm start: Runs the app in development mode.
- npm test: Launches the test runner.
- npm run build: Builds the app for production.
### Example Usage
- Enter a movie title in the search bar.
- Click Search.
- View the top 3 results, and click any poster to open its IMDb page.
