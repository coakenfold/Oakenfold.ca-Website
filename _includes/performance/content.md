<h3 class='card__title'>Web Performance</h3>

How fast a site loads has a direct impact on conversion rates, visitor retention, and revenue.

> ... it was found that sites loading within 5 seconds had 70% longer sessions, 35% lower bounce rates, and 25% higher ad viewability than sites taking nearly four times longer at 19 seconds.

[Why Performance Matters](//developers.google.com/web/fundamentals/performance/why-performance-matters/')

Researching, learning and implementing successful strategies in production. Including:

- require.js dynamic includes"
- lazy loading 3rd party
- http/2
- webpagetest
- Cache static content, reduce expensive db calls, inline cache .json to rehydrate state

For the second release (<abbr>V2</abbr>) of [fyndit.com](//www.fyndit.com/wanted_found'), page load performance was tested at [webpagetest.org](//webpagetest.org) against the **_initial load on a slow 3G connection using a mid-tier mobile device._**

This latest version of the site outperformed the previous release in several key metrics:

- **First Interactive** time went from 17.959s down to 7.918s. **A 56% reduction.**
- **Fully Loaded Bytes In** size went from 1084kb down to 749kb. **A 30% reduction.**
- **Fully Loaded Time** went down from 27.476s to 25.09s. **A 8.67% reduction.**

V2 also outperformed sample pages from Amazon 
<sup>[1](//www.amazon.com/Instant-Pot-Muti-Use-Programmable-Pressure/dp/B01MFEBQH1?pd_rd_wg=..._gw_ri&pf_rd_r=Q7PY8RX7D8SFP21X309C&pf_rd_p=7b6d690e-1944-54ab-a4d2-4eb3bd7e198b)</sup>, 
Reddit 
<sup>[2](//www.reddit.com/r/mildlyinteresting/comments/7a2kjo/my_tape_dispenser_broke_and_it_was_filled_with/)</sup> 
and Twitter 
<sup>[3](//mobile.twitter.com/HarjitSajjan/status/926133170097057792)</sup>.