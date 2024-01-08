# Compound bodies in Arcade Physics

A Pen created on CodePen.io. Original URL: [https://codepen.io/tintouin/pen/vYPLwyW](https://codepen.io/tintouin/pen/vYPLwyW).

The ship's physics body is used for movement and three extra component bodies are used for collisions. Their positions need to be updated manually.

For true collisions (i.e., separation with bounce), you need to transmit the ship's velocity to its components during `update()` and transmit any colliding component's velocity to the ship in the collision handler.

If you don't need collisions with separation, then the components don't need any velocity at all.

**Move with cursor keys**.