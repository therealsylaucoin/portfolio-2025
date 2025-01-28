import isPropValid from '@emotion/is-prop-valid';

export const shouldForwardProp = (propName: any, target: any) => {
  if(typeof target === "string"){
    return isPropValid(propName)
  }
  return true;
}