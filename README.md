# Cork It


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Cork It** is perfect place for a messy planner! Cork it is a digital cork board that you can store ideas for all your creative needs. This app has all the best parts of planning a project in one space, including, a shopping/to-do list, notes section, color scheme selection and photo inspiration. Use it to plan a party, redecorate a room or even story board a photoshoot.  _


<br>

## MVP

- User Login/Signup
- User Sign out
- Full CRUD on either Notes, To-Do or shopping lists section



<br>

### Goals

- _Get user Auth working_
- _create successful associations_
- _Enable CRUD features where necessary_
- _Create a cohesive design throughout site._


<br>

### Libraries



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Used for the Front-End application._ |
|   React Router   | _Used to create Routes._ |
|   Ruby on Rails  | _Used to create backend and CRUD functionality._ |


<br>

### Client (Front End)

#### Wireframes



<details>
<summary>Desktop- Home</summary>
<img src="https://user-images.githubusercontent.com/61858219/85627948-509dca80-b63d-11ea-90b8-e21583b4ba9a.png" >
</details>

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

 

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ shared/
          |__ Nav.jsx
      |__ SignUp.jsx
      |__ Login.jsx
      |__ LogOut.jsx
      |__ Landing.jsx
      |__ Room.jsx
      |__ Create.jsx
      |__ Update.jsx
      |__ Delete.jsx
      
|__ services/
      |__ API

```

#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Shared    | functional |   n   |   n   | _Will containe the Nav buttons._               |
| SignUp   | functional |   y  |   y   | _Will give the user the ability to make an account._       |
|  Login    |   functional    |   y   |  y  | _Allows user to Login to account._      |
| Landing | functional |   y   |   y   | _Where the user is sent to control all Rooms after Login._                 |
|    Footer    | functional |   n   |   n   | _The footer will show copyright info._ |
|    Logout    | functional |   y   |   n   | _Allows user to sign out of account and return to homepage._ |
|    Room    | functional |  y   |   y   | _The show page for landing, allows full CRUD._ |



#### Component Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Backend framework    |    H    |     6 hrs      |      hrs     |     hrs    |
| Create Frontend framework |    H     |     6 hrs      |      hrs     |     TBD     |
|Add Auth to backend  |    H     |     6 hrs      |      hrs     |     TBD     |
| Connect backend and front end |    H     |     4 hrs      |     hrs     |     TBD     |
| CRUD BACKEND |    H     |     8 hrs      |      hrs     |     TBD     |
| CRUD Frontend |    H     |     8 hrs      |      hrs     |     TBD     |
| Test backend functionality |    H     |     3 hrs      |      hrs     |     TBD     |
| Test front end functionality |    H     |    3  hrs      |      hrs     |     TBD     |
| Add Styling |    H     |     8 hrs      |      hrs     |     TBD     |
| Finish Styling|    H     |     7 hrs      |      hrs     |     TBD     |
| Testing |    H     |     6 hrs      |       hrs     |     TBD     |
|Deploy |    H     |     6 hrs      |       hrs     |     TBD     |
| TOTAL               |          |     hrs      |     hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.

<br>

***

## Post-MVP

- Add CRUD abilities where needed for the rest of the sections
- Make design look more like a cork board by adding the pin icons

***

## Code Showcase



## Code Issues & Resolutions
