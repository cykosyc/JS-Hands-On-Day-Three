/*
JS Hands-On: Day Two
Now that you have more of an understanding of JavaScript Classes and Inheritance, we will be using these in this project to solidify these concepts through hands-on, practical use. Hands-On projects are completed outside of the browser, using your IDE, or editor of choice.

Description:
In this project, we will be building a Family Tree. You will be creating a class for grandparents that includes properties: Hair Color, Eye Color, and Vertical. Hair Color and Eye Color can be strings, but Vertical should be a method that display how high the person can jump in the console.

Requirements
You will need at least three generations: Grandparents, Parents, and Children.
This should be built using classes for the Grandparents, each following Generation should inherent from the generation before them all the up to grandparents.
Your objects should be instantiate and added to an array.
Loop through said array and console log each individuals vertical in the console. Ex: "Grandma can jump 22 inches."
Grading
Meets all Requirements: 50% of your grade will be based on meeting the requirements.
Timely Submission: 25% of your grade will be based on having a complete solution on time.
Style: 25% of your grade will be based on having legible, and well-designed code.
*/
class Grandparents {
  constructor(hairColor, eyeColor, vertical, name) {
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.vertical = vertical;
    this.name = name;
  }
  showDetails(){
    return `${this.name} has ${this.hairColor} hair and can jump ${this.vertical} feet`
  }
}

class Parents extends Grandparents {
}

class Children extends Parents {
}

var famTree = []

famTree.push(new Grandparents("blue", "black", 30, 'birdguy'))
famTree.push(new Parents("black", "red", 5, 'dad'))
famTree.push(new Children("white", "white", 85, 'Theory'))

for(var i = 0; i < famTree.length; i++){
  var currentFamTreeMember = famTree[i]
  console.log(currentFamTreeMember.showDetails());
}
