## Web Content Accessibility&nbsp;Guidelines

Accessibility is important.

It is a net benefit to provide access to more people. 

The more accessible and legible your content, the wider it can spread.

Legal action in the United States has recently increased over inaccessible websites.

<hr class="hr-spacer" />

[Animikii](//animikii.com) asked me to update and improve on an interactive timeline feature. The key deliverables were: 

- small screen compatibility
    - iOS support
- WCAG support: keyboard navigation, contrast, color, alternate text content, no inline scripts
    - [Forked TimelineJS3 to add a few accessibility features]().
- Content for the timeline was in an `data.xlsx` file. I converted it into multiple fomats using `xls2json`
    - data feed into the [TimelineJS3]() plugin
    - text for WCAG text alternative
- Used semanticly appropriate markup, and aria labels.