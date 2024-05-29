function gradeSciences(marks){
    if(marks >= 70 && marks <= 100){
        return "A";
        } else if(marks >= 60 && marks < 69){
            return "B";
            } else if(marks >= 50 && marks < 59){
                return "C";
                } else if(marks >= 40 && marks < 49){
                    return "Pass";
                    } else {
                        return "Sup";
                        }
 }   
 
function gradeHumanities(marks){
    if(marks >= 80 && marks <= 100){
        return "A";
        } else if(marks >= 70 && marks < 79){
            return "B";
            } else if(marks >= 60 && marks < 69){
                return "C";
                } else if(marks >= 50 && marks < 59){
                    return "Pass";
                    } else {
                        return "Sup";
                        }
}

function gradeLanguagesnComp(marks){
    if(marks >= 75 && marks <= 100){
        return "A";
        } else if(marks >= 65 && marks < 74){
            return "B";
            } else if(marks >= 55 && marks < 64){
                return "C";
                } else if(marks >= 45 && marks < 54){
                    return "Pass";
                    } else {
                        return "Sup";
                        }
}

const studentScore = {name: "Dennis Doe", math: 80, eng: 65, kis: 48, phy: 67, che: 56, re:89, comp: 82};

function calculateGradesAndAverage(){

    
   
                        
     const output = { jina : studentScore.name};
     output.mathGrade = gradeSciences(studentScore.math);
     output.engGrade = gradeLanguagesnComp(studentScore.eng);
     output.kisGrade = gradeLanguagesnComp(studentScore.kis);
     output.phyGrade = gradeSciences(studentScore.phy);
     output.cheGrade = gradeSciences(studentScore.che);
     output.reGrade = gradeHumanities(studentScore.re);
     output.compGrade = gradeLanguagesnComp(studentScore.comp);
     const totalMarks = (studentScore.math + studentScore.eng + studentScore.kis + studentScore
    .phy + studentScore.che + studentScore.re + studentScore.comp) / 7;

     output.average = Math.floor(totalMarks);

       
        return output;

}
const output = calculateGradesAndAverage(studentScore);
console.log(output);
