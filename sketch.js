var PassCode;
var LOGO
function preload()
{
    LOGO = loadImage( "LOGO.png" );
}
function setup()
{
    createCanvas( 1350 , 740 );
    PassCode = prompt("PassCode");
}
function draw()
{
    if( PassCode === "wfuhefinsi" )
    {
        background( LOGO );
        push();
        fill( "white" );
        textSize( 20 );
        text( "Your ID is 0001" , 630 , 50 );
        pop();
    }else if( PassCode === "lrkynfieng" )
    {
        background( LOGO );
        push();
        fill( "white" );
        textSize( 20 );
        text( " Your ID is 0002" , 630 , 50 );
        pop();
    }else 
    {
        close();
    }
}