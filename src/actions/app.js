export const SET_APP_TIILE = "SET_APP_TIILE";
export const SET_APP_CITY = "SET_APP_CITY";
export const HIDE_FIXED_MENU = "HIDE_FIXED_MENU";
export function setAppTitle(path){
  return {
    type: SET_APP_TIILE,
    path
  }
}

export function setAppCity(city){
  return {
    type: SET_APP_CITY,
    city
  }
}

export function hideFixedMenu(state){
  return {
    type: HIDE_FIXED_MENU,
    state,
  }
}

export function routeChange(pathname, currentUser){

}
