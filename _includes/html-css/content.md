<h2 class='card__title'>HTML, CSS</h2>

The oakenfold.ca `html/css` version of the site was initially prototyped with hand coded `html/css`.

As the complexity increased it was switched to the [Jeckyll](//jekyllrb.com/) static site generator. Benefits included:
 - sustained velocity
 - improved code
 - increased developer comfort

[WatchMojo](//watchmojo.com) asked me to provide a prototype `html/css page` for a new product they were developing. 

- handcoding `.css` tends to reduce selector chains and number of declarations
- handcoding `html` tends to reduce markup
- Used [critical.css](//github.com/addyosmani/critical) to extract & inline critical-path `CSS` from `HTML`
- Created small utility scripts that cloned sample markup in order to populate the page, i.e: `lorem ipsum` for interface elements