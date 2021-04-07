var app = new Vue(
{
el: "#app",
data: {
mail: ""

},
mounted: function(){

  var self = this;

  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(function (response){
    self.mail = response.data.response;
    // const result = response.data;
    // console.log(response.data.response);
  });

}
}
);
