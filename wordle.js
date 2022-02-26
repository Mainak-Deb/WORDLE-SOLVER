greyarr=[]
inarr=[]           
nows=[]
inarray=[]


function  loadtext(){
    fetch('lineby.txt')
    .then(response => response.text())
    .then(data => {
        var lines = data.split('\n');
        var list = [];
        for (var line = 0; line < lines.length; line++) {
            list.push(lines[line]);
        }
        
        nows=list.sort()
        console.log(nows)
    });
}
loadtext();



function defaultbox(){
    document.getElementById('charid1').addEventListener('click', changecolor);
    document.getElementById('charid2').addEventListener('click', changecolor);
    document.getElementById('charid3').addEventListener('click', changecolor);
    document.getElementById('charid4').addEventListener('click', changecolor);
    document.getElementById('charid5').addEventListener('click', changecolor);

}
defaultbox();
function writeword(){
    const boxes = document.getElementById("play2").children;
    for (let i = 0; i < 5; i++) {
        boxes[i].innerHTML ="";
      }
    word=document.getElementById("theinput").value.trim().toLowerCase()
    console.log(word)
    if(word.length>5){
        document.getElementById("theinput").value=word.slice(0,5)
    }
    
    console.log(boxes)
    for (let i = 0; i < Math.min(5,word.length); i++) {
        boxes[i].innerHTML =word[i];
      }
}
function enterword(){
    threesets=getset()

    document.getElementById("play1").innerHTML+=document.getElementById("play2").innerHTML.replaceAll("charid", 'oldid')
    console.log(document.getElementById("play2").innerHTML.replaceAll("charid", 'oldid'))
    document.getElementById("play2").innerHTML=`
    <div class="alphas" id="charid1" > </div>
    <div class="alphas" id="charid2" ></div>
    <div class="alphas" id="charid3" ></div>
    <div class="alphas" id="charid4" ></div>
    <div class="alphas" id="charid5" ></div>

    `
    document.getElementById("theinput").value=''
    defaultbox();

    

}
function getset(){
    const boxes = document.getElementById("play2").children;
    word=document.getElementById("theinput").value.trim().toLowerCase()
    greenarr=[0,0,0,0,0]
    yellowarr=[0,0,0,0,0]

    for (let i = 0; i < 5; i++) {
        if(boxes[i].style.backgroundColor=="rgb(106, 170, 100)"){
            if(!inarr.includes(word[i])){ inarr.push(word[i])}
        }
        if(boxes[i].style.backgroundColor=="rgb(201, 180, 88)"){
            if(!inarr.includes(word[i])){ inarr.push(word[i])}
        }
    }
    for (let i = 0; i < 5; i++) {
        if(boxes[i].style.backgroundColor=="rgb(106, 170, 100)"){
            greenarr[i]=word[i]
            if(!inarr.includes(word[i])){ inarr.push(word[i])}
        }
        if(boxes[i].style.backgroundColor=="rgb(201, 180, 88)"){
            yellowarr[i]=word[i]
            if(!inarr.includes(word[i])){ inarr.push(word[i])}
        }
        if((boxes[i].style.backgroundColor=="") || (boxes[i].style.backgroundColor=="rgb(134, 136, 138)")){
            if((!greyarr.includes(word[i])) && (!inarr.includes(word[i])) ){ greyarr.push(word[i])}
        }
    }

    console.log("inarr",inarr)
    console.log("grey",greyarr)
    console.log("green",greenarr)
    console.log("yellow",yellowarr)

     
    for(let g=0;g<greenarr.length;g++){
        fornow=[]
        if(greenarr[g]!=0){
            for(let s=0;s<nows.length;s++){
                if(nows[s][g]==greenarr[g]){
                    fornow.push(nows[s])
                }
            }
            nows=fornow
        }
    }
    
    for(let y=0;y<yellowarr.length;y++){
        fornow=[]
        if(yellowarr[y]!=0){
            for(let s=0;s<nows.length;s++){
                let posof=nows[s].indexOf(yellowarr[y])
                if((posof!=-1) && (nows[s][y]!=yellowarr[y])){
                    fornow.push(nows[s])
                }
            }
            nows=fornow
        }
    }
    console.log(nows)

    for(let gy=0;gy<greyarr.length;gy++){
        console.log(greyarr[gy])
   
        fornow=[]
        for(let s=0;s<nows.length;s++){
            if(!nows[s].includes(greyarr[gy])){
                //console.log(nows[s],greyarr[gy])
                fornow.push(nows[s])
            }
        }
        nows=fornow
    }
    console.log(nows)

    var content=''
    for(let s=0;s<nows.length;s++){
        content+= "<div>"+nows[s]+"</div>"
    }
    document.getElementById("answers").innerHTML=content

    


}

function changecolor(){
    if((this.style.backgroundColor=="") || (this.style.backgroundColor=="rgb(134, 136, 138)")){
        this.style.backgroundColor="rgb(106, 170, 100)"
    }else if(this.style.backgroundColor=="rgb(106, 170, 100)"){
        this.style.backgroundColor="rgb(201, 180, 88)"
    }else if(this.style.backgroundColor=="rgb(201, 180, 88)"){
        this.style.backgroundColor="rgb(134, 136, 138)"
    }

   

   
}

// // $(function () {
//             //     document.getElementById('file').onchange = function () {
//             //         debugger;
//             //         var file = this.files[0];
//             //         console.log(file)
//             //         var reader = new FileReader();
//             //         reader.onload = function (progressEvent) {
//             //             // Entire file
//             //             console.log(this.result);
//             //             // By lines
//             //             var lines = this.result.split('\n');
//             //             var list = [];
//             //             for (var line = 0; line < lines.length; line++) {
//             //                 list.push(lines[line]);
//             //             }
//             //             console.log(list.sort())
//             //         };
//             //         reader.readAsText('lineby.txt');
//             //     };
//             // });

           


//             function fetchword(){
//                 greenarr=[0,0,0,0,0]
//                 yellowarr=[0,0,0,0,0]

//                 console.log("print")
//                 word=document.getElementById("word").value.trim().toLowerCase()
//                 yel=document.getElementById("yellar").value.trim().toLowerCase()
//                 gre=document.getElementById("greear").value.trim().toLowerCase()

//                 //if(word.length!=5) return 

//                 console.log(word,yel,gre)
//                 for(let i=0;i<5;i++){
//                     if((yel[i]!='-') && (!inarray.includes(yel[i]))){
//                         inarray.push(yel[i])
//                     }
//                     if((gre[i]!='-') && (!inarray.includes(gre[i]))){
//                         inarray.push(gre[i])
//                     }
//                 }
//                 for(let i=0;i<5;i++){
//                     if((!inarray.includes(word[i])) && (!greenarr.includes(word[i]))){
//                         greyarr.push(word[i])
//                     }
//                     if(yel[i]!='-'){
//                         if(yellowarr[i]==0){
//                             yellowarr[i]=yel[i]
//                         }
//                     }
//                     if (gre[i]!='-'){
//                         if(greenarr[i]==0){
//                             greenarr[i]=gre[i]
//                         }
//                     } 
//                 }
//                 console.log("inarr",inarray)
//                 console.log("grey",greyarr)
//                 console.log("green",greenarr)
//                 console.log("yellow",yellowarr)



                
//                 for(let g=0;g<greenarr.length;g++){
//                     fornow=[]
//                     if(greenarr[g]!=0){
//                         for(let s=0;s<nows.length;s++){
//                             if(nows[s][g]==greenarr[g]){
//                                 fornow.push(nows[s])
//                             }
//                         }
//                         nows=fornow
//                     }
//                 }
                
//                 for(let y=0;y<yellowarr.length;y++){
//                     fornow=[]
//                     if(yellowarr[y]!=0){
//                         for(let s=0;s<nows.length;s++){
//                             let posof=nows[s].indexOf(yellowarr[y])
//                             if((posof!=-1) && (nows[s][y]!=yellowarr[y])){
//                                 fornow.push(nows[s])
//                             }
//                         }
//                         nows=fornow
//                     }
//                 }
//                 console.log(nows)
//                 console.log(greyarr)
//                 for(let gy=0;gy<greyarr.length;gy++){
//                     console.log(greyarr[gy])
               
//                     fornow=[]
//                     for(let s=0;s<nows.length;s++){
//                         if(!nows[s].includes(greyarr[gy])){
//                             //console.log(nows[s],greyarr[gy])
//                             fornow.push(nows[s])
//                         }
//                     }
//                     nows=fornow
//                 }
//                 console.log(nows)
                


//             }

            
            