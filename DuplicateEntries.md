Duplicated Entries!
===================

In a former project we had a contact form.
In our production database we have found multiple entries of the same user.

Please describe shortly your approach in debugging this situation and name 2-3 different possible reasons for this kind of "bug".
For each option describe how we could fix this behaviour.

* ⟨your reasoning here⟩
## Applicant response 
## Reasons
- (1)User complies and submit form multiple times
- (2)User quickly clicked the submit button several times generating many POST request
- (3)Spam attack

## Solutions

- (1)It's reasonable that a user could submit multi messages in a period of time.
  To maintain an elegant DB structure and avoid double entries we should check if user exist then store user messages as association af one(user) to many(messages)
- (2)Here we need to handle and prevent re-click on submit button until our API request has finish maybe disabling the button
  We should also provide a success/error message so user knows if his message was successful or he has to recompile the form
- (3)There are various way to avoid spam:
  - Use of Captcha
  - The honey-pot for bots
  - Put a time limit between messages or a max limit of messages in an hour/day
  - Blacklist an IP if see suspicious activity. A well combo with limit messages
