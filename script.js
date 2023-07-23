fetch("data.json")
.then(function(response){
  return response.json();
})
.then(function(allData){
  let placeholder = document.querySelector("#data-output");
  let out = "";
  for(let data of allData){
      out += `
        <tr>
          <td>${data.name}</td>
          <td>${data.age}</td>
          <td>${data.country}</td>
        </tr>
      `;
  }
  placeholder.innerHTML = out;
})
