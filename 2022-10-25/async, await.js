function fetchUser() {
    let url = 'https://jsonplaceholder.typicode.com/users/1'
    return fetch(url).then(function (response) {  // fetch() API는 크롬과 같은 최신 브라우저에서만 동작
        return response.json();
    });
}

function fetchTodo() {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    return fetch(url).then(function (response) {
        return response.json();
    })
}


const logTodoTitle = async () => {
    try {
        const user = await fetchUser();
        if (user.id === 1) {
            const todo = await fetchTodo();
            console.log(todo.title);  // delectus aut autem
        }
    } catch (err) {
        console.log(err);
    }
}

logTodoTitle();
