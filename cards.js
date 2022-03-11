function rendMgrCard(mgr){
    mgrCard = `
    <div class="card" style="width:18rem;>
        <div class="card-body>
            <h5 class="card-title">${mgr.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class = "list-group-item"> ID: ${mgr.id}</li>
            <li class = "list-group-item"> Office: ${mgr.office}</li>
        </ul>
        <div class="card-body">
            <a href=mailto: ${mgr.email}>Email: ${mgr.email}</a>
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
                <h5 class="card-title">${eng.name}</h5>
            </div>
            <div class = "card-body"> ID: ${eng.id}</div>
            <div class="card-body">
                <a href=${eng.github}>GitHub: ${eng.github}</a>
            </div>
            <div class="card-body">
                <a href=mailto: ${eng.email}>Email: ${eng.email}</a>
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
                <h5 class="card-title">${int.name}</h5>
            </div>
            <div class = "card-body"> ID: ${int.id}</div>
            <div class = "card-body">
                A student at ${int.school}
            </div>
            <div class="card-body">
                <a href=mailto: ${int.email}>Email: ${int.email}</a>
            </div>
        </div>`
        intCdLit.push(intCd)
    })
    intCards = intCdLit.join('')
    return intCards
}

module.exports = {rendMgrCard, rendEngCards, rendIntCards}