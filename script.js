fetch("data.json")
.then(function(response){
  return response.json();
})
.then(function(data){
  let placeholder = document.querySelector("#data-output");
  let out = "";
  for(let data of data){

    out += `
      <tr>
        <td>data.name</td>
        <td>data.age</td>
        <td>data.country</td>
      </tr>
    `;
  }
  placeholder.innerHTML = out;
})
