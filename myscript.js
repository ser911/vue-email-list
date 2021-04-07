var app = new Vue(
{
el: "#app",
data: {
mails: []

},
mounted: function(){

  var self = this;

    for (var i = 1; i <= 10 ; i++) {
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(function (response){
      self.mails.push(response.data.response)

    });
    // console.log(mails);
    // const result = response.data;
    // console.log(response.data.response);
  }}


});
