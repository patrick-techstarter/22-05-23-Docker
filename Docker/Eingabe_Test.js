const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let startEingabe = 'Beispieltext';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <section>
          <h2>Testeingabe</h2>
          <h3>${startEingabe}</h3>
        </section>
        <form action="/Eingabe" method="POST">
          <div class="form-control">
            <label>Eingabe: </label>
            <input type="text" name="goal">
          </div>
          <button>Eingabe hinzufügen</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/Eingabe', (req, res) => {
  const eingabeText = req.body.goal;
  console.log(eingabeText);
  startEingabe = eingabeText;
  res.redirect('/');
});

app.listen(80);
