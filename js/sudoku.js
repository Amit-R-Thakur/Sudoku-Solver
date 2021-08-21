
    let Gensdk=[
    [0 ,0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0,0, 0, 0, 0, 0],
    [0,0 ,0 ,0, 0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0, 0, 0, 0],
    [0, 0, 0 ,0 ,0 ,0, 0 ,0 ,0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0, 0],
    [0, 0, 0 ,0, 0 ,0, 0, 0, 0],
    [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0, 0, 0 ,0, 0 ,0 ,0 ,0, 0]

    ];
    //Function for check in Raw

    function  checkRow(board,Row,num)
    {
        for(let i=0;i<board.length;i++)
        {
            if(board[Row][i]==num)
            return true;
        }
        return false;
    }

    //function for check in Column
    function checkColumn(board,column,num)
    {
        for(let i=0;i<board.length;i++)
        {
            if(board[i][column]==num)
            return true;
        }
        return false;
    }
    //Functin for Check in each Grid

    function checkGrid(board,row,column,num)
    {
        let tempRow,tempColumn;
        if(row<3)tempRow=0;else if(row<6)tempRow=3;else tempRow=6;
        if(column<3)tempColumn=0; else if(column<6)tempColumn=3;else tempColumn=6;
        for(let i=tempRow;i<tempRow+3;i++)
        {
            for(let j=tempColumn;j<tempColumn+3;j++)
            {
                if(board[i][j]==num)
                return true;
            }
        }

        return false;
    }
    //Function For Check Valid number

    function isValidNumber(board,row,column,num)
    {
        return !checkRow(board,row,num)&&!checkColumn(board,column,num)&&!checkGrid(board,row,column,num);
    }

    //Function For Solve board.......
    function solveBoard(board)
    {
        
        for(let i=0;i<board.length;i++)
        {
            for(let j=0;j<board.length;j++)
            {
                if(board[i][j]==0)
                {
                    for(let value=1;value<=9;value++)
                    {
                        if(isValidNumber(board,i,j,value))
                        {
                            board[i][j]=value;
                            if (solveBoard(board)) {
                                return true;
                              }
                              else {
                                board[i][j] = 0;
                              }

                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }


//Function for Startup Game Setup
var mainDiv=document.createElement("div");
    mainDiv.classList="main";
    document.body.appendChild(mainDiv);
    //function For Print Value of Create Sudoku......
    function PCrValue()
      {
    let inp=document.querySelectorAll(".ranInp");
    let p=0;
    for(i=0;i<Gensdk.length;i++)
    {
        for(j=0;j<Gensdk.length;j++)
        {
            Gensdk[i][j]=Number(inp[p].value);
            p++;

        }

    }
 }
   
function StartUp()
{
  let startMainDiv=document.createElement("div");
  startMainDiv.classList.add("startup"); 
  mainDiv.appendChild(startMainDiv);
  let HeadingDiv=document.createElement("div");
  let heading="<h1>Sudoku Solver<h1>";
  HeadingDiv.innerHTML=heading;
  HeadingDiv.classList.add("heading");
  startMainDiv.appendChild(HeadingDiv);
  let GenrateDiv=document.createElement("div");
  GenrateDiv.classList.add("GenrateMain");
  startMainDiv.appendChild(GenrateDiv);
  let genBtnDiv=document.createElement("div");
  GenrateDiv.appendChild(genBtnDiv);
  genBtnDiv.classList.add("genbtn");
  let fbtndiv=document.createElement("div");
  let sbtndiv=document.createElement("div");
  let btn="<button id='GenSudoku'>Generate New Sudoku</button>";
  let sbtn="<button id='CrSudoku'>Create Own Puzzle</button>";
  let disSudokuDiv=document.createElement("div");
  GenrateDiv.appendChild(disSudokuDiv);
  disSudokuDiv.classList.add("disSudoku");
  genBtnDiv.appendChild(fbtndiv);
  genBtnDiv.appendChild(sbtndiv);
  fbtndiv.innerHTML=btn;
  sbtndiv.innerHTML=sbtn;
  document.querySelector("#CrSudoku").classList.add("notvisible");
//coding for Create New Sudoku

document.querySelector("#CrSudoku").addEventListener("click",()=>{
    let row=0,col=0;
    setZero();
    setValue();
    let inp=document.querySelectorAll(".ranInp");
    inp.forEach((elm,inx)=>{
        elm.removeAttribute("readonly");
        
    });


});





//******************************
for(let i=0; i<Gensdk.length;i++)
{
    for(let j=0;j<Gensdk.length;j++)
    {
        let div=document.createElement("div");
        div.classList.add("MainRnDiv");
        div.classList.add("notvisible");
        let inp=document.createElement("input");
        inp.classList.add("ranInp");
        if(j==3||j==6)
        div.classList.add(`borderleft1`);
        if(i==3||i==6)
        div.classList.add(`bordertop1`);
        
        if(Gensdk[i][j]!=0)
        inp.value=Gensdk[i][j];
        
        inp.setAttribute("readonly","");

        div.appendChild(inp);
        disSudokuDiv.appendChild(div);

    }
}

let PlayGameDiv=document.createElement("div");
PlayGameDiv.classList.add("SgameDiv");

document.querySelector("#GenSudoku").addEventListener("click",()=>{
    
    document.querySelector("#GenSudoku").innerText="Generate Random Puzzle";   
document.querySelector("#CrSudoku").classList.remove("notvisible");
randomSudoku();
let inp=document.querySelectorAll(".ranInp");
    inp.forEach((elm,inx)=>{
        elm.setAttribute("readonly","");
        
    });
RanValueForSudoku();

let PlayBtn="<button id='play'>Solve Sudoku</button>";
PlayGameDiv.innerHTML=PlayBtn;
document.querySelector("#play").addEventListener("click",()=>{
    PCrValue();
    setup(Gensdk);
    
})
       })

startMainDiv.appendChild(PlayGameDiv);
}
StartUp();
//Function for random print sudoku

function randomSudoku()
{
    let all=document.querySelectorAll(".MainRnDiv");
    all.forEach((elm)=>{elm.classList.remove("notvisible")});
}
//Function for set value 0 of Random Sudoku
function setZero()
{
    for(i=0;i<Gensdk.length;i++)
    {
        for(let j=0;j<Gensdk.length;j++)
        {
            Gensdk[i][j]=0;
        }
    }
}
//Function for Random Value For Sudoku.........
function RanValueForSudoku()
{
    setZero();
    for(let i=0;i<20;i++)
    {
        let row=Math.floor(Math.random()*9);
        let col=Math.floor(Math.random()*9);
        let num=Math.floor(Math.random()*9)+1;
       if(isValidNumber(Gensdk,row,col,num))
       {
           Gensdk[row][col]=num;
       }
       else
       {
           continue;
       }

    }
    setValue();

}
//Function For set Value to Sudoku
function setValue()
{

    let inp=document.querySelectorAll(".ranInp");
    let n=0;
    Gensdk.forEach((elm)=>{
        elm.forEach((crnVal)=>{
            if(crnVal!=0)
            inp[n].value=crnVal;
            else
            inp[n].value="";
            n++;
        });

    });
}
//Function For set Display none by class Name
function SetNone(classs)
{
    let elm=document.querySelector(`.${classs}`);
    elm.classList.toggle("notVisible");
}

//Function For set Display none by Id Name
function SetNoneId(idd)
{
    let elm=document.querySelector(`#${idd}`);
    elm.classList.toggle("notVisible");
}

///Function For setup Game 

function setup(sudoku)
{
   SetNone("SgameDiv");//SgameDiv
   SetNoneId("Play");
    SetNone("GenrateMain");
    var set=document.createElement("div");
    set.classList="sudokuSetup";
    let startMainDiv=document.querySelector(".startup");
    // set.style.background="green";
    
    startMainDiv.appendChild(set);
    let c=0;
   for(let i=0;i<sudoku.length;i++)
   {
        for(let j=0;j<sudoku[i].length;j++)
        {
            c++;
            let newdiv=document.createElement("div");
            newdiv.classList=`element`;
           // newdiv.classList.add("notVisible");
            if(j==3||j==6)
            newdiv.classList.add(`borderleft`);
            if(i==3||i==6)
            newdiv.classList.add(`bordertop`);
           let inp=document.createElement("input");
           inp.addEventListener("input",()=>{
               if(!isValidNumber(sudoku,i,j,inp.value)&&inp.value!=0)
               {
                   console.log("invalid");
                   return;
               }

                    })
           inp.classList=`elm${c}`;
           if(sudoku[i][j]!=0)
           {
            inp.value=sudoku[i][j];
            inp.setAttribute("readonly","");
           }
           else
           {
               inp.style.backgroundColor="coral";
           }
            newdiv.appendChild(inp);

            // newdiv.innerHTML=`<input value="${sudoku[i][j]}">`;
           

            set.appendChild(newdiv);
           
        }
    
    }

    let buttonDiv=document.createElement("div");
    buttonDiv.classList.add("divhome");
    startMainDiv.appendChild(buttonDiv);
    startMainDiv.classList.add("secondClass");
    buttonDiv.style.display="grid";
    buttonDiv.style.gridTemplateColumns="1fr 1fr";
    // console.log(buttonDiv);
    let button=document.createElement("button");
    let SecondButton=document.createElement("button");
    SecondButton.innerText="Home";
    button.innerText="Auto SOLVE";
    buttonDiv.appendChild(SecondButton);
    buttonDiv.appendChild(button);
    
    SecondButton.addEventListener("click",()=>{window.location.reload()});
    button.onclick=()=>{
                   solveBoard(sudoku);
                   console.table(sudoku);
                     let t=1;
                    sudoku.forEach((elem,inx)=>{
                        elem.forEach((correctElem)=>{
                            let inp=document.querySelector(`.elm${t}`);
                        if(correctElem==0)
                        correctElem="";
                        inp.value=correctElem;
                        t++;

                        })
                    });
                    }
}
// setup();


