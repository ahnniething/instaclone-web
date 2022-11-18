/* Reactive Variable 
  Apollo Client 3의 새로운 기능, reactive variables는 
  Apollo Client 캐시 외부의 local state를 나타내는 유용한 메커니즘입니다. 
  캐시와 분리되어 있기 때문에 reactive variables는 모든 유형과 구조의 데이터를 저장할 수 있으며
  GraphQL 구문을 사용하지 않고도 애플리케이션의 어느 곳에서나 상호 작용할 수 있습니다. 
  가장 중요한 것은 reactive variable를 수정하면 
  해당 변수에 의존하는 모든 활성 쿼리의 업데이트가 트리거된다는 것입니다.

/ what could be a reactive variable? 
 1. isLoggedIn
 2. isDarkMode
 values that don't want to be passing down props and props and props...

  useReactiveVar
  useReactiveVar()훅을 사용하여 reactive variable를 직접 읽고 반응할 수 있습니다.

  여기에 reative variable 을 선언한 뒤
  실제로 컴포넌트에서 사용할 때는 useReactiveVar() Hook을 사용하여 접근한다.
*/
import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);
