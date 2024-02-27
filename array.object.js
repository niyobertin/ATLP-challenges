
const arrays = [];
const femaleArr =[];
const maleArr = [];
function splint(arr,chunck){
    for(let i=0;i< arr.length;i+=chunck){
        let temp;
        temp = arr.slice(i,i+chunck)
        arrays.push(temp)
    }
    let male =[];
    let female = 0;
    let nonGender = 0;
    arrays.forEach((ele) =>{
        if(ele.includes("male")){
            let firstElementArray=  ele[0].split(' ');
            let remaining = ele.slice(1);
            const newArr = firstElementArray.concat(remaining);
            maleArr.push(newArr)
        }else if(ele.includes("female")){
            let firstElementArray=  ele[0].split(' ');
            let remaining = ele.slice(1);
            const newFemale = firstElementArray.concat(remaining);
            femaleArr.push(newFemale);
        }else{
            nonGender+=1;
        }
    })
    console.log(femaleArr);
    console.log(maleArr);
    console.log(nonGender)
}
const splitFirstEle = (arr) =>{
    arr.forEach((ele) =>{
       let newArr =  ele[0].split(' ');
       console.log(newArr);
    })
}
splitFirstEle(femaleArr);
const array = ["Patrick wyne", 30, "female", "lil wyne", 32, "kakao","Eric mimi", 21, "female","Dodos deck", 21,"male","Alian Dwine", 22, "male","Patrick wyne", 33, "male","Patrick wyne", 10,"custom","Patrick wyne", 40,"male"];
splint(array,3);