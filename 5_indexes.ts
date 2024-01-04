type Person = {
  username : string,
  skills : ("beginner" | "intermediate" | "Expert" )
}

const person : Person = {
  username : "karna", 
  skills : "intermediate"
}

printPersonSkill(person.skills)

function printPersonSkill(skills : Person["skills"]) {
  console.log(skills)
} 

// we can also make something like groupby with index


type PeopleGroupBy = {
  [index : string] : Person["skills"][]
}


const checkerPeopleGroupBy : PeopleGroupBy= {
  "1" : ["Expert", 'beginner']
}

//similarly arrays can be created
type PeopleGroupById = {
  [index: number]: string;
};

const arr : PeopleGroupById = [
  "karana", "swamy"
]


// type PeopleGroupedBySkill = {
//   [index: Person['skills']]: Person[];
// };

type PeopleGroupedBySkill = {
  [index in Person['skills']] ?: Person[];
}; 

const checkerGroupBySkill : PeopleGroupedBySkill = {
  "beginner" : [{username : "ramanth", skills: "beginner"} ],
} 

const a= ["asklk", 22, 23]

type A = (typeof a)[number] 

const b = {
  "name" : true,
  "value": 23
}

type B = (typeof b)[keyof typeof b]
type C = (typeof b)["value"]
type D = (typeof b)["name"]
