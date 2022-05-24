## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

## Workshop Planning

## 1. Database Setup

Add two tables

| workshops |         |
| --------- | ------- |
| name      | varchar |

| participants |                         |
| ------------ | ----------------------- |
| name         | varchar                 |
| contact_info | varchar                 |
| workshop_id  | foreign key (workshops) |

-   Add some test data to workshops / participants
-   Add RLS so that only authenticated users can add do anything with the data (select, update, delete, create)

## 2. Workshops Page

1. Add `getWorkshops` function to `fetch-utils.js` to fetch all your workshops and their participants
2. TDD `renderWorkshop` function that displays the workshop and its participants
3. Use both functions to loop through workshops and display on page

## 3. Create Page

1. Add form elements to our HTML for name, contact_info and a placeholder `<select>` for our workshops
2. Get our workshops (using `getWorkshops`) and dynamically add an `<option>` to our select for each workshop
3. Add a `createParticipant` function to `fetch-utils.js` that sends participant data to Supabase and adds a new row

_validation step: manually call the function with dummy data_

```js
createParticpant({
    name: 'Julie',
    contact_info: 'julie@alchemycodelab.com',
    workshop_id: 2,
});
```

4. Add our form event listener, get the form data and send to supabase using `createParticipant`

## 4. Delete Participant

1. Add `deleteParticipant(id)` function in `fetch-utils.js`
2. Add dynamic event listener to my render function that calls deleteParticipant

![](./plan.png)
