                                  //CHAPTER-43-48
                                  //QUESTION-NO-01
// function myfunction(){
//     alert("Thanks for purchasing phone from us")
// }

                                  //QUESTION-NO-02
// function deleteRow(btn) {
//     var row = btn.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }

                                     ////QUESTION-NO-03
// var originalImage = "https://en.artsdot.com/ADC/Photos-ImgThumb.nsf/O/P-AC93DD/$FILE/Vehicle-3d_car_model_271_-s.Jpg";
// var hoverImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBljsbGh0Gpok1RFUxepHcqPICgrxRmpCArC6KarVMg&s";

// function changeImage() {
//     document.getElementById("image").src = hoverImage;
// }

// function resetImage() {
//     document.getElementById("image").src = originalImage;
// }

                                     ////QUESTION-NO-04
// var counterValue = 0;

// function abc(){
//     document.getElementById("counter").textContent = counterValue;
// }

// function increaseCounter(){
//     counterValue++;
//     abc();
// }
// function decreaseCounter(){
//     if(counterValue > 0){
//         counterValue--;
//         abc();
//     }
// }
// abc();

// function abd(){
//    var fullName = document.getElementById("fullName").Value;
//    var email = document.getElementById("email").Value;

//     var formDataDiv = document.getElementById("formData");
//     formDataDiv.innerHTML = "<h2>Form Data</h2>" + "<p><storg>Full Name: </strong> " + fullName+"</p>" + "<p><stron>Email: </stron>" + email +"</p>";
//     return false ;
// }

                                  //COMMENT AREA READ MORE
// function toggleDetails(element) {
// var details = element.previousElementSibling; // Get the details div
// if (details.style.display === "none") {
//     details.style.display = "block"; // Show details if hidden
//     element.textContent = "Read less"; // Change button text
// } else {
//     details.style.display = "none"; // Hide details if shown
//     element.textContent = "Read more"; // Change button text
// }
// }

                                  //REGISTRATION TABLE & FORM

// let students = [];

// function addStudent(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const grade = document.getElementById('grade').value;
                              
//     students.push({ name, age, grade });

//     renderStudents();
//     document.getElementById('studentForm').reset();
// }

// function renderStudents() {
//     const tbody = document.getElementById('studentBody');
//     tbody.innerHTML = '';

//     students.forEach((student, index) => {
//         const row = tbody.insertRow();
//         row.insertCell(0).textContent = student.name;
//         row.insertCell(1).textContent = student.age;
//         row.insertCell(2).textContent = student.grade;
//         const actionsCell = row.insertCell(3);
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.onclick = () => deleteStudent(index);
//         const editButton = document.createElement('button');
//         editButton.textContent = 'Edit';
//         editButton.onclick = () => showEditForm(index);
//         actionsCell.appendChild(deleteButton);
//         actionsCell.appendChild(editButton);
//     });
// }

// function deleteStudent(index) {
//     students.splice(index, 1);
//     renderStudents();
// }

// function showEditForm(index) {
//     const student = students[index];
//     document.getElementById('editName').value = student.name;
//     document.getElementById('editAge').value = student.age;
//     document.getElementById('editGrade').value = student.grade;
//     document.getElementById('editIndex').value = index;
//     document.getElementById('editForm').classList.remove('hidden');
// }

// function saveEdit() {
//     const index = document.getElementById('editIndex').value;
//     students[index].name = document.getElementById('editName').value;
//     students[index].age = document.getElementById('editAge').value;
//     students[index].grade = document.getElementById('editGrade').value;
//     renderStudents();
//     cancelEdit();
// }

// function cancelEdit() {
//     document.getElementById('editForm').classList.add('hidden');
// }