# DND Character Creator Developer's Manual

This manual is meant to be the de facto reference for developers to understand the components of this codebase.

## Development Constraints

This project was built not just to be a helpful tool, but to be a learning project for me. As such, there are a lot of constraints that apply to this project that probably don't appear often in the wild.

1. This project should only be built with tools native to html, css, and javascript.
2. There should be no code whatsoever copy/pasted from outside sources. All the code should be "original".
3. The code written should be modular and capable of being expanded in the future.
    - While I have no real intent of revisiting this project in the future, my hope is that other devs may choose to expand features at a later date. I want this codebase to be inviting to other devs, especially beginners like me.


## Architecture

This site isn't all that complicated, but here's the basics.

- All documentation, licenses, etc. should be placed in the docs directory.
- Any and all images should be placed in their own images directory.
- All scrips should be placed in a scripts directory (currently named javascript).
- There is presently no "pages" directory since my intention is to only have the one page on the site.


## General Design Logic

The page is designed to be responsive to users going step-by-step through the page. To achieve this (and since I'm basically an idiot) I implemented the following:

1. I use init.js to create a large object called sessionData that keeps track of all the variables that will be needed. This allows functions and elements to refer to a single place and find the data required.
    - The **sessionData** object is stored in Session Storage. I made this decision because I don't want clutter on the server and I see no reason to have data persist beyond a user leaving the site. Utilizing Session Storage seemed like the best approach.

2. **references.js** is a second file I use to keep track of reference values for things like what bonuses characters get for their race, etc. I plan to utilize this file later for other purposes like maintaining a list of spells, etc., but other methods may be used.


