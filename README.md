# Palindrome Game

Tech test for Supersolid.

## Set up instructions

Install new dependencies with:

```
npm install
```

Run test suite with:

```
npm test
```

Run application with:

```
npm start // then navigate to http://localhost:3000/ in browser
```

## Notes

> There's some good and some bad, but the bad code would cause problems in a production environment.

In light of the above feedback my following notes highlight the features of the code which I believe are or could be problematic.

- There is no sanitization of inputs. Dangerous characters should be rejected or escaped for security reasons (ie. avoiding XSS).
- There is no validation of inputs. The API relies on the frontend application to prevent invalid submissions (ie. empty strings), this is probably bad practice and the API should be prepared to handle these itself to avoid breakages and 500 errors.
- Native JavaScript Array.sort is not stable. This could lead to inconsistencies in the return value of `getTopEntries` with large datasets.
- There is no explicit handling of requests to alternate endpoints, or invalid request types to existing endpoints. While this may not cause breaking issues it is problematic from a usability/predictability standpoint.
