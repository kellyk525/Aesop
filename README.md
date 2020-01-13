# Background

Aesop-Kelly is an E-commerce website that allows users to browse through and shop Aesop products. Users are also able to find additional information regarding the brand's history, location, and much more. 

![](https://github.com/kellyk525/Aesop/blob/master/app/assets/images/gif-four.gif)

# Technologies Used
* Ruby on Rails
* PostgreSQL
* React
* Redux

# Functionality

### User Authentication (Login / Sign Up)

Login and Sign Up forms are rendered on modals. Users can login or sign up to add products to their shopping cart and checkout.

![](https://github.com/kellyk525/Aesop/blob/master/app/assets/images/gif-seven.gif)

### Individual Product Details

Individual product information are dynamically rendered on the page.  

![](https://github.com/kellyk525/Aesop/blob/master/app/assets/images/gif-six.gif)

### Nested Sidebar

Implemented triple nested sidebar functionality through React state management to display products by their categories. Once the user hovers over a product name, the third sidebar will be displayed with information regarding the hovered product. I created separate reducers to fetch filtered products depending on the category or product name the user hovered over.

![](https://github.com/kellyk525/Aesop/blob/master/app/assets/images/gif-three.gif)

### Shopping Cart

Implemented CRUD feature with dropdown shopping cart and checkout system, which are accessible from every page. Logged in users are able to add items to their shopping cart, update the quantities of each item, and remove items. For the dropdown functionality, I managed React state to only render the shopping chart when the user clicks on the cart button located in the navigation bar. I integrated DOM manipulation and pop-up modals to ensure consistent flow of UI and improve communication with user.

![](https://github.com/kellyk525/Aesop/blob/master/app/assets/images/gif-two-new.gif)

### Filter and Product Index

![](https://github.com/kellyk525/Aesop/blob/master/app/assets/images/filter.gif)

# Bonus Features

### Search Bar

Integrated advanced Search based on product name, main category, subcategory, texture, and aroma. Results are updated based on user's input.

![](https://github.com/kellyk525/Aesop/blob/master/app/assets/images/gif-five.gif)


### Product Filter

![](https://github.com/kellyk525/Aesop/blob/master/app/assets/images/filter.gif)



