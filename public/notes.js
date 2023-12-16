async function input(event) {
    event.preventDefault();

    let notes = document.getElementById("notes").value;
    let title = document.getElementById("title").value;
    const user = JSON.parse(localStorage.getItem("user") ?? {});
    console.log('user: ', user);

    let formData = {
        content: notes,
        UserId: user.UserId,
        title,

    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }
    await fetch("http://localhost:3000/notes/add-note", options).then(res => res.json()
    ).then(data => {
        console.log('data: ', data);
        if (data.success) {
            // fetchList()
            const ul = document.getElementById("list-container");
            const li = document.createElement("li")
            li.innerHTML = `${formData.title}-${formData.content}`
            ul.appendChild(li)
            document.getElementById("notesForm").reset()

            alert(`Note added successfully!`);
        }
    })
};

const fetchList = async () => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    const listContainer = document.getElementById("notes-list")
    const ul = document.createElement("ul")
    ul.setAttribute("id","list-container")
    await fetch("http://localhost:3000/notes/get-notes-by-userid/12", options).then(res => res.json()).then(data => {
        if (data.length > 0) {
            data.map(listItem => {
                console.log('listItem: ', listItem);
                const li = document.createElement("li");
                li.innerHTML = `${listItem.title}- ${listItem.content}`;
                ul.appendChild(li)
            })
            console.log('ul: ', ul);
            listContainer.appendChild(ul)
        }
    }
    )

}

document.addEventListener('DOMContentLoaded', async function () {
    let inputForm = document.getElementById('notesForm');
    inputForm.addEventListener('submit', input)
    fetchList()
});
