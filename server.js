const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());
app.set('port', process.env.PORT || 3000);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'),
        function (err) {
            if (err) {
                res.status(500).send(err)
            }
        })
})

const server = app.listen(app.get('port'), function () {
    console.log('listening on port ', server.address().port);
});