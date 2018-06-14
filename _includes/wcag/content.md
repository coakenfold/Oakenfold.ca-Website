## Web Content Accessibility&nbsp;Guidelines

Accessibility is increasingly important and often overlooked.  It is a net benefit to provide access to more people.The more accessible and legible your content, the wider it can spread.

Legal action in the United States has recently increased over inaccessible websites.

[Animikii](//animikii.com) asked me to update and improve an interactive timeline feature. The key deliverables were:

- small screen compatibility
   - iOS support
- WCAG support: keyboard navigation, contrast, color, alternate text content, no inline scripts
   - [Forked TimelineJS3 to add a few accessibility features](//github.com/coakenfold/TimelineJS3/commits/a11y)
   - Full AA and partial AAA compliance
- content for the timeline was in an `data.xlsx` file. I converted it into multiple formats using `xls2json`
   - data feed into the [TimelineJS3](//timeline.knightlab.com/) plugin
   - text for WCAG text alternative
- used semantically appropriate markup, and aria labels
