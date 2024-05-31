const {gradeSciences, gradeHumanities, gradeLanguagesnComp, calculateGradesAndAverage} = require ("./main");

describe ("gradeSciences" , () => {
    it ("should return the grade of the sciences", () => {
        expect(gradeSciences(90)).toEqual("A");
})
it("should return B if the grade is greater than 60 and less than 70" , () => {
    expect(gradeSciences(65)).toEqual("B");
})
it("should return C if the grade is more than 50 and less than 60" , () => {
    expect(gradeSciences(55)).toEqual("C");
})
it ("should return Pass if the grade is greater than 40 and less than 50" ,() =>{
    expect(gradeSciences(45)).toEqual("Pass");
})
it ("should return Sup if the grade is less or equal to 39" , () =>{
    expect(gradeSciences(39)).toEqual("Sup");
})

});



describe ("gradeHumanities" , () => {
    it ("should return A if marks if greartr than 80", () => {
        expect(gradeHumanities(85)).toEqual("A");
})
it("should return  if the grade is more than 70 and less than 79" , () => {
    expect(gradeHumanities(75)).toEqual("B");
})
it("should return C if marks is greater than or equal to 60 and less than 69", () => {
    expect(gradeHumanities(65)).toEqual("C");
})
it ("should return Pass if the grade is greater than 50 and less than 59" ,() =>{
    expect(gradeHumanities(55)).toEqual("Pass");
})
it ("should return Sup if the grade is less than 50" , () =>{
    expect(gradeHumanities(39)).toEqual("Sup");
})

});

describe("gradeLanguagesnComp", () =>{
    it ("should return A if marks if greartr than 75", () => {
        expect(gradeLanguagesnComp(85)).toEqual("A");
})
it("should return B if the grade is more than 65 and less than 74" ,() => {
    expect(gradeLanguagesnComp(70)).toEqual("B");
})
it("should return C if marks is greater than or equal to 55 and less than 64" , () =>{
    expect(gradeLanguagesnComp(60)).toEqual("C");
})
it ("should return Pass if the grade is greater than 45 and less than 54" ,() =>{
    expect(gradeLanguagesnComp(50)).toEqual("Pass");
})
it ("should return Sup if the grade is less than 45" , () =>{
        expect(gradeLanguagesnComp(39)).toEqual("Sup");
})
});

// describe("calculateGradesAndAverage", () => {
   
             
// it("should return object with grades, average and total marks", () => {
//     const studentScore = {
//         jina: "Dennis Doe",
//         math: 80,
//         comp: 90,
//         eng: 69,
//         kis: 50,
//         che: 90,
//         phy: 65,
//         re: 85,

//     };
//     // const averagePoints = (studentScore.math + studentScore.eng + studentScore.kis + studentScore
//     //     .phy + studentScore.che + studentScore.re + studentScore.comp) / 7;
//         // output.average = Math.floor(totalMarks);
    
//                     expect(calculateGradesAndAverage(studentScore)).toEqual({
//                         jina: "Dennis Doe",
//                         math: "A",
//                         comp: "A",
//                         eng: "B",
//                         kis: "pass",
//                         chem: "A",
//                         phy: "B",
//                         re: "A",
//                         average: 69,
//                         cheGrade: "C",
//                         compGrade: "A",
//                         engGrade: "B",
//                         kisGrade: "Pass",
//                         mathGrade: "A",
//                         name: "Dennis Doe",
//                         phyGrade: "B",
//                         reGrade: "A"

                        

//                     })
                        
                      
//                         })
//                         })
                    
         


            






