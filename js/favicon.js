'use strict';

// Loading a base64 favicon from a javascript file so:
//  1. It doesn't take an extra server request, and
//  2. Browsers can still cache it

let heart="AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD/fwAA/j8AAPwfAAD4DwAA8AcAAOADAADgAwAA4AMAAOCDAADxxwAA//8AAP//AAD//wAA";

let docHead = document.getElementsByTagName("head")[0],
    newLink = document.createElement("link");

newLink.rel = "shortcut icon";
newLink.href = `data:image/png;base64,${heart}`;
docHead.appendChild(newLink);