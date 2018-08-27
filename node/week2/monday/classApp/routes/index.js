app.get('/',
    (req, res) => {
        req.message = "hello ";
        res.send(req.message);
    }
);