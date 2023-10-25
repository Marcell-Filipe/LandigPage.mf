function getProjets(){
    const urlGitHub = 'https://api.github.com/users/Marcell-Filipe/repos'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((Response) => {
        loadingElement.style.display = 'none'
        console.log(Response)
        showProjects(Response)
    })
    .catch((e) => {
        console.log(e)
    })
}

function showProjects(data){
    var listeElement = document.getElementById('MY-PROJETS-LIST')

    for(let i = 0; i < data.length; i++)
    {
        let a =document.createElement("a")
        a.href = data[i]['clone_url']
        a.target ='_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listeElement.appendChild(a)
    }
}

getProjets()