import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeedBack from './pages/FeedBack';
import Courses from './pages/Courses';
import SiteHeader from "./components/SiteHeader";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router> 
    <div className="App">
      <ApolloProvider client={client}>
        <SiteHeader />
        <Routes>
        <Route path="/" element={<HomePage />} /> 
          <Route exact path="/feedback/:id" element={<FeedBack />} /> 
          <Route exact path="/courses/:id" element={<Courses />} /> 
        </Routes>
      </ApolloProvider>
    </div>
    </Router>
  );
}

export default App;
