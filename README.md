# custom-geo-location-cypress
This will describes how to set up the custom geo location. Also you can use this if you dont have permission to enable location on your browser.


## When to use this
- Dont have permission to browser to enable the geo location
- Want to test fucntionality for diff geolocation or gps tracker

## How to run this app
Set up node js on your machine. Clone the repo and follow the steps.

Install dependencies
```sh
npm install    
```

Run sample app
```sh
npm run cypress:open    
```

## How to create the custom command
Go to /cypress/support/commands.js and add below code.

```sh
import {registerCommand} from 'cypress-visit-with-custom-geolocation'
registerCommand();
```


## How to use the custom command
Use blow code in your script.
```sh
cy.visitWithMockGeo('./test.html', 51.507351, -0.127758)    
```


## Author
 Amol Gaikwad

 [LinkedIn](https://www.linkedin.com/in/gaikwadamolraj/)

 [Email](mailto:gaikwadamolraj@gmail.com)