######  INPUT FIELD VALIDATION BUG ####

''''''''''' EXPECTED RESULTS ''''''''

When inputing a new todo item with an empty text and click the submit button, an item should not be created 

''''''''''' CURRENT RESULTS ''''''''

When inputing a new todo item with an empty text and click the submit button, an item is created 

## STEPS TO REPRODUCE

1. Navigate to http://localhost:8081/todo
2. Navigate to the "Create new todo item:" text field
3. Enter an emty string
4. Click the submit button
5. Then the will be added to the list

________________________________________________________________________________________________________________________________________________


######  DUPLICATE ITEMS - BUG ####

''''''''''' EXPECTED RESULTS '''''''''''' 

The items in the todolist should be unique, user should not be able to add an existing item 

'''''''''' CURRENT RESULTS '''''''''''

If there is an existing item in the list, you can be able to add another item with the same name

## STEPS TO REPRODUCE

1. Navigate to http://localhost:8081/todo
2. Navigate to the "Create new todo item:" text field
3. Input 'Automation'
4. Click the submit button
5. Repeat step 2 to 4
5. Two items with the same name will be added

________________________________________________________________________________________________________________________________________________


######  UPDATE AN ITEMS WITH AN EXISTING ITEM NAME - BUG ####

''''''''''' EXPECTED RESULTS '''''''''''' 

The items in the todolist should be unique, user should not be able to update an existing item with the name of an item that already exist

'''''''''' CURRENT RESULTS '''''''''''

If there is an existing item in the list, you are be able to update an existing item with the name of an item that already exist

## STEPS TO REPRODUCE

1. Navigate to http://localhost:8081/todo
2. Navigate to the "Create new todo item:" text field
3. Input 'Automation' and click the submit button
4. Input 'Automation1' and click the submit button
5. Update 'Automation' to 'Automation1'
6. Two items with the same name will be exist on the list