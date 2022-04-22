## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
    Title, Header, Section, Button
1. **For each HTML element ask: Why do I need this?**
    Title: Let people know what the page is about
    Header: Title for the current page
    Section: To provide a block for the information
    Button: To provide a "switch" to show my favorite animal
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
    Title
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
    User clicks on button → Shows animal info
1. **Think about how to validate each of your features according to a Definition of Done**
    Event listener correctly shows the animal information *after* the button is clicked.
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
    The event listener is dependent on the button click. The hidden info can only be shown after the button click.
Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
