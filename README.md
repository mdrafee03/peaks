## Peaks
It is a news portal with guardian api integration

### Steps to run the project without docker
```
yarn install
yarn start
```
To run the test
```
yarn test
```
To get the coverage report of the test
```
yarn test:coverage
```

The project will be run in http://localhost:8080
To run the PWA
```
yarn build
```
The build file will be stored in the dist folder. Run the dist folder to any live server

To Test the PWA. Go to Chrome developer tools and select lighthouse tab and click Generate report. After few moment, the report will be ready and you will get the result

**N.B:** if you run it vscode live server, routing will not be work properly. If you want to test it run it with docker production.

![image](https://user-images.githubusercontent.com/29922329/160294093-bd5d5f4c-c119-450d-8516-d172d8e126d7.png)


### Steps to run the project in dev with docker
```
docker compose -f docker-compose.dev.yml up
```
The project will be run in http://localhost:8080

### Steps to run the project in production with docker
```
docker compose -f docker-compose.prod.yml up
```
The project will be run in http://localhost:5500

N.B: You can get PWA report with all the routing working properly

### Walkthrough
1. In the root url, you will find the top news section. If there is any image from the api, the image will be shown. Otherwise default image will be shown
2. Click any article, you will be landed to article section
3. Click Add bookmark to save the article, snackbar will show if the operation is successful
4. Click Remove bookmark to remove it from the bookmark
5. Go to Home page, you see category wise articles. On click the category heading, you will be landed on specific category article page
6. Clicking on the view bookmark button, you will be landed to the bookmark page where you will find bookmarked article
7. On top you will find the search box. If you write any keyword, it will search for the news articles based on that and you will be landed on search Result page
8. On Article page, if you click date, you will be redirected to the sports page
9. On Article page, if you click title, you will be redirected to the culture page

### Features
1. Docker based application
2. Mobile Responsive
3. The project is build from scratch. No boilerplate or create react app is used
4. Unit test coverage
5. Debouncing in input text implemented
6. Cancel request if the previous request is not completed and new request is arrived
7. Infinite scroll
8. Axios Wrapper which expose loading, error and data properly
9. Context Api for bookmark the application
10. Emotion is used for writting css in js
11. Search box animation

Feel free to reach out, if you think any improvement point of the project

#### Happy Coding
