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

function calculateGradesAndAverage(marks){
    let totalMarks = 0;
    let grades = [];
    for(let i = 0; i < marks.length; i++){
        if(i === 0 || i === 1){
            grades.push(gradeSciences(marks[i]));
            totalMarks += marks[i];
            } else if(i === 2 || i === 3){
                grades.push(gradeHumanities(marks[i]));
                totalMarks += marks[i];
                } else {
                    grades.push(gradeLanguagesnComp(marks[i]));
                    totalMarks += marks[i];
                }                    
            }
}

                
