Run `npx create-react-app my-app` - you will run `npm install react-scripts@latest` to update tooling

Check to ensure no issues with base creation by CD into folder and running `npm start`.

Move files and folder from `src` to `my-app/src`

# Adding In Sections Made From Volunteers

## For Header

For our project, there were errors as some styling was done with npm packages and elements were missing. Had to redo this by:
- changing index.jsx to `header.jsx`
- ran `npm install styled-components` since it was used in HEADER and LOGO (more info [here](https://styled-components.com/))
- imported CSS
- split HTML because it had navigation inside of header

## For Logo

Is a subportion of Header, currently. But it's own element.

Need to update location for img to a random image in `public`, but currently ust using a local image. Updated and ensured logo output was working for Header.

1. import the element in App.js

## For Nav (part of Header)

1. ran `npm install jquery` to support the Nav needs
2. integrated Nav code from another project & updated names

Until the other sections are added, this might continue to be broken when clicking on the links.

Attempted to resolve setActiveNarStr, but instead commented it out for now, as it requires additional pieces.

## For About

1. Created `About.js` file and started out with simple, empty component creation.

    ```javascript
    import React from 'react';
    import './About.css';

    const About = () => {
        return (
            <section id="About">
                
            </section>
        )
    }

    export default About;
    ```

2. Added Component to main App.js - when no issues found, integrated HTML into component & imported CSS. Confirmed no blaring issues (other than visual)

## For Projects

1. Did same for About

2. Updated `clsas` to `className` and added `/` to end of images

3. Ensured CSS matched - updated as necessary

Projects will need to be further broken down so we can use a template card and data file.

## For Mission Statement

This was from [the original code](https://github.com/codefordallas/codefordallas.github.io/tree/pre2023) - more specifically [here](https://github.com/codefordallas/codefordallas.github.io/tree/pre2023/src/components/Mission).

Decided to keep as an example and put into a component of About. This was super easy to implement - just imported into `About.js` and added somewhere in the HTML.

## For Donations

This section was not yet created so nothing was done for it.

# For Contact

TBD

## For Footer

1. extracted CSS from HTML file

2. Created `Footer.js` file and started out with simple, empty component creation.

    ```javascript
    import React from 'react';
    import './Footer.css';

    const Footer = () => {
        return (
            <footer id="Footer">
                This is the footer!
            </footer>
        )
    }

    export default Footer;
    ```

3. Added Footer component to App

4. After confirming nothing broken, integrate Footer HTML section

    We still need to replace link words with images. This can come as an enhancement. Would be better to create a template like projects so we can easily add more (or remove) later without touching the code itself.

# New Additions

Aside from cleaning up unused code ...

## WayPoints

Used to help the menu change colors as sections are scrolled through. Added into other sections.

## COMPONENT:  Donations

1. Created folder for compomnent

2. Created `Donations.js` file.

    ```javascript
    import React from 'react';
    import './Donations.css';

    const Donations = () => {
        return (
            <section id="Donations">
                This is the donations section!
            </section>
        )
    }

    export default Donations;
    ```

3. Created `Donations.css` file with background color so we can see where it is.

    ```html
    #Donations {
        background-color: burlywood;
        /* margin-top: 1rem;
        margin-bottom: 1rem; */
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    ```

Then added it and a WayPoint