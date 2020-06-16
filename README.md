# adventure-quiz

### Note: these bugs weren't in the original student submission. I introduced these bugs for this assignment.

# Bugs

1) The quest scoring doesn't work
1) Nothing dealing with 'health' works
1) No matter what, the user never enters the 'dead' state
1) The user never is able to 'complete' all quests
1) The username never shows up
1) The redirect to the map page never happens after the user completes a quest
1) Something is very wrong with the logic that loads the user from local storage.
1) The position of the quest links is all wrong on the map
1) The links to the quest items don't direct to the correct page

## Debugging starting points

1) Open the javascript console in Chrome and follow the bouncing ball
1) Look for and examine red squiggles in VSCode, starting from top
1) Drop console logs/breakpoints in your code to see 
        - a) how far your code gets before it breaks
        - b) the value of your variables
                
        - What do you expect the variable values to be? 
        - Why do you expect it to be that way? Where do you make that happen?
        - Is the value what you expected? 
        - If not, why not? 
        - What would you have to change to make the actual value match your expectations?


## Most common JS error:

`Cannot read property 'type' of undefined (app.js:34)`
`
 
1) Go look for `.type` on line 34 in app.js
2) Look to the left of `.type`
3) Figure out why the thing to the left of `.type` is undefined
