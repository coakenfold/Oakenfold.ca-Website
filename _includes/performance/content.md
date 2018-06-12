## Web Performance

How fast a site loads has a direct impact on conversion rates, visitor retention, and revenue.

Web performance requires research, learning, and implementation of a wide range of strategies.

> "it was found that sites loading within 5 seconds had 70% longer sessions, 35% lower bounce rates, and 25% higher ad viewability than sites taking nearly four times longer at 19 seconds."

<div  class='blockquote-cite'><a href="//developers.google.com/web/fundamentals/performance/why-performance-matters/">Why Performance Matters</a></div>

<hr class="hr-spacer" />

I had success with:

- Frequent and early [WebPagetest](https://www.webpagetest.org/easy.php) testing using [recommended settings](//developers.google.com/web/fundamentals/performance/rail#load).
- Component based code splitting
- Lazy loading 3rd party scripts
    - dynamically insert the `<script>` tags after an event (e.g.: the visitor interacted with the element) 
    - add the `async` attribute to `<script>`s that are in the source
- Enabling http/2 for 'multiplexing multiple requests over a single TCP connection' [HTTP/2](//en.wikipedia.org/wiki/HTTP/2)
- Cache what you can
