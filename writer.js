function writeHTML(mgrCd, engCdArr, intCdArr){
    return `<!DOCTYPE html>
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
                ${mgrCd}
            </div>
            <div class="engineer-cards card-group">
                ${eng}
            </div>
            <div class="intern-cards card-group">
                ${int}
            </div>
        </main>
    
    </body>
    
    
    
    
    </html>`
}

module.exports = writeHTML