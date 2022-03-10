function rendMgrCard(mgr){
    mgrCard = `
    <div class="card" style="width:18rem;>
        <div class="card-body>
            <h5 class="card-title">${mgr.managerName}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class = "list-group-item"> ID: ${mgr.managerID}</li>
            <li class = "list-group-item"> Office: ${data.managerOffice}</li>
        </ul>
        <div class="card-body">
            <a href=mailto: ${mgr.managerEmail}>Email: ${mgr.managerEmail}</a>
        </div>
    </div>`
    return mgrCard
}

function rendEngCards(engCdArr){
    let engCdLit = []
    engCdArr.forEach((eng) => {
        const engCd = `
        <div class="card" style="width:18rem;>
            <div class="card-body>
                <h5 class="card-title">${eng.engName}</h5>
            </div>
            <div class = "card-body"> ID: ${eng.engID}</div>
            <div class="card-body">
                <a href=${eng.engGit}>GitHub: ${eng.engGit}</a>
            </div>
            <div class="card-body">
                <a href=mailto: ${eng.engEmail}>Email: ${eng.engEmail}</a>
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
        <div class="card" style="width:18rem;>
            <div class="card-body>
                <h5 class="card-title">${int.intName}</h5>
            </div>
            <div class = "card-body"> ID: ${int.intID}</div>
            <div class = "card-body">
                A student at ${int.intSchool}
            </div>
            <div class="card-body">
                <a href=mailto: ${int.intEmail}>Email: ${int.intEmail}</a>
            </div>
        </div>`
        intCdLit.push(intCd)
    })
    intCards = intCdLit.join('')
    return intCards
}

module.exports = {rendMgrCard, rendEngCards, rendIntCards}