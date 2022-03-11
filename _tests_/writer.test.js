
const team = require('../team')
const writer = require('../writer')

describe("writeHTML", ()=>{
    it("should write html code based on parameters from card functions", ()=>{
        const str = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
          <title>Git your Team!</title>
        </head>
        <body>
            <header>
              <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4">Project Team</h1>
                  <p class="lead">Everyone involved in this project can be found here.</p>
                </div>
              </div>
            </header>
            <main>
                <div class="manager-card">
                <div class="card" style="width:18rem";>
                <div class="card-body>
                <h5 class="card-title">Graeme</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class = "list-group-item"> ID: Montrose</li>
                    <li class = "list-group-item"> Office: My Home</li>
                </ul>
                <div class="card-body">
                    <a href=mailto: teentrose@gmail.com>Email: teentrose@gmail.com</a>
                </div>
            </div>
                </div>
                <div class="engineer-cards card-group">
                <div class="card" style="width:18rem;>
                <div class="card-body>
                    <h5 class="card-title">Graeme</h5>
                </div>
                <div class = "card-body"> ID: Montrose</div>
                <div class="card-body">
                    <a href=github.com/ThreeBrainCells>GitHub: github.com/ThreeBrainCells</a>
                </div>
                <div class="card-body">
                    <a href=mailto: teentrose@gmail.com>Email: teentrose@gmail.com</a>
                </div>
            </div>
            <div class="card" style="width:18rem;>
                <div class="card-body>
                    <h5 class="card-title">Larry</h5>
                </div>
                <div class = "card-body"> ID: Montrose</div>
                <div class="card-body">
                    <a href=NoGit>GitHub: NoGit</a>
                </div>
                <div class="card-body">
                    <a href=mailto: larry.com>Email: larry.com</a>
                </div>
            </div>
                </div>
                <div class="intern-cards card-group">
                <div class="card" style="width:18rem;>
                <div class="card-body>
                    <h5 class="card-title">Graeme</h5>
                </div>
                <div class = "card-body"> ID: Montrose</div>
                <div class = "card-body">
                    A student at CU Denver
                </div>
                <div class="card-body">
                    <a href=mailto: teentrose@gmail.com>Email: teentrose@gmail.com</a>
                </div>
            </div>``
            <div class="card" style="width:18rem;>
                <div class="card-body>
                    <h5 class="card-title">Scout</h5>
                </div>
                <div class = "card-body"> ID: Radley</div>
                <div class = "card-body">
                    A student at Mockingbird U
                </div>
                <div class="card-body">
                    <a href=mailto: Stuff>Email: Stuff</a>
                </div>
            </div>
                </div>
            </main>
        
        </body>
        
        
        
        
        </html>`;
    const mgrCard = `<div class="card" style="width:18rem";>
        <div class="card-body>
        <h5 class="card-title">Graeme</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class = "list-group-item"> ID: Montrose</li>
            <li class = "list-group-item"> Office: My Home</li>
        </ul>
        <div class="card-body">
            <a href=mailto: teentrose@gmail.com>Email: teentrose@gmail.com</a>
        </div>
    </div>`;
        const engCards = `
        <div class="card" style="width:18rem;>
            <div class="card-body>
                <h5 class="card-title">Graeme</h5>
            </div>
            <div class = "card-body"> ID: Montrose</div>
            <div class="card-body">
                <a href=github.com/ThreeBrainCells>GitHub: github.com/ThreeBrainCells</a>
            </div>
            <div class="card-body">
                <a href=mailto: teentrose@gmail.com>Email: teentrose@gmail.com</a>
            </div>
        </div>
        <div class="card" style="width:18rem;>
            <div class="card-body>
                <h5 class="card-title">Larry</h5>
            </div>
            <div class = "card-body"> ID: Montrose</div>
            <div class="card-body">
                <a href=NoGit>GitHub: NoGit</a>
            </div>
            <div class="card-body">
                <a href=mailto: larry.com>Email: larry.com</a>
            </div>
        </div>`;
        const intCards = `
        <div class="card" style="width:18rem;>
            <div class="card-body>
                <h5 class="card-title">Graeme</h5>
            </div>
            <div class = "card-body"> ID: Montrose</div>
            <div class = "card-body">
                A student at CU Denver
            </div>
            <div class="card-body">
                <a href=mailto: teentrose@gmail.com>Email: teentrose@gmail.com</a>
            </div>
        </div>``
        <div class="card" style="width:18rem;>
            <div class="card-body>
                <h5 class="card-title">Scout</h5>
            </div>
            <div class = "card-body"> ID: Radley</div>
            <div class = "card-body">
                A student at Mockingbird U
            </div>
            <div class="card-body">
                <a href=mailto: Stuff>Email: Stuff</a>
            </div>
        </div>`;
        const result = writer.writeHTML(mgrCard, engCards, intCards);
        expect(result).toEqual(str)
    })
})