function refresh(){ document.getElementById("in").value = ""; document.getElementById("result").innerHTML = ""; }
function drowsap(){
   let i = document.getElementById("in").value.toLowerCase();
   let out = "";
   let page = [];
   if(i === "through snow or rain or heat or gloom of night"){page.push({name:"Personnel File", link:"personnel/53656c6c206120636f756e7472792120576"});}
   else if(i === "like the wind"){page.push({name:"Personnel File", link:"personnel/2077656c6c2061732074686520656172746"});}
   else if(i === "with its wings dumbass"){page.push({name:"Personnel File", link:"personnel/206f6620686973206368696c6472656e3f20"});}
   else if(i === "until it can fly no longer"){
      page.push({name:"Personnel File", link:"personnel/722c2074686520636c6f75647320616e642"});
      page.push({name:"(12-25-0977) Email Notification", link:"intel/454e54495459"});
   }
   else if(i === "with friend or flock beside them"){page.push({name:"Personnel File", link:"personnel/879206e6f742073656c6c20746865206169"});}
   else if(i === "on wings of ash and bone" || i === "on wings of ash"){
      page.push({name:"Personnel File", link:"personnel/0746865206772656174207365612c206173"});
      page.push({name:"Diversion Testfile 01", link:"1"});
      page.push({name:"Diversion Testfile 02", link:"2"});
      page.push({name:"Diversion Testfile 03", link:"3"});
      page.push({name:"Diversion Testfile 04", link:"4"});
      page.push({name:"Diversion Testfile 05", link:"5"});
      page.push({name:"Diversion Testfile 06", link:"6"});
      page.push({name:"Diversion Testfile 07", link:"7"});
      page.push({name:"Diversion Testfile 08", link:"8"});
      page.push({name:"Diversion Testfile 09", link:"9"});
   }
   else if(i === "over its augurs"){page.push({name:"Personnel File", link:"personnel/617420537069726974206d616b652074686"});}
   else if(i === "only on tuesdays"){page.push({name:"Personnel File", link:"personnel/83f20446964206e6f742074686520477265"});}
   else if(i === "no differently than the hawk"){page.push({name:"Personnel File", link:"personnel/56d20616c6c20666f722074686520757365"});}
   else if(i === "knock knock"){page.push({name:"Who's there?", link:"https://bestlifeonline.com/knock-knock-jokes/"});}
   if(page.length != 0){
      out += "<p style=\"color:Chartreuse;\">Access Granted.</p>\n";
      for(let i = 0; i < page.length; i++){
         out += "<a href=\"" + page[i].link + "\" style=\"color:White;\">>  "+page[i].name+"</a><br \\>\n";
      }
   }
   document.getElementById("result").innerHTML = out;
}
