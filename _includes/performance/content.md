## Web Performance

The speed at which a site loads directly  impacts conversion rates, visitor retention, and revenue. Web performance requires research, learning, and implementation of various  strategies.

<hr class="hr-spacer" />

I have had success with:

- Frequent and early [WebPagetest](https://www.webpagetest.org/easy.php) testing using [recommended settings](//developers.google.com/web/fundamentals/performance/rail#load)
- Component based code splitting
- Lazy loading 3rd party scripts
   - dynamically insert the `<script>` tags after an event (e.g.: the visitor interacted with the element)
   - adding the `async` attribute to `<script>`s that are in the source
- Enabling [HTTP/2](//en.wikipedia.org/wiki/HTTP/2) for 'multiplexing multiple requests over a single TCP connection'
- Cache what you can
