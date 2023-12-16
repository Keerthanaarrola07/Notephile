async function input(event) {
    event.preventDefault();

    let notes = document.getElementById("notes").value;
    let title = document.getElementById("title").value;
    const UserId = getCookie("userId")

    let formData = {
        content: notes,
        UserId: UserId,
        title: title,

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
        //console.log('data: ', data);
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
    const UserId=getCookie("userId")
    ul.setAttribute("id","list-container")
    await fetch("http://localhost:3000/notes/get-notes-by-userid/"+UserId, options).then(res => res.json()).then(data => {
        if (data.length > 0) {
            data.map(listItem => {
                //console.log('listItem: ', listItem);
                const li = document.createElement("li");
                li.innerHTML = `${listItem.title}- ${listItem.content}`;
                ul.appendChild(li)
            })
            //console.log('ul: ', ul);
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

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}
