/**
 * Created by amit on 03/06/17.
 */
module.exports = (app) => {

    app.use((req, res, next) => {
        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
            res.render('404.html');
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({error: 'Not found'});
            return;
        }

        // default to plain-text. send()
        res.type('txt').send('Not found');
    });
};