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
