import objectKeys from "./objectKeys";

export default function (store: any, needs: any) {
  const keys = objectKeys(needs);

  for (let i = 0; i < keys.length; i++) {
    const key: any = keys[i];
    if (key) {
      if (store[key].data.length) {
        delete needs[key];
      }
    }
  }
  return objectKeys(needs);
}
