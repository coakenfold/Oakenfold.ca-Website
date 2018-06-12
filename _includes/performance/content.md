<h2 class='card__title'>Web Performance</h2>

How fast a site loads has a direct impact on conversion rates, visitor retention, and revenue.

Web performance requires research, learning, and implementation of a wide range of strategies.

> "it was found that sites loading within 5 seconds had 70% longer sessions, 35% lower bounce rates, and 25% higher ad viewability than sites taking nearly four times longer at 19 seconds."

<div  class='blockquote-cite'><a href="//developers.google.com/web/fundamentals/performance/why-performance-matters/">Why Performance Matters</a></div>


---

I had good results with:

- Frequent and early [WebPagetest](https://www.webpagetest.org/easy.php) testing using [recommended settings](//developers.google.com/web/fundamentals/performance/rail#load).
- Component based code splitting
- Lazy loading 3rd party scripts
    - dynamically insert the `<script>` tags after an event (e.g.: the visitor interacted with the element) 
    - add the `async` attribute to `<script>`s that are in the source
- Enabling http/2 for 'multiplexing multiple requests over a single TCP connection' [HTTP/2](//en.wikipedia.org/wiki/HTTP/2)
- Cache what you can

---

For the 2018 [fyndit.com](//www.fyndit.com/wanted_found') release, page load performance was tested with [webpagetest.org](//webpagetest.org). Focusing on the **_initial load over a slow 3G connection using a mid-tier mobile device._**

The new version outperformed the previous release in several key metrics:

- **First Interactive** time went from 17.959s down to 7.918s. **A 56% reduction.**
- **Fully Loaded Bytes In** size went from 1084kb down to 749kb. **A 30% reduction.**
- **Fully Loaded Time** went down from 27.476s to 25.09s. **A 8.67% reduction.**


Fyndit.com had better **Fully Loaded Time** compared to sample pages from Amazon 
<sup>[1](//www.amazon.com/Instant-Pot-Muti-Use-Programmable-Pressure/dp/B01MFEBQH1?pd_rd_wg=..._gw_ri&pf_rd_r=Q7PY8RX7D8SFP21X309C&pf_rd_p=7b6d690e-1944-54ab-a4d2-4eb3bd7e198b)</sup>, 
Reddit 
<sup>[2](//www.reddit.com/r/mildlyinteresting/comments/7a2kjo/my_tape_dispenser_broke_and_it_was_filled_with/)</sup> 
and Twitter 
<sup>[3](//mobile.twitter.com/HarjitSajjan/status/926133170097057792)</sup>

- **58.42%** faster than Amazon
- **29.79%** faster than Reddit
- **6.27%** faster than Twitter