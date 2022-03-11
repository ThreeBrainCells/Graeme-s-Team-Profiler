const team = require('../team');
const cards = require('../cards');

describe("rendMgrCard", () =>{
    it("should create html code with inputs from parameters", () =>{
        const str =     `<div class="card" style="width:18rem";>
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
    const mgr = new team.Manager('Graeme', 'Montrose', 'teentrose@gmail.com', 'My Home');
    const result = cards.rendMgrCard(mgr);
    expect(result).toEqual(str);
    });
});

describe("rendEngCard", () =>{
    it("should create html code with inputs from parameters", () => {
        const str = `
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
        const eng1 = new team.Engineer('Graeme', "Montrose", "github.com/ThreeBrainCells", "teentrose@gmail.com");
        const eng2 = new team.Engineer("Larry", "Montrose", "NoGit", "larry.com");
        const engCdArr = [eng1, eng2];
        const result = cards.rendEngCards(engCdArr);
        expect(result).toEqual(str);
    });
});
describe("rendIntCard", () =>{
    it("should create html code with inputs from parameters", () =>{
        const str = `
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
        </div>`
        const int1 = new team.Intern("Graeme", "Montrose", "teentrose@gmail.com", "CU Denver")
        const int2 = new team.Intern("Scout", "Radley", "Stuff", "Mockingbird U")
        const intCdArr = [int1, int2]
        const result = cards.rendIntCards(intCdArr)
        expect(result).toEqual(str)
    });
});