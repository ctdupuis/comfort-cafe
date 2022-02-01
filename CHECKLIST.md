#  Top Level Goals

[x] authentication

[x] online ordering

[x] responsive design


## Auth

[x] set up express-session

[x] create users and create new session

[x] existing users can log in and out

[x] auth endpoint to check if someone's logged in

[x] different authorization front end blocks/permissions

## Ordering

[x] Order model tied to User model

[] Order History => query database for last order completed by user

[x] style ordering page, scaling from mobile upwards

[x] have a begin order button that inits a new order, starts with status:incomplete, saves it to Mongo and Redux

[x] send a put request each time an item is added to an order, update Redux

[] when order is placed, change status to complete, **generate confirmation #**

[] push order into user's order-history

[] have order tab check history before offering to place a new order

## Design

[x] home page

[x] register page

[x] login page

[x] menu page

[x] order page

[x] contact page

[x] about us page

## Known Issues

[] fix the eyeball icon to be within the password field on **all screens**

[] fix MobileMenu hamburger icon to stay on screen after click