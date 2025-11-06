const {Command}=require("commander")
const program=new Command();

program.option('-s','small pizza').option('-l','large pizza').option('-n , --shop-name <shop_name>','whats shop name');
program.parse();
let map_details=program.opts();
// console.log(program.opts());
function pizzaDetials(mpp){
    console.log('pizza details:');
    for(const key in mpp){
        console.log(`${key}:${mpp[key]}`);
    }
}
pizzaDetials(map_details);