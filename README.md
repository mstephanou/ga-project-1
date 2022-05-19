# Project 1 - Solo

For my first project in the General Assembly Software Engineering Immersive Course, I was tasked to make a grid-based game inspired by the classic arcade title **Frogger**, utilising the JavaScript skills I have acquired up to this point.

### Project Duration: 7 Days

### Technologies Required: HTML, CSS, JavaScript ES6+

### Link to the game: [Frogger](https://mstephanou.github.io/ga-project-1/)

## Brief

**Frogger** is a grid-based game where the player - _a frog_ - starts at the bottom of the grid, and must travel to the top of the grid to beat the game. The player must pass two obstacles before reaching the goal:
The first obstacle is a road in which cars will be travelling left and right. The player must cross the road while avoiding the cars.
The second obstacle is a river, where there will be logs floating left and right. The player must cross the river while avoiding the water. This will act as the reverse of the first obstacle - instead of avoiding the logs the player must get on them to cross to the other side and reach the goal.

In the Frogger brief, the requirements for completion were:

- The game should be playable for one player.
- The obstacles should be auto-generated.

# Process

## Day 1

I spent most of the day planning out how I wanted to tackle the project. I sketched a rough grid design for the game, and considered which methods could potentially be useful to achieve my goals.

Please find attached a whiteboard mock-up of how I planned to build this game, utilising the skills I have learned so far.

![project 1 whiteboard](./assets/project-1-whiteboard.png)

## Day 2

With my MVP goals in mind, my first task was to create a grid that would be the basis for the game board, and would house all of the moving parts inside. To achieve this, I created an empty array and passed that array into a forLoop, creating new divs via the DOM and then adding those new divs onto the grid on each cycle.

![Project 1 grid](./assets/frogger-grid.png)<br>
![Grid logic](./assets/gridlogic.png)<br>

## Day 3

With my grid created, I then moved onto the first requirement for MVP - write logic for the player to move. To achieve this, I wrote a function that handled an eventListener that ran checks on each new key press against the frogs movement.

![moveFrog function](./assets/moveFrog.png)<br>
![Frog gif](./assets/frogMoving.gif)<br>

## Days 4 & 5

These were the most challenging days for me. I had to figure out the functionality for moving the obstacles automatically whilst factoring in the collision detection for the cars, and for the water. Knowing I had to automate obstacles moving from right to left, I created functions for every row that contained cars, logs, rows and water. I had a eureka moment when I realised that I could implement similar logic used to move the frog to my obstacles.

![carsLeft logic](./assets/carsLeft.png)<br>
![carsRight logic](./assets/carsRight.png)<br>

## Days 6 & 7

With my MVP achieved, I spent most of the days researching royalty-free sprites and .wav files to add to my game. This process I feel was not only enjoyable but important, because they add more depth to the players' experience.

# Featured Code

## Wins

### win/lose condititions

I was particularly proud of these because I felt they handled quite complex computations, accounting for the players movement and running concurrent checks with each keypress.

![win/lose conditons](./assets/win:lose.png)<br>

![Win screen](./assets/frogWin.gif)<br>

![Lose screen](./assets/frogLose.gif)<br>

## Challenges

### Detection collision

The main challenge of the project was trying to keep account for collision detection for the player and the interaction.

## Bugs

The player is able to move the frog freely around the grid before starting the game. Could also be viewed as a "training mode" feature :)

## Wishlist

Given more time, I would like to have added more levels to the game with the idea that all obstacles and platforms would be procedurally generated quicker for increased difficulty.

## Key learnings

I really enjoyed this first project, I felt like a lot of the concepts of JavaScript were cemented through working on this project.
I feel like I still have more room to improve, however I am very happy with how my first project turned out.

### Assets by:

<a href="https://www.flaticon.com/free-icons/frog" title="frog icons">Frog icons created by Freepik - Flaticon</a><br>
<a href="https://www.flaticon.com/free-icons/road" title="road icons">Road icons created by Smashicons - Flaticon</a><br>
<a href="https://www.flaticon.com/free-icons/reeds" title="reeds icons">Reeds icons created by Good Ware - Flaticon</a><br>
<a href="https://www.flaticon.com/free-icons/river" title="river icons">River icons created by Freepik - Flaticon</a><br>
<a href="https://www.flaticon.com/free-icons/wood" title="wood icons">Wood icons created by Good Ware - Flaticon</a><br>
<a href="https://www.flaticon.com/free-icons/car" title="car icons">Car icons created by vectorsmarket15 - Flaticon</a><br>
<a href="https://www.flaticon.com/free-icons/car" title="car icons">Car icons created by Vectors Market - Flaticon</a><br>
<a href="https://www.flaticon.com/free-icons/bus" title="bus icons">Bus icons created by DinosoftLabs - Flaticon</a><br>
<a href="https://www.flaticon.com/free-icons/truck" title="truck icons">Truck icons created by BZZRINCANTATION - Flaticon</a><br>

Background music from PlayOnLoop.com
Licensed under Creative Commons by Attribution 4.0
