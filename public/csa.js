$(function(){

    var sighnup=$("#button1");
    var login=$("#button2");
    var search= $("#search");
    var inputBox= $("#searchbox");
    var list=$("#list");
search.click(()=>{

    if(!inputBox.val())
    {
        alert("enter to search");
    }else
    {
        $.post("http://localhost:9990/sahil",{a:inputBox.val()},(data)=>{
         console.log(data);

        list.append(`<li>${data}</li>`);
        alert(data);
        });
    }
})





})