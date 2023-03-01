# 

* add react router to  your app

    * npm I D react-router-dom

* mirage js - to mockup backend API
    * npm install --save-dev miragejs


## if you want to see how to fetch from backend api
    ## just look in vans.jsx

## if you want to see about routing
    ## just look in App.js
#### nested routing
 *  write your route like this, the id can be any variable<Route path="/vans/:id" element ={<VanDetail />} /> 
 * : tells react it is a variable
 * useParams -> to catch the variable that you sent in the link
 * don't forget to wrap up the detils that you want to show in <Link > tag

 ## Nested Routes