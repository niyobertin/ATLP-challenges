
let males = [];
let maleObj = {}
let females = [];
let femalesObj = {};
let genders ={};
let nonGender = 0;
let maleNo = 0;
let femalesNo = 0;
let first_name,second_name;
// const subArr = [];
males.push(maleObj);
females.push(femalesObj);

const sortGender = (array) => {
    array.forEach(element => {
     const subArr=element.split(' ');
    const first_name = subArr[0];
    const second_name = subArr[1];
    const age = subArr[2];
        if(subArr.includes('male')){
            maleNo++;
            maleObj[first_name] = {'second-name':second_name,'age':age};
        }else if(subArr.includes('female')){
            femalesNo++;
            femalesObj[first_name] = {'second-name':second_name,'age':age}; 
        }
        else if((!subArr.includes('male')) && (!subArr.includes('female'))){
            nonGender++;
        }
    });

   return genders = {"males":males,"females":females,"male_number":maleNo,"female_number":femalesNo,"other_gender":nonGender};
}

const gender = ["Patrick wyne, 30, male","Niyonkuru bertin, 10, male","queen agela, 3, female", "lil wyne, 32, male","Eric mimi, 21, female","Dodos deck, 21,male","Alian Dwine, 22, male","Patrick wyne, 33, male","Patrick wyne, 10,trans","Patrick wyne, 40,non-binary"]
console.log(sortGender(gender));

