
// define test case
const test_case = [
  { target: "", list: [0,1,2,3], _default: "-1"},
  { target: "the", list: [0,1,2,3], _default: "-1"},
  { target: "11", list: [0,1,2,3], _default: "-1"},
  { target: "3", list: [0,1,2,3], _default: "-1"},
  { target: 2, list: [0,1,2,3], _default: "-1"},
  { target: "2", list: [], _default: "-2"},
  { target: "2", list: "", _default: "-2"},
];

let i=0;

while( i < test_case.length ){
    let { target, list, _default } = test_case[i]
    console.log(getNumberIfExists(target, list, _default));
    i++;
}

/**
 * finding the targeted number from the number list.
 * 
 * @getNumberIfExists
 * @param   {number} _target
 * @param   {array} _list
 * @param   {any} _default error code
 * @return  {int} 
 * @created_by  Muhammad Hasan
 * @created_at  17th May 2023
 */
function getNumberIfExists(_target="", _list=[], _default=""){
  try {
    let input = parseInt(_target);
    
    if(isNaN(input)) return _default;
    
    return _list.includes(input) ? input : _default;
    
  } catch (err){
    return _default;
  }   
}


