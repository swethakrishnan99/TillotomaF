
axios.get("https://tillotomaback.herokuapp.com/api/v1/students").then(res => {
    const studentsInfo = res.data
    studentsInfo.map(studentInfo => {
        const node = document.createElement("tr")
        node.setAttribute("data-key", studentInfo.id);
        node.innerHTML = `<td>${studentInfo.name}</td><td>${studentInfo.email}</td><td>${studentInfo.phone}</td>
        <td>${studentInfo.whatsapp}</td><td>${studentInfo.dob}</td><td>${studentInfo.education}</td><td>${studentInfo.presentOccupation}</td><td>${studentInfo.nationality}</td><td>${studentInfo.countryOfResidence}</td>`
        document.getElementById("std-table").appendChild(node)
    })
}).catch(err => console.log(err))