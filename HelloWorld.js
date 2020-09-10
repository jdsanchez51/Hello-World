//console.log(process.argv);
var name = "World"
if(process.argv.length == 3)
{
	name = process.argv[2];
}
//console.log(process.argv.length);
console.log("Hello " + name);