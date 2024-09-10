#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
    message:"Enter your first number",
    type:"number",
    name: "user",
},
{
    message:"Enter your second number",
    type:"number",
    name:"user2",
},
{
    message:"Choose your operator",
    type:"list",
    name: "operator",  
    choices:["Addition","Subtraction","Multiplication","Division","Modulus","Exponential"] 
},
]);
if(answer.operator==="Addition"){
    console.log(answer.user+answer.user2);
}
else if(answer.operator==="Subtraction"){
    console.log(answer.user-answer.user2);
}
else if(answer.operator==="Multiplication"){
    console.log(answer.user * answer.user2); 
}
else if(answer.operator==="Division"){
    console.log(answer.user/answer.user2);
}
else if (answer.operator==="Modulus"){
    console.log(answer.user % answer.user2);
}
else if(answer.operator==="Exponential"){
    console.log(answer.user**answer.user2);
}
else{
    ("Select a valid operator");
};
            
                    
          


