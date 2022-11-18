/* Reactive Variable 
/ what could be a reactive variable? 
 1. isLoggedIn
 2. isDarkMode
 values that don't want to be passing down props and props and props...
 "reactive variables can store data of any type and structure, 
  and you can interact with them anywhere in your application 
  without using GraphQL syntax."
  여기에 reative variable 을 선언한 뒤
  실제로 컴포넌트에서 사용할 때는 useReactiveVar() Hook을 사용한다.
*/
import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
