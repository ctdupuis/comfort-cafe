#  Top Level Goals

[] authentication

[] online ordering

[] responsive design

[] applying to positions


## Auth

[x] set up express-session

[] create users and create new session

[] existing users can log in and out

[x] auth endpoint to check if someone's logged in

[] different authorization front end blocks/permissions

## Ordering

[] style ordering page, scaling from mobile upwards

[] have a begin order button that inits a new order, starts with status:incomplete, saves it to Mongo and Redux

[] send a put request each time an item is added to an order, update Redux

[] when order is placed, change status to complete, generate confirmation #

[] push order into user's order-history

[] have order tab check history before offering to place a new order

## Design

[] fix the eyeball icon to be within the password field on **all screens**

[x] home page

[x] register page

[x] login page

[] menu page

[] order page

[] applications page

[] contact page

[] about us page

## Careers

[] list of positions to apply to

[] filter of some kind

[] clicking a position brings up a form component

[?] on form submit, send an email to a dummy inbox informing that it's completed