let url = require("url");

exports.getTourStudents = (req,res) => {

    res.status(200);
    res.json({
        result: "sucess",
        data: {
            params: req.params,
            urlinfo: req.url,
            urlextract: url.parse(req.url, true),
        },
    });
};