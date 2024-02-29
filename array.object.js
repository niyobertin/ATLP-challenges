
const arrays = [];
const femaleArr =[];
const maleArr = [];
let people = {};
let male = {};
let female = {};
let males =[];
let females =[];
let malesNo = 0;
let femaleNo = 0;
let nonGender = 0;
males.push(male);
females.push(female);
function splint(arr,chunck){
    for(let i=0;i< arr.length;i+=chunck){
        let temp;//to hold chunck of an array
        temp = arr.slice(i,i+chunck)
        arrays.push(temp)
    }
    arrays.forEach((ele) =>{
        if(ele.includes("male")){
            malesNo++;
            let firstElementArray=  ele[0].split(' ');
            let remaining = ele.slice(1);
            const newArr = firstElementArray.concat(remaining);
            const first_name = newArr[0];
            const second_name = newArr[1];
            const age = newArr[2];
            maleArr.push(newArr);
            male[first_name] = {'second-name':second_name,'age':age};
        }else if(ele.includes("female")){
            femaleNo++;
            let firstElementArray=  ele[0].split(' ');
            let remaining = ele.slice(1);
            const newFemale = firstElementArray.concat(remaining);
            const first_name = newFemale[0];
            const second_name = newFemale[1];
            const age = newFemale[2];
            femaleArr.push(newFemale);
            female[first_name] = {'second-name':second_name,'age':age};
        }else{
            nonGender+=1;
        }
    })
  return  people = {males :males,females:females,Male:malesNo,Female:femaleNo,other_gender:nonGender};
}
const array = ["Patrick wyne", 30, "female", "lil wyne", 32, "kakao","Eric mimi", 21, "female","Dodos deck", 21,"male","Alian Dwine", 22, "male","Patrick wyne", 33, "male","Patrick wyne", 10,"custom","Patrick wyne", 40,"male"];
console.log(splint(array,3));
// console.log(people);
// console.log(females);
// console.log(males);

