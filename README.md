# r3fscroll
A ```react``` / ```react-spring``` / ```react-three-fiber``` sandbox to bring attention to an event capturing / bubbling issue in adjacent components. Specifically: the ```scroll-container``` ```div```, which is adjacent to the ```Canvas``` consumes all pointer events, preventing the ```Canvas``` and its children from capturing them.

Sandbox: https://codesandbox.io/s/github/PaulBenMarsh/r3f-scroll
