var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var number = [ 3, 30, 50,1,22,55,1,2,66,88,222,36,3,2,1]
const Mapf=()=>{
    var a = words.map(word => word);
    var b = words.map(word => word.length );
    var c = number.map(c => c * 20);
    console.log( 'Map function', a , b, c)
 
    }
export default Mapf;

