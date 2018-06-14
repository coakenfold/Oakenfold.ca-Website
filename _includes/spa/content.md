## Single Page Applications

Visitor’s expectations of their online experience are constantly evolving. Single Page Applications provide a sophisticated and seamless website experience that feels like a native application. A user interface is an extension of brand and differentiates an organization from their competitors.

I developed, prototyped, and refined the frontend code for [Fyndit.com](//fyndit.com/wanted_found). Key features and deliverables include:

- HTML markup
- CSS styling
- A 'scripting only' CSS class name, e.g.: `.js-*`. No `.css` styles attached to those classes. Useful for:
   - initializing components
   - setting state of elements
   - event binding
- App Shell setup: a site frame, new content inserted into a dedicated `<div>`
- Javascript:
   - Searched business locations using Google Places and Foursquare. Results plotted to Google Maps
   - User registration and login flows. Includes support for authenticating via Google, Facebook and Twitter
   - Delayed loading of 3rd party libraries until they were on the page or had been interacted with by the user
   - Search and Autocomplete features
   - "Rehydrated" redis cached interface state via an inline .js {obj} (e.g: "the user has liked this item so update it's styling")
   - Routed xhr requests through a central function. Useful for adding pre and/or post request scripting
- Code splitting at a component level
   - 2 main javascript bundles: core application scripting and related library files. The rest is dynamically loaded
   - components initialize via a callback that is registered with a central function. Communication via pubsub
- Cross-browser tested. Most features supported down to Internet Explorer 11 on Windows 8.1
