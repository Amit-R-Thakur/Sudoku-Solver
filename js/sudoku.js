let sudoku=[
[0 ,0, 0, 2, 6, 0, 7, 0, 1],
[6, 8, 0, 0, 7, 0, 0, 9, 0],
[1,9 ,0 ,0, 0 ,4 ,5 ,0 ,0],
[8, 2, 0 ,1 ,0 ,0, 0, 4, 0],
[0, 0, 4 ,6 ,0 ,2, 9 ,0 ,0],
[0, 5, 0 ,0 ,0 ,3 ,0 ,2, 8],
[0, 0, 9 ,3, 0 ,0, 0, 7, 4],
[0, 4, 0 ,0 ,5 ,0 ,0 ,3 ,6],
[7, 0, 3 ,0, 1 ,8 ,0 ,0, 0]
];

function setup()
{
    let mainDiv=document.createElement("div");
    mainDiv.classList="main";
    let set=document.createElement("div");
    set.classList="sudokuSetup";
    mainDiv.appendChild(set);
    let c=0;
   for(let i=0;i<sudoku.length;i++)
   {
        for(let j=0;j<sudoku[i].length;j++)
        {
            c++;
            let newdiv=document.createElement("div");
            newdiv.classList=`element elm${c} `
            if(j==3||j==6)
            newdiv.classList.add(`borderleft`);
            if(i==3||i==6)
            newdiv.classList.add(`bordertop`);
           let inp=document.createElement("input");
           if(sudoku[i][j]!=0)
           {
            inp.value=sudoku[i][j];
            inp.setAttribute("readonly","");
           }
            newdiv.appendChild(inp);

            // newdiv.innerHTML=`<input value="${sudoku[i][j]}">`;
            set.appendChild(newdiv);
        }
    
    }
      
    document.body.appendChild(mainDiv);


}
setup();


