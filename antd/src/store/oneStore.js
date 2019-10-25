import { observable} from "mobx";
class OneStore {
  @observable oneNum = 3333;
}
console.log(OneStore, '========OneStore')
export default OneStore;