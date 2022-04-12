# INPUT FIELD VALIDATION - BUG

### Description: The input field for adding item does not have validations to cater for an empty string

### STEPS TO REPRODUCE

1. Navigate to http://localhost:8081/todo
2. Navigate to the "Create new todo item:" text field
3. Enter an emty string
4. Click the submit button
5. Then the will be added to the list

### EXPECTED RESULTS
When typing a new todo item with an empty text and click the submit button, an item should not be created 

### CURRENT RESULTS
When inputing a new todo item with an empty text and click the submit button, an item is created 
________________________________________________________________________________________________________________________________________________

# ADD DUPLICATE ITEMS - BUG

## Description: When the user adds the new item with the same name on the todo list multiple times, multuple items with the same name will be added

### STEPS TO REPRODUCE

1. Navigate to http://localhost:8081/todo
2. Navigate to the "Create new todo item:" text field
3. Input 'Automation'
4. Click the submit button
5. Repeat step 2 to 4
5. Two items with the same name will be added

### EXPECTED RESULTS 

The items in the todolist should be unique, user should not be able to add an existing item 

### CURRENT RESULTS

If there is an existing item in the list, you can be able to add another item with the same n

________________________________________________________________________________________________________________________________________________


# UPDATE AN ITEMS WITH AN EXISTING ITEM NAME - BUG 

## Description: if there are existing items on the todo list and I try to update an item/s using the name of the item that already exist, an item will be updated

### STEPS TO REPRODUCE
1. Navigate to http://localhost:8081/todo
2. Navigate to the "Create new todo item:" text field
3. Input 'Automation' and click the submit button
4. Input 'Automation1' and click the submit button
5. Update 'Automation' to 'Automation1'
6. Two items with the same name will be exist on the list

### EXPECTED RESULTS 

The items in the todolist should be unique, user should not be able to update an existing item with the name of an item that already exist

### CURRENT RESULTS

If there is an existing item in the list, you are be able to update an existing item with the name of an item that already exist
