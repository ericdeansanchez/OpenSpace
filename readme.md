# OpenSpace Engineering

![OpenSpaceBrandBanner](docs/assets/OpenSpaceBrandBanner.png)

## Welcome to our GitHub!

We are a location services company passionate about time and space. That is, our focus is saving you time, energy, and other resources by finding you a space.

Finding a space––to sit, work, study, play, eat––is not something we often worry about––until we have to.

We are in the business of making sure you never have to.

## The Problem

UC Berkeley serves 30k undergrads, 11k grads, as well as the broader Berkeley and Academic community. It is difficult to manage resources efficiently; it is also difficult to find a place to study sometimes.

After thinking about this problem more deeply our team agreed that finding a space––any space––that is open and ready to be occupied is actually a bit of a chore. Our team became very enthusiastic about this problem and its solution.

## The Solution

>We put real-time data into the hands of staff and students so that they can make real-time decisions.

Walking to a library––or any other facility––that is full, is drain on one's energy and time. Students are short on these two resources to begin with.

### Technical Solution

**Goal**: Serve our customers real-time data.

In order to realize a solution to this problem we sought to distill our problem down to its simplest components:

* **Our Customers** - students, staff, and the university

* **Spaces** - campus facilities, neighboring establishments
  
* **The Decision** - does a given space fullfil _the_ need

![SolutionGraphic](docs/assets/solution_graphic.png)

1. A user wants to find a space
2. Using our app they can see what is more or less available and what suits their needs
3. Using sensor data from nearby places and neat APIs we empower our
   users.
4. Users can then make a better-informed decision––where (and when) to go.

### Architecture and Tools

We have experimented with different technologies; our prototype consisted of a bare-bones **Node.js** web application serving mobile-style views.

<div align="center"><img width="300px" height="350px" src="docs/assets/openspace2pointOh.png"></div>

However, we wanted to make our solution easy and fun to use so we kept searching for better architecture and better tools. We eventually chose to build a real-time mobile application with [Reat-Native](https://facebook.github.io/react-native/). React-Native allows us to write one application that we can cross compile to iOS and Android platforms.

We are combining the power of **Google APIs** + **Firebase** + the rich ecosystem surrounding **React-Native** to give our users general occupancy **statistics** of their first-choice space _and_ suggest nearby **alternatives**.

#### Mechanics

The mechanics of our application follow from our goals:

1. **GET** data from APIs, sensor data, and other data sources
2. Use **Google Maps, GeoEncoding, and Places APIs** to recommend nearby open spaces
3. Display this dynamic real-time content
