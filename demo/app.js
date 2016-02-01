var app = new Spa();

var aboutPage = document.getElementById('go-about'),
    aboutPage2 = document.getElementById('go-about2');

// aboutPage.onclick = function(){
//     app.router.go('about', {id: '123'});
// };
// aboutPage2.onclick = function(){
//     app.router.go('about');
// };

document.getElementById('go-back').onclick = function(){
    app.router.back();
};

document.getElementById('go-back2').onclick = function(){
    app.router.back();
};

app.router.before('about', function(page){
    console.log(page);
});

app.router.after('about', function(page){
    console.log(page);
});

// document.getElementById('go-services').onclick = function(){
//     app.router.go('services', {name: 'hejx'});
// };

app.router.before('services', function(page){
    console.log(page);
});
app.router.after('services', function(page){
    console.log(page);
});