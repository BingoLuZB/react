import HomeStore from "./homeStore";
import OneStore from "./oneStore";
let oneStore = new OneStore();
let homeStore = new HomeStore();
const stores = {
  oneStore,
  homeStore
};
console.log(oneStore,'=========one')
/// 默认导出接口
export default stores;