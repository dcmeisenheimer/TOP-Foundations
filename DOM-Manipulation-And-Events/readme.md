DOM Manipulation and Events Lesson Overview

- Explain what the DOM is in relation to a webpage.
    1. DOM - Document Object Model:
        A tree-like representation of the contents of a webpage.
        A tree of 'nodes' with different relationships depending on how they're arranged in the html document.

- Explain the difference between a 'node' and an 'element.'
    1. Node is a generic name for any type of object in the DOM Hierarchy.
        A node could be 'document' or 'document.body'
    2. Element is one specific type of node.
        An element could be a 'text nodes' or 'comment nodes' etc.

- Explain how to target nodes with 'selectors.'
    1. When working with the DOM you use 'selectors' to target the nodes you want to work with.
    2. You can use a combo of CSS-style selectors and relationship properties to target nodes.
        #container > .display
    3. Relational Selectors:
        firstElementChild or lastElementChild etc.

- Explain the basic methods for finding/adding/removing and altering DOM nodes.
    1. Finding Nodes - Query Selectors:
        element.querySelector(selector) returns a reference to the first match of selector.
        element.querySelectorAll(selectors) returns a 'nodelist' containing references to all of the matches of the selector.
            The return value looks like an array but it is not.
    2. Adding Node - Element Creation:
        document.createElement(tagName, [options]) creates a new element of tag type tagName.
        the function does not put new element in DOM but creates it in memory. 
            This is so you can manipulate the element (adding styles, classes, id, text, etc). Before placing it on the page.
    3. Place Elements within the DOM:
        Append Elements - parentNode.appendChild(childNode) appends childNode as the last child of parentNode.
    4. Removing Elements - parentNode.removeChild(child) removes child from parentNode on the DOM and returns a reference to child.
    5. Altering DOM Nodes - Altering Elements:
        style.color, style.cssText, setAttribute(), etc.
        
- Explain the difference bewteen a 'nodelist' and an 'array of nodes.'
    1. 
- Explain what 'bubbling' is and how it works.
