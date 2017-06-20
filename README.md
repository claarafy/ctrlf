# Project 03: Ctrl+F
---
**Ctrl + F** is an online platform that offers two essential functionalities that do not currently exist: One is to review webpages within a web-search application and two, to add additional information such as comments and users’ suggested results to web queries in order to improve search algorithms and therefore to add value to the users’ web-search experience. 

[Explore Ctrl+F here!](https://arcane-hollows-97544.herokuapp.com/)

## Installation

**For Users:** <br>
1. Visit Ctrl+F [here](https://arcane-hollows-97544.herokuapp.com/). <br>
2. Sign up and log in, if you'd like. All service is available without logging in at the moment. <br>
3. Proceed with your search by inputing query keywords or phrases in the input field. <br>
4. Click on the link you'd like to see. (Not all webpages are all available at the moment; some webpages have blocked external access.) <br>
5. Click on the semi-circular **Ctrl+F** tab on the bottom to view or leave comments about the webpage, content, services, and etc. <br>
6. Explore!

**For Developers:** <br>
1. Fork and clone **ctrlf** repository. <br>
2. Run ```mongod``` and ```nodemon``` commands inside the main directory. <br>
3. Go to **localhost://3000** in your browser. <br>
4. Work your magic! 



## Preview
![](images/home.png)
![](images/show.png)


## Development & Technologies

This application is built using Node.js with express, mongoDB, jQuery/Javascript, AJAX, CSS/Bootstrap, milligram, HTML. 3rd party API used is "Bing".


## Project Procedure
- Product Decision: Our team reached a consesus based on anaylizing what users primarily use search engines for. We wanted to develop a search engine where one can both search and add data to the result.
- Work distribution: After scoping out the project, work was distriubted based on the final merge point, which was the search result render with our application data appended. 
- Communication: Combination of individual work and paired-programming required our team to communicate frequently and think in parallel to each other.
- Polish & Publish: With the MVP accomplishment, we added additional features and polished the interface for better user experience.

## MVP
Users are able to query/search for the results and also able to view/add comments on the page. Both the original result and added comments viewable in the same page.

##Project Organization
**Wireframe**
![](images/wireframe.png)
**ERD Model**
![](images/model.png)

[User Stories List](https://onedrive.live.com/view.aspx?resid=9ED0BDE3A110F6D7!128&ithint=file%2cxlsx&app=Excel&authkey=!AI2UPK9WIDdOW7Y)

[Trello Board](https://trello.com/b/DaBpYK8g/project-03-ctrl-f)

## Unsovled Problems
- Retaining the original webpage's features as users proceed in the application.
- Speedy search problems

## Dream Features
- Chrome extension/plugin utility
- Attach comments to a specific part of the webpage
- Sorting results according to user's reactions
- Displaying/featuring contents curated by users
- Complex ctrl+F commands





