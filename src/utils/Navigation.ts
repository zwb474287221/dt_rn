import {StackActions, CommonActions} from '@react-navigation/native';

declare const AppNavigation: any

export const jump = (where: string, data?: any) => {
  AppNavigation?.dispatch?.(
    CommonActions.navigate({
      name: where,
      params: data,
    })
  );
}

export const getCurrentRoute = () => {
  return AppNavigation?.getCurrentRoute?.();
}

export const replace = (where: string, data?: any) => {
  AppNavigation?.dispatch?.(
    StackActions.replace(where, data)
  );
}

export const reset = (where: string, index?: number, params?: any) => {
  AppNavigation?.reset?.({
    index: index || 0,
    routes: [{name: where, params}],
  });
}
export const goBack = () => {
  AppNavigation?.goBack?.();
}

export function hideShadow(navigation: any) {
  if ("setOption" in navigation) {
    navigation.setOptions({
      headerStyle: {
        borderBottomWidth: 0,
        shadowOpacity: 0,
        elevation: 0,
      },
    })
  }
}
