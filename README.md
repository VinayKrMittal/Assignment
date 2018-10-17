# Installation Steps:
    1. clone project in system
    2. cd inside Assignment
    3. If you have angular cli installed globally then run : ng serve 
    4. If not installed then install first by: npm install -g @angular/cli and repeat step 3.

# Project Credentials
   ### Username: vinay , Password: vinay

# Feature Description
 ## Home
    It Shows all the category of items
 ## Men
    It will show only Men's Category items
## Women
    It wil show only women's category items
## Flow of Project
    1. Click on the Image of any item
    2. select the no of items you want to buy
    3. Add to cart
    4. Item will be added to cart
    5. If item already added the current item count will be added in to previous count.

# Json Stucture
     items = [
      {
        id:1,
        name: "shirt1",
        type:"men",
        imgUrl:"men.png",
        subImg:["",""]
      }]
# All the data stored in session storage          

## Steps to make Production Build:
  1. cd in to Project
  2. run command: ng build --prod --build-optimizer
  3. A dist folder will be created inside your project
  4. You can run it with nginx,http-server or any other server.
    
