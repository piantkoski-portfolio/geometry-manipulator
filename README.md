> This a work in progress, so this document should receive many updates in the next weeks (maybe months).

# Geometry manipulator

Geometry manipulator is a software to manipulate geometries in the browser. The purpose of it is to teach its owner how to handle CAD software problems in a web application.

## Main features

- add new geometry item by clicking a button
- select the correct geometry in the scene
- attach new geometries to a specific point in the canvas
- manipulate geometry items (morph, add material, smooth, remove material)
- export/import data as JSON

## How should I get there?

By creating a React application and using managers, commands to handle tools and mesh selection, click events, and everything else that makes it work.

### Why managers and commands pattern?

To be honest, I don't know. This is how it's solved in an application I've been selected to work on. I didn't participate on decision making, so here I'm gonna model the same patterns and architecture used there with only one purpose, **learn and get used to it**.
