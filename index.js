const express = require("express");
const app = express();
const PORT = 3003;
app.use(express.json());

const harryPotterStudents = [
  {
    name: "Harry Potter",
    house: "Gryffindor",
    bloodStatus: "Half-Blood",
    wand: "11', Holly, Phoenix feather core",
    pet: "Hedwig (Snowy owl)",
  },
  {
    name: "Hermione Granger",
    house: "Gryffindor",
    bloodStatus: "Muggle-Born",
    wand: "10¾', Vine Wood, Dragon heartstring core",
    pet: "Crookshanks (Half-Kneazle)",
  },
  {
    name: "Ron Weasley",
    house: "Gryffindor",
    bloodStatus: "Pure-Blood",
    wand: "14', Willow, Unicorn hair core",
    pet: "Scabbers (Rat)",
  },
  {
    name: "Draco Malfoy",
    house: "Slytherin",
    bloodStatus: "Pure-Blood",
    wand: "10', Hawthorn, Unicorn hair core",
    pet: "None",
  },
  {
    name: "Luna Lovegood",
    house: "Ravenclaw",
    bloodStatus: "Pure-Blood",
    wand: "Unknown",
    pet: "None",
  },
  {
    name: "Neville Longbottom",
    house: "Gryffindor",
    bloodStatus: "Pure-Blood",
    wand: "13', Cherry, Unicorn hair core",
    pet: "Trevor (Toad)",
  },
];

app.post("/break_student_wand", (req, res) => {
  // add your code here
});
// route to change a students pet
app.put("/change_student_pet", (req, res) => {
  const indexOfStudentToUpdate = harryPotterStudents.findIndex(
    (student) => student.name === req.body.name
  );
  if (indexOfStudentToUpdate === -1) {
    res.send("that student does not exist");
  } else {
    if (req.body.name) {
      harryPotterStudents[indexOfStudentToUpdate].name = req.body.name;
      harryPotterStudents[indexOfStudentToUpdate].pet = req.body.newPet;
    }
  }
  res.send(
    `this is your updated pet: ${harryPotterStudents[indexOfStudentToUpdate].pet}`
  );
  console.log(req.body.newPet);
});
// route to change a students house
app.post("/change_student_house", (req, res) => {
  const indexOfStudentToUpdate = harryPotterStudents.findIndex(
    (student) => student.name === req.body.name
  );
  if (indexOfStudentToUpdate === -1) {
    res.send("that student does not exist");
  } else {
    if (req.body.name) {
      harryPotterStudents[indexOfStudentToUpdate].name = req.body.name;
      harryPotterStudents[indexOfStudentToUpdate].house = req.body.newHouse;
    }
  }
  res.send(
    `this is your students updated house: ${harryPotterStudents[indexOfStudentToUpdate].house}`
  );
  console.log(req.body.newHouse);
});
// route to delete a student
app.post("/delete_student", (req, res) => {
  // add your code here
});
// route to update a student
app.post("/update_student", (req, res) => {
  const indexOfStudentToUpdate = harryPotterStudents.findIndex(
    (student) => student.name === req.body.name
  );
  if (indexOfStudentToUpdate === -1) {
    res
      .status(404)
      .send("That student does not exist, please consider adding it!");
  } else {
    if (req.body.name && req.body.house && req.body.pet) {
      restaurants[indexOfStudentToUpdate].name = req.body.nameToUpdateTo;
      restaurants[indexOfStudentToUpdate].price = req.body.house;
      restaurants[indexOfStudentToUpdate].style = req.body.pet;
      res.send(
        `This is your newly updated student ${harryPotterStudents[indexOfStudentToUpdate].name}`
      );
    } else {
      res.send("You need to provide a name and a house and a pet.");
    }
  }
});
// route to create a student
app.post("/create_student", (req, res) => {
  harryPotterStudents.push(req.body);
  res.send(`Added new student called ${req.body.name}`);
});
//route to get all students
app.get("/get_students", (req, res) => {
  res.json(harryPotterStudents);
});
//write a route that gives you all the students that belong to a certain house
app.get("/get_students_by_house", (req, res) => {
  if (req.body.houseSearch === harryPotterStudents.house) {
    res.send(`these are the students in the house ${harryPotterStudents.name}`);
  }
});

app.listen(PORT, () => console.log(`Listening in on port ${PORT}`));
