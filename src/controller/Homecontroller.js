const getHomepage = (req, res) => {
    res.send('Hello World!');
};
const Locc = (req, res) => {
    res.send('Lo cc');
};
const cmm = (req, res) => {
     res.render('example.ejs') // Render the example.ejs view
};
module.exports = {
    getHomepage, 
    Locc,
    cmm
};