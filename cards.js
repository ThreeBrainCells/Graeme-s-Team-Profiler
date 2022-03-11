function rendMgrCard(mgr){
    mgrCard = `
    <div class="card align-items:center" style="width:18rem;>
        <div class = "card-header>${mgr.getRole()}</div>
        <div class="card-body>
            <h5 class="card-title">${mgr.getName()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class = "list-group-item"> ID: ${mgr.getID()}</li>
            <li class = "list-group-item"> Office: ${mgr.getOffice()}</li>
        </ul>
        <div class="card-body">
            <a href=mailto: ${mgr.getEmail()}>Email: ${mgr.getEmail()}</a>
        </div>
    </div>`
    return mgrCard
}

function rendEngCards(engCdArr){
    let engCdLit = []
    engCdArr.forEach((eng) => {
        const engCd = `
        <div class="card align-items:center" style="width:18rem;>
        <div class = "card-header>${eng.getRole()}</div>
            <div class="card-body>
                <h5 class="card-title">${eng.getName()}</h5>
            </div>
            <div class = "card-body"> ID: ${eng.getID()}</div>
            <div class="card-body">
                <a href=${eng.getGithub()}>GitHub: ${eng.getGithub()}</a>
            </div>
            <div class="card-body">
                <a href=mailto: ${eng.getEmail()}>Email: ${eng.getEmail()}</a>
            </div>
        </div>`
        engCdLit.push(engCd)
    })
    engCards = engCdLit.join('')
    return engCards
}
function rendIntCards(intCdArr){
    let intCdLit = []
    intCdArr.forEach((int) => {
        const intCd = `
        <div class="card align-items:center" style="width:18rem;>
        <div class = "card-header>${int.getRole()}</div>
            <div class="card-body>
                <h5 class="card-title">${int.getName()}</h5>
            </div>
            <div class = "card-body"> ID: ${int.getID()}</div>
            <div class = "card-body">
                A student at ${int.getSchool()}
            </div>
            <div class="card-body">
                <a href=mailto: ${int.getEmail()}>Email: ${int.getEmail()}</a>
            </div>
        </div>`
        intCdLit.push(intCd)
    })
    intCards = intCdLit.join('')
    return intCards
}

module.exports = {rendMgrCard, rendEngCards, rendIntCards}