<h2 class='card__title'>Single Page Applications</h2>

Visitors expectations of a website are constantly evolving.

Single Page Applications provide a sophisticated and seemless experience that feels like a native application.

**A user interface is an extension of the brand** for a business, service, or product and can differentiate a company from their competitors.

---

Developed and refined the frontend code for [Fyndit.com](//fyndit.com/wanted_found).

Including...

- Html markup.
- CSS styling.
- Searched business locations using Google Places and Foursquare. Results plotted to Google Maps.
- CSS class name '.js-*' reserved for scripting purposes. No .css styles attached to classes. Useful for: initializing components, setting state of elements, event binding. <a href='#'>Example.</a>
- User registration and login flows. Includes support for authenticating via Google, Facebook and Twitter.
- Delayed loading of 3rd party libraries until they were on the page or had been interacted with by the user. <a href='#'>Example.</a>
- Search and Autocomplete features.
- The backend/server was setup to cache static elements (via redis). "Rehydrated" interface state via an inline .js {obj} (e.g: "the user has liked this item so update it's styling").  <a href='#'>Example.</a>
- Routed xhr requests through a central functon. Useful for adding pre and/or post request scripting. <a href='#'>Example.</a>
- App Shell setup: a site frame where new content is inserted into a dedicated div. <a href='#'>Example.</a>
- Used SVG symbols. Great for image reuse in multiple locations.  <a href='#'>Example.</a>
- Code splitting at a component level.
    - 2 main javascript bundles: core application scripting and related library files. The rest is dynamically loaded.
    - Created a system where components register their selectors with a function. When the dom is updated, it scans a div and calls any existing components.
- Cross-browser tested. Most features supported down to Internet Explorer 11.
