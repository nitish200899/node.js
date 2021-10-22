const {readFile,writeFile,} = require('fs');

readFile('/content/subfolder/first.txt' ,'utf8', (err,result) => {
    if(err)
    {
        console.log(err);
        return err;
    }
const first = result;
readFile('/content/subfolder/first.txt' ,'utf8', (err,result) =>{
    if(err)
    {
        console.log(err);
        return err;
    }
const second = result;
writeFile('./content/subfolder/fourth.txt' , 
    `Here is the result ${first},${second}`,
    (err,result) =>
    {
        if(err)
        {
            console.log(err);
            return err;
        }
    console.log(result);
    }
  )
    })
})




