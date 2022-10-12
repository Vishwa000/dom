//  var ele = document.createElement("div");
// console.log(ele);
// ele.innerHTML = "<span>this is span</span>";

// document.body.append(ele);

//convert it into DOM code
// var ele = document.createElement("div");
// console.log(ele);

// ele.innerHTML = "<span class=main1>this is div</span>";
// ele.setAttribute("class","main");


// document.body.append(ele);

// var ele = document.createElement("div");
// ele.setAttribute("class","main");

// var ele1 = document.createElement("div");
// ele1.setAttribute("class","main1");
// ele1.innerHTML="this is span"
// ele.append(ele1);

// document.body.append(ele)

// for(var i=0;i<10;i++){
//     var ele1 = document.createElement("div");
// ele1.setAttribute("class","main1");
// ele1.innerHTML="this is span"
// document.body.append(ele1);
// }
// function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.setAttribute(attrname1,attrvalue1);
//     return ele;
// }
// function createlinebreak(tagname){
// var ele=document.createElement(tagname);
// return ele;
// }

// var label=createlabels("label","for","firstname","firstname");
// var br1=createlinebreak("br");
// var input=createinput("input","type","text","id","firstname");
// var br2=createlinebreak("br");

// var middlename=createlabels("label","for","middlename","middlename");
// var br3=createlinebreak("br");
// var middleinput=createinput("input","type","text","id","middlename");
// var br4=createlinebreak("br");

// var lastname=createlabels("label","for","lastname","lastname");
// var br5=createlinebreak("br");
// var lastinput=createinput("input","type","text","id","lastname");
// var br6=createlinebreak("br");

// var phonenumber=createlabels("label","for","phonenumber","Phonenumber");
// var br7=createlinebreak("br");
// var phinput=createinput("input","type","text","id","phonenumber");
// var br8=createlinebreak("br");



// document.body.append(label,br1,input,br2,middlename,br3,middleinput,br4,lastname,br5,lastinput,br6,phonenumber,br7,phinput,br8);
function foo(){
    var res=document.getElementById("first").value;
    var res1=document.getElementById("middle").value;
    var res2=document.getElementById("last").value;
    var res3=document.getElementById("email").value;
    var res4=document.getElementById("pass").value;
     console.log(res,res1,res2,res3,res4);
}



