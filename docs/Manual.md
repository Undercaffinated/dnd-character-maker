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

2. The elements and scripts within the page are structured sequentially.
    - Elements and their scripts located further down the page often rely on previous elements being performed as intended. Otherwise they may behave in unexpected ways.


## Naming Things

I realize that I suck at naming things. That said, I've tried to maintain at least a few standards:

1. I use dashed names for element IDs. Ex: "bonus-points-remaining-2b"
2. I use camel case for function and variable names.
3. Names should be descriptive and should include the step they relate to if the name would otherwise be confusing.


## Objects and Functions in Depth

### Finish For Me

Related: Finish for Me <button>, finishForMe.js, finishForMe().

#### Usage

Once completed, when this button is clicked, it will randomly generate a character based on class, race, level, and background, and will update all the relevant fields on the page and all relevant properties of the sessionData object. Additionally, if the feature to export the created character is implemented, the Finish For Me button should open a dialogue allowing the player to print out the created character.


