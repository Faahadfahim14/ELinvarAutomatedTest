Feature: Your test

Background: To verify the functionality of the application by executing the test cases
#...

Scenario: User Visit the site and Add an new asset successfully
When User visit and click on Add assset link
Then User will add new asset numbers
 

Scenario: User try to add exsisting asset and fail to do it
When User visit and click on Add asset link for adding exisiting asset
Then User enter the exisiting asset and save it 

Scenario: User try to search exsisting asset successfully
When User visit and click on exisiting asset
Then user try to search with exisiting asset

Scenario: User try to search the non exisiting asset and unable to find it
When user visit and click on existing asset for search non exisiting asset
Then user try to search with non exisiting asset

Scenario: User add asset without value and fail 
When user visit and donot enter any data in the text box

Scenario: User wants to see more enteries/assets in exsisting asset page
When User visit and click on exsisting asset and select 50 records for display
Then User manages to select the corresponding desire entry to select
