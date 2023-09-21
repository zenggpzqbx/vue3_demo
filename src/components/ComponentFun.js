import {ref} from "vue";

export function usePerson(){
    let name = ref('zgp')
    let age = ref(0)
    let sex = ref('男')
    function updateName(newName) {
        name.value = newName
    }
    function updateAge(newAge) {
        age.value = newAge
    }
    function updateSex(newSex) {
        sex.value = newSex
    }
    return {name, age, sex, updateName, updateAge, updateSex}
}