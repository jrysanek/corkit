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

<details>
<summary>Desktop- SignUp</summary>
<img src="https://user-images.githubusercontent.com/61858219/85628042-77f49780-b63d-11ea-8d0e-ecd2d39ef5cb.png" >
</details>

<details>
<summary>Desktop- LogIn</summary>
<img src="https://user-images.githubusercontent.com/61858219/85628157-a5414580-b63d-11ea-84d3-7cfc47993c30.png" >
</details>


<details>
<summary>Desktop- Login-Landing</summary>
<img src="https://user-images.githubusercontent.com/61858219/85628209-bee28d00-b63d-11ea-8a7c-acc3e87aecd2.png" >
</details>

<details>
<summary>Desktop- User-Logged-In</summary>
<img src="https://user-images.githubusercontent.com/61858219/85628274-e0437900-b63d-11ea-8de2-37384cc84ad8.png" >
</details>


<details>
<summary>Tablet- Home</summary>
<img src="https://user-images.githubusercontent.com/61858219/85754066-c6a43f00-b6da-11ea-8f14-e059f7ad0dc3.png" >
</details>


<details>
<summary>Tablet- Sign-Up</summary>
<img src="https://user-images.githubusercontent.com/61858219/85754352-fc492800-b6da-11ea-906f-acc0f5745831.png" >
</details>

<details>
<summary>Tablet- Login</summary>
<img src="https://user-images.githubusercontent.com/61858219/85754435-0cf99e00-b6db-11ea-906f-0a6f18a08e3f.png" >
</details>

<details>
<summary>Tablet-Login-Landing</summary>
<img src="https://user-images.githubusercontent.com/61858219/85754529-200c6e00-b6db-11ea-80e5-e8fa0ed32b21.png" >
</details>

<details>
<summary>Tablet- User-Logged-In</summary>
<img src="https://user-images.githubusercontent.com/61858219/85754702-4a5e2b80-b6db-11ea-9e08-ff434f044976.png" >
</details>


<details>
<summary>Mobile- Home</summary>
<img src="https://user-images.githubusercontent.com/61858219/85755015-9315e480-b6db-11ea-85d8-4c93e580a721.png" >
</details>

<details>
<summary>Mobile-Login</summary>
<img src="https://user-images.githubusercontent.com/61858219/85755093-a1fc9700-b6db-11ea-935f-18355be862af.png" >
</details>

<details>
<summary>Mobile-Sign-Up</summary>
<img src="https://user-images.githubusercontent.com/61858219/85755196-b93b8480-b6db-11ea-9f00-f803b95d05b5.png" >
</details>

<details>
<summary>Mobile- Landing-Login</summary>
<img src="https://user-images.githubusercontent.com/61858219/85755270-c9ebfa80-b6db-11ea-97fe-8292caef5e4d.png" >
</details>

<details>
<summary>Mobile- User-Login</summary>
<img src="https://user-images.githubusercontent.com/61858219/85755374-e12ae800-b6db-11ea-8b0f-37730ebd4cb5.png" >
</details>

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

![corkit_erd](https://user-images.githubusercontent.com/61858219/85780761-f65f4100-b6f2-11ea-8b4a-fa4f49634a7d.png)


<br>

***

## Post-MVP

- Add CRUD abilities where needed for the rest of the sections
- Make design look more like a cork board by adding the pin icons

***

## Code Showcase



## Code Issues & Resolutions
