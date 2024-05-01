## Getting Started

To run this app locally, cd into the "help-desk" folder, and run the following command:

``` npm run dev ```

View the app at localhost:3000 

## Help Desk App
### Current Features
#### Ticket Submissions
- End users can submit tickets on the "Submit Tickets" page, which display on the "ticketsPanel" page
- Form values are validated on the client side in the "TicketForm.tsx" component. Invalid form input(s) result in an alert that describes the error and throws an error

#### Admin Login
- Only users with the "ADMIN" status can view the "ticketsPanel" page
- Form values are validated on the client side in the "LoginForm.tsx" component. Invalid form input(s) result in an alert that describes the error and throws an error
- Current admin key is "admin"

#### Ticket Panel
- Pulls submitted tickets from a PostgreSQL (AWS RDS) database, sorted by id
- Admins update each individual ticket status through a dropdown menu
- Each ticket has an associated response form 

