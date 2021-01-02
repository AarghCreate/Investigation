var PassCode;
function setup()
{
    createCanvas( displayWidth , displayHeight );
    PassCode = prompt("PassCode");
}
function draw()
{
    if( PassCode === "ytrewq" )
    {
        background( "black" );
    }else
    {
        close();
    }
}