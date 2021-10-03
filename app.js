// Get Button Id
let add = document.querySelector('#add');

let Addtodo = () => {

  // Get Input Id
  var inputs = document.getElementById("inputs").value;
 

  // Get ul tagName
  let ul = document.querySelector('ul');


  // Create Li onClick Button
  let li = document.createElement('li')
  li.innerHTML = inputs
  ul.appendChild(li)

  inputs=document.getElementById('inputs').value=''

  

  

  // Create Delete Button 
  let deleteBtn = document.createElement('button')
  deleteBtn.id = 'deleteLine'
  deleteBtn.setAttribute('onclick', 'deleteitems(this.parentNode)')
  deleteBtn.innerText = "Delete"
  li.appendChild(deleteBtn)
  // console.log(deleteBtn)


  // Create EditBtn  Button 
  let EditBtn = document.createElement('button')
  EditBtn.id = 'deleteLine'
  EditBtn.setAttribute('onclick', 'EditBtn(this)')
  EditBtn.innerText = "Edit"
  li.appendChild(EditBtn)
  // console.log(EditBtn)
};

// Delete Funcations
const deleteitems = (e) => {
  e.parentNode.removeChild(e)
}

// Edit Funcations
function EditBtn(e) {
  let val = e.parentNode.firstChild.nodeValue;
  let edits = prompt('Lets Some Changing', val)
  e.parentNode.firstChild.nodeValue = edits
}


