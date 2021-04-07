var app = new Vue(
{
el: "#app",
data: {
mails: []

},
mounted: function(){
// var mailsBox =[]
  var self = this;

  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(function (response){
    for (var i = 1; i <= 10 ; i++) {
      self.mails.push(response.data.response);

    }
    console.log(mails);
    // const result = response.data;
    // console.log(response.data.response);
  });

}
}
);
