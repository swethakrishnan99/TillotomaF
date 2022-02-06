axios.get("https://tillotomaback.herokuapp.com/api/v1/faculties").then(res => {
    const facultyInfo = res.data
    facultyInfo.map(fInfo => {
        const node = document.createElement("tr")
        node.setAttribute("data-key", fInfo.id);
        node.innerHTML = `<td>${fInfo.name}</td><td>${fInfo.email}</td><td>${fInfo.phone}</td>
        <td>${fInfo.whatsapp}</td><td>${fInfo.dob}</td><td>${fInfo.nationality}</td><td>${fInfo.countryOfResidence}</td>`
        document.getElementById("std-table").appendChild(node)
    })
}).catch(err => console.log(err))