# Duplicated Entries!

In a former project we had a contact form.
In our production database we have found multiple entries of the same user.

Please describe shortly your approach in debugging this situation and name 2-3 different possible reasons for this kind of "bug".
For each option describe how we could fix this behavior.

## Applicant response

### How to debug:

1. Through developer console in browser in network tab see the details of the request. Verify that it is not send multiple times after form submission.
2. Check the backend logs for API calls and verify how many times the same data was sent to the certain endpoint.
3. Check database logs for transactions with the same data.

### Possible reasons if debugging gave no results:

1. Duplicate API call from frontend. Sometimes frontend engineers forget to put loader or simply block the Submit button while sending the request. So user can click multiple times on the button -> send request multiple times.
2. No success notification and clearing the form. After the request has been sent frontend should show a message or any notification to the user that his request was sent. Sometimes users fill the same form twice if they don't see that notifiction.
3. Check if multiple entries of the same user is not a robot with spam. Sometimes robots scan websites for such type of forms and send similar requests. If there is such issue -> put the captcha.
