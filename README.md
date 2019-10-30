# Salestack Frontend by Mfonism

This is a rewrite of the front-end of the site at https://salestack.io by me.

Please find the live site at: https://mfonism.github.io/salestack-frontend/home.html


## Backstory

I have an eye for design.

Anytime I come across a design that's both aesthetically appealing and consistent, I take mentally doff my hat to its creators. And anytime I come across a design with issues, the voices in my head scream __fix!__

Usually, if it's a live website, I invoke developer tools on my browser and play with it for a bit (in my free time), fixing the design in-browser. And at the end of it I leave with the satisfaction that I fixed something, albeit locally.

The other day, I was surfing the web for companies that use Python for software development and came upon this company, Salestack, with an awesome story. I loved the story their website told, but had some issues with the overall look and feel of the site. The OCD in me immediately lept out, with so much energy, and I knew I wouldn't be able to rest until I fixed the issues - at least the ones on the home page.

So, I set out to fix it. And to document the process.


## The Fixes

This documentation covers the changes I made to the home page of the site at https://salestack.io in non-technical language.

The screenshots were taken on a Samsung Galaxy S5.


### Expanded Menu on Mobile

__Original Design__

![original design: expanded menu on mobile](/_screenshots/original/expanded-menu.png?raw=true)

* The menu items when stacked vertically, are altogether taller than the space allotted to the menu itself, and for this reason some of the menu items are hidden out of view.
* The menu itself is not well-positioned and one could say it has a shy personality :).
* The __X__ icon for closing the menu is not exactly in top shape.

__My Fix__

![my fix: expanded menu on mobile](/_screenshots/fix/expanded-menu.png?raw=true)

* The menu is large enough for all its items to be visible.
* The menu expands as a dialog box, horizontally centred on the page, with shadows so it looks raised off of the page.
* The icon for closing the menu is now unobstructed, and looks great.


### Top App Bar (when page is scrolled)

__Original Design__

![original design: top app bar on scrolled page](/_screenshots/original/topbar.png?raw=true)

* The top app bar gets fixed in a position where almost half of its height is scrolled out of view through the top of the screen (notice how the logo and the menu icon are no longer legible).

__My Fix__

![my fix: top app bar on scrolled page](/_screenshots/fix/topbar.png?raw=true)

* The top app bar gets fixed such that its top is flush with the top of the screen.


### Expanded Menu on Mobile + Top App Bar (when page is scrolled)

__Original Design__

![original design: expanded menu on mobile + top app bar on scrolled page](/_screenshots/original/expanded-menu-with-topbar.png?raw=true)

* A cascade of the last two identified issues.

__My Fix__

![my fix:  expanded menu on mobile + top app bar on scrolled page](/_screenshots/fix/expanded-menu-with-topbar.png?raw=true)

* Previous two fixes apply.


### Page Scrolls Sidewards

__Original Design__

![original design: page scrollx](/_screenshots/original/page-scrollx.png?raw=true)

* Page is wider than the screen, and therefore is able to scroll sidewards.

__My Fix__

![my fix: page scrollx](/_screenshots/fix/page-scrollx.png?raw=true)

* Page is same width with screen. No sideward scrolling.


### Breathing Space Around Elements

__Original Design__

![original design: little or no breathing space around elements](/_screenshots/original/spaces.png?raw=true)

* Little or no breathing space existing around logical groups of elements. Increases the cognitive load for telling groups of elements apart.

__My Fix__

![my fix: sufficient breathing space exists around elements](/_screenshots/fix/spaces.png?raw=true)

* Sufficient breathing space making it easy to tell groups of elements apart.


### Section Dividers

__Original Design__

![original design: sections divided by horizontal line](/_screenshots/original/section-divider.png?raw=true)

* Sections are divided using thin horizontal lines. These dividers are ideal most of the time, but it is still a little difficult to spot the boundaries between sections with white backgrounds.

__My Fix__

![my fix: subtle, different coloring of sections](/_screenshots/fix/section-divider.png?raw=true)

* In addition to the horizontal dividers, alternating sections that would have otherwise had white background are now colored with a subtle shade of gray to aid the visual identification of section boundaries.


### Sizing Things Consistently

__Original Design__

![original design: inconsistent, unintuitive sizing of things](/_screenshots/original/sizing-things.png?raw=true)

* Font sizes aren't consistent throughout the site, and some images are _way_ smaller than they should be. In the snapshot above, the texts are too large compared to the image they accompany.

__My Fix__

![my fix: consistent sizing of things](/_screenshots/fix/sizing-things.png?raw=true)

* Font and image sizes are consistent and intuitive in relation to each other.


### Page Scrolls Beyond Footer

__Original Design__

![original design: page scrolls downwards beyond footer](/_screenshots/original/page-scrolly.png?raw=true)

* Page scrolls downwards beyond footer, to leave behind a large space between footer and bottom of screen.

__My Fix__

![my fix: no more downward scrolling beyond footer](/_screenshots/fix/page-scrolly.png?raw=true)

* Page doesn't scroll beyond footer.


### Other Fixes

* Consistent sizing of buttons.
* Well-behaved grids -- columns are appropriately resized and reflown for changing screen sizes.
* Well-behaved grid items.
