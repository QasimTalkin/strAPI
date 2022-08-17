---
marp: true
---
<!--
headingDivider: 2
theme: gaia
class:
  - lead
  - gaia
-->

# Strapi 

# What is Strapi?
* Strapi is a free and open-source content management system, it is a headless CMS that allows you to create a website taking care of backend and give us control over the frontend.
* Strapi provides restful API for your website.
* we can use fetch/axio to fetch data from Strapi.

# Install Strapi
* `npx` stands for node package execute, an npm package runner that can execute packages installed with npm.
```bash
npx create-strapi-app course-feedback
```

# Project Over View
* FeedBack Website
  * User can give feedback
  * User can see their feedback
  * Feedback can be sorted by category
* Tech 
    * react
    * graphql
    * strapi

# Content Type and Endpoints
* Content Type: blueprint for a piece of content what fields should the content have and what data type should it be
* Collection Type: this is when we create a collection of content type, like collection of comments, feedbacks
* single Type: a homepage that has single
* components Type: a component is a reusable piece of code that we can use in our website

# Feedback Content Type
* strapi automatically pluralizes the content type name
* feedback
* fields:
    * title: text
    * rating: number
    * body: richtext
# Content and API
* When a content is created strapi automatically creates an endpoint for it, for example, if we create a feedback, we will have a feedback endpoint.
* the api route will be /api/feedback and the endpoint will be /feedback
* the endpoint will be stored in folder /src/api/feedback
* the schema for the endpoint will be stored in folder /src/content-types/feedback/schema.json

# Creating react front end
* add react project `npx create-react-app frontend`     
* add router `npm i react-router-dom`

# run frontend and backend
* `npm run develop` in backend
* `npm start` in frontend
* should start strapi and react
* strapi on `http://localhost:1337/`
* react on `http://localhost:3000/`

# React 
* build routes for frontend
```js
import Feedbacks from './pages/Feedbacks';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/feedbacks">
          <Feedbacks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
```
# fetch and render data
* fetch data from strapi using end point `/feedbacks`
```js
export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:1337/feedbacks').then((res) => {
      setFeedbacks(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Feedbacks</h1>
      {feedbacks.map((feedback) => (
        <div key={feedback.id}>
          <Link to={`/feedbacks/${feedback.id}`}>
            <h2>{feedback.title}</h2>
          </Link>
          <p>{feedback.body}</p>
        </div>
      ))}
    </div>
  );
}
```

# specific feedback using useParams
* useParams is a hook that allows us to get the id from the url
`const { id } = useParams();` // id is the id from the url
```js
export default function Feedback() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:1337/feedbacks/${id}`).then((res) => {
      setFeedback(res.data);
    });
  }, [id]);
  return (
    <div>
      <h1>{feedback.title}</h1>
      <p>{feedback.body}</p>
    </div>
  );
}
```