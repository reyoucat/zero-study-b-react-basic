## 2021년 04월 03일 B조와 스터디

### 디랙터리 구조 설명하기 ~~디스코드에서 화면 공유하며 설명 했었던 이야기 짧은버전~~

npx create-react-app b-study 로 만든 샘플 프로젝트는 아래 설명이 죽 되어있었다. 읽어보자.

package.json 에 보면 (lock는 지금 볼 필요 없다.) 웹팩 설정들이나 실행 명령어들이 정의 되어 있어서 우리는 아래 설명되어있는걸 쓸 수 있었다. npm은 노드 패키지 매니저라구 불렀다. 요즘은 노드 안쓰는곳이 없다.

.gitignore를 보면 git 에서 무시할 파일/폴더 목록을 볼 수 있고
`npm start` 바로 바로 바뀌는 서버를 만들 수 있고.

/public는 외부에서 접근하는 파일들을 두고, 
/src에는 소스파일들이 들어있다.

처음에는 안보이지만
`npm run build` 로 빌드하는 과정을 실행해보면 폴더구조가 뭐가 추가된다. 뭐가 추가된가 봤더니

/build 폴더에
node_modules + public + src 를 섞어 조합해서 이쁘게 잘 사람이 보면 잘 모르지만 브라우저가 보면 뿅 나오는 결과가 나온다.
그런데 위쪽은 아까전에 public에 친구들이랑 index가 있고,

static에는 섞에 만든 결과가 있다는걸 알게되었다.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
