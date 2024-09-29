//1- create an array that holds 8 grades
const grades =[78,69,57,52,88,97,75,64]

//2- log out how many grades there are
console.log(grades.length);

//3 - classify each grade into one of the following categories
    //min ide er at bruge et for loop for at ramme alle elementerne en af gangen
    //så vil jeg bruge noget if-sætning til at definere de forskellige intervaller + tilhørende karekter-outut

for(let i=0; i<=grades.length; i++)
{
    let grade = grades[i];
    //bruger if og else til at klassificere elementerne
    //jeg starter med de højeste, gjorde jeg det omvendt ville alle vædier jo feks være større end 60
    //og resten af loopet ville ikke køre - fordi jeg syntes det er nemmere end at definere både større end- og mindre end- værdier for hver karekter
if (grade >= 90)
{console.log(grade,'the grade is A');}

else if (grade>=80) {console.log(grade,'the grade is B')}

else if (grade>=70) {console.log(grade,'the grade is C')}

else if (grade>=60) {console.log(grade, 'the grade is D')}

else if (grade<60) {console.log(grade, 'the grade is F')}
}


//4 - evaluate overall class performance
    //for at finde gennemsnittet finder jeg først summen af grades
let sum = 0;
for (let i=0; i<grades.length; i++) {
    sum += grades[i];
}
console.log(sum)
//summen er 580

const avg = sum/grades.length
console.log('gennemsnittet er',avg)
//gennemsnittet er 72,5

if (avg>=90) {console.log('Excellent')}
else if (avg>=80) {console.log('Good')}
else if (avg>=70) {console.log('overall the class performance was Satisfactory')}
else if (avg<70) {console.log('Needs Improvement')}

//5 - determine
//the highest grade in the array
    const maxGrade = Math.max(...grades);
    console.log('størsteværdien er', maxGrade);
//the lowest grade in the array
    const minGrade = Math.min(...grades);
    console.log('mindsteværdien er', minGrade);
//the avg grade - har jeg allerede fundet tidligere, den er stadig 72,5


//6 - output
//the highest grade with its category
    //størsteværdien er 97 og den har karekteren A
//the lowest grade with its category
    //mindsteværdien er 52 og den har karekteren F



//Tresure Hunter
//1 - how many moves are on the island?
const island = ['-','-','T','-','-']
let movesIsland = island.length;
console.log('The island has',movesIsland,'moves');

//2 - for each move log out no tresure found:( or treasure found at move 3:)
for (let i=0; i<movesIsland; i++)
    if (island[i] === '-') {console.log('No tresure found:(')}
    else if (island[i] === 'T') {console.log('Tresure found at move',[i+1],':)')}
    //jeg skriver i+1 da i er indekset og det tæller første element som 0, hvilket ville forvirre brugeren
    // så jeg bruger istedet værdien for, hvilket nummer T er i rækken af elementer, der kan udtrykkes som i+1

//3 - log out how many treasures there are on the island
// jeg bruger et for loop og sætter en if-sætning til at lede efter island([i]==='T'
let countT = 0;

for (let i=0; i<movesIsland; i++)
{ if (island[i]==='T') {countT++;}}

console.log('Der er',countT, 'skatte på øen');

//Startup game generator
//jeg siger at den skal runde til nærmeste heltal via Math.floor, fordi Math.random kun vælger tal mellem 0 og 1 (og disse er ikke indeks-værdier)
//jeg skriver + "" + nederst for sætte et mellemrum mellem de to ord
function startupNameGenerator() {
    const firstWord = ['Tech','Pink','Smart','Next','367','Digital']
    const secondWord = ['Solutions','Things','Networking','Tube']

    const randomFirstWord = firstWord[Math.floor(Math.random())*firstWord.length];
    const randomSecondWord = secondWord[Math.floor(Math.random())*secondWord.length];

    return randomFirstWord + " " + randomSecondWord;
}
console.log(startupNameGenerator());

