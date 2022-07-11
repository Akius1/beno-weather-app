
const actions = ['SUCCESS', 'FAILURE'];
const httpActions = ['GET', 'POST','PATCH'];


export const createCRUDConstants = (nameSpace, addedActions) => {
  const result = {};
  let allActions = httpActions;
  if (addedActions && addedActions.length) {
    allActions = [...allActions, ...addedActions];
  }
  allActions.forEach(httpAction => {
    actions.forEach(action => {
      result[
        `${httpAction}_${nameSpace}_${action}`
      ] = `${httpAction}_${nameSpace}_${action}`;
    });
  });
  return result;
};