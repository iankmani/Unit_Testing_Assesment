

const {gradeSciences, gradeHumanities} = require ("./main");

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





