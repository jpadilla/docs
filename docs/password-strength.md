# Password Strength in Auth0 Database Connections

> WARNING: This is an experimental feature still under development.

> Note: the __Password Strength__ feature is only available to database connections. Social and enterpise connections security level is enforced by their providers.

## Policies

With this feature, Auth0 allows to customize the level of complexity that will be required for user passwords during sign-ups. Auth0 offers 5 levels of security matching the [OWASP password recommendations](https://www.owasp.org/index.php/Authentication_Cheat_Sheet#Implement_Proper_Password_Strength_Controls):

 * **None** (default): the password must exist and be at least 1 character in length.
 * **Low**: must be at least 6 characters in length.
 * **Fair**: at least 8 characters in length, it must contain a lower case letter, an upper case letter and a number.
 * **Good**: at least 8 characters in length. Contains at least 3 of the following 4 characters: a lower case letter, an upper case letter, a number or an special character  (e.g. !@#$%^&*)
 * **Excellent**: at least 10 characters in length. No more than 2 identical characters in a row (e.g., "aaa" not allowed). Contains at least 3 of the following 4 types of characters: a lower case letter, an upper case letter, number and special characters (e.g. !@#$%^&*).


## Changing your policy

To change the password strength policy, go to [Database connections](https://app.auth0.com/#/connections/database), click on the `Security` button on the connection you want to apply it:

![Password Strength Panel in Auth0](https://i.cloudup.com/jH0kabJPoi.png)

On subsequent user sign-ups or changes to their passwords, the policy will be enforced. If their entered password does not match the required criteria, the password will be rejected by Auth0 and they will be asked to pick another one that complies with the requirements.

Existing passwords entered prior to changing the policy will continue to operate.
