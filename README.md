# instaclone web

1. setup
- [x] install libraries
    - styled-components
    - react hook form
    - react router dom
    - apollo client
    - react helmet
    - react-fontawesome
- [x] Router
- [x] Authentication
- [x] Architecture
- [x] Styles
- [x] Styled-components + TypeScript

2. auth(login/signup)
- [x] login page
- [x] extending styled-components 
- [x] targeting html tag in styled-components 
- [x] css : pseudo-classes(:last-child), pseudo-elements(::placeholder), box-sizing, all:unset
- [x] add web fonts in index.html
- [x] refactoring :last-child to new component
- [x] add several colors to the theme
- [x] use the <Link> tag in react-router-dom not use the <a> tag. because the anchor tag triggers refresh so all the states and react application go away. 
- [x] utilize components
- [x] prop-types
- [x] signup page
- [x] develop form in React way 
- [x] react helmet: <helmet> should be inside <helmetProvider>
- [x] react-hook-form
    - [x] register, watch, handleSubmit(onSubmitValid, onSubmitInvalid), errors
    - [x] validation : required, validate() : async, pattern..... 
    - [x] mode 유효성 검사를 언제 진행하는지
        - onSubmit: Submit 버튼을 클릭할 때
        - onChange: 실시간으로 사용자가 인풋에 무언가를 입력할 때마다
        - onBlur: 인풋에 무언가를 입력한 뒤 외부를 클릭했을 때(인풋의 포커스 상태가 해제된 순간)
        - onTouched: 인풋을 클릭하는 순간부터