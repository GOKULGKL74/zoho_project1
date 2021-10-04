
  const email=document.querySelector("#email");
  const error=document.querySelector(".error-text");
  const btn=document.querySelector("button");
  const btn1=document.getElementById("button");

  let regExp=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  function check(){
    if(email.value.match(regExp)){
      email.style.borderColor="blue";
      error.style.display="none";
      btn1.disabled = false;
      }
    else{
        email.style.borderColor="#e74c3c";
        error.style.display="block";

    }
    if(email.value==""){
     email.style.borderColor="#e74c3c";

   }
  }

  function onEdit(td) {
      selectedRow = td.parentElement.parentElement;
      document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
      document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
      document.getElementById("email").value = selectedRow.cells[2].innerHTML;
      document.getElementById("number").value = selectedRow.cells[3].innerHTML;
  }

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
